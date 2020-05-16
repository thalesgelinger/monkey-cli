import { githubApi } from './../service/api';
import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'mkrepo:github',
  description: 'Create a new repository on github',
  run: async (toolbox: GluegunToolbox) => {
    const {
      print: { success, error, spin },
      parameters,
      options,
      system,
      filesystem
    } = toolbox

    const repoName = parameters.first

    const repoDescription = options?.d 

    async function createRepo(name: String, description: String = "") {

        if(!name) {
            error("You must specify a name for your new project")
            return 
        }

        const spinner = spin("Creating repo")

        const data = {
            name,
            description,
            "homepage": "https://github.com",
            "private": false,
            "has_issues": true,
            "has_projects": true,
            "has_wiki": true,
            "auto_init": true
        }
    
        async function getUserCredentials() {
            
            function getValueFromParentArrayItem(array: Array<String>, itemName: String): string {
                return array[array.indexOf(itemName) + 1].toString()
            }
            
            const gitconfig = await filesystem.readAsync(`${process.env.HOME}/.gitconfig`, "utf8")
            
            const gitconfigSanitized = gitconfig.split(/\]|\[/) 
                
            const userInfo = getValueFromParentArrayItem(gitconfigSanitized, "user")
                                .replace(/\s/g, " ")
                                .split(" ")
                                .filter(item => item !== "" && item !== "=")
        
            return {
                username: getValueFromParentArrayItem(userInfo,"name"),                        
                password: getValueFromParentArrayItem(userInfo,"password")    
            }
        }

        const auth = await getUserCredentials()

        const { data: repository } = await githubApi.post("/user/repos", data, { auth })
    
        spinner.stop()

        return repository.clone_url
    }

    async function cloneRepo(repoUrl: String) {
        const spinner = spin("Cloning remote repository to machine")
        await system.run(`git clone ${repoUrl}`)
        spinner.stop()
    }

    const repoUrl = await createRepo(repoName, repoDescription)

    if(repoUrl) {
        await cloneRepo(repoUrl)
        success("Repository succesfuly created")
    }        

  }
}
