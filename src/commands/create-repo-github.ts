import { githubApi } from './../service/api';
import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'make:github-repo',
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
    
        return repository.clone_url
    }

    async function cloneRepo(repoUrl: String) {
        await system.run(`git clone ${repoUrl}`)
    }

    const spinner = spin("Creating repo")
    const repoUrl = await createRepo(repoName, repoDescription)
    spinner.stop()

    if(repoUrl) {
        spinner.start("Cloning remote repository to machine")
        await cloneRepo(repoUrl)
        spinner.stop()
    }        

    success("Repository succesfuly created")
  }
}
