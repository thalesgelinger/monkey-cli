import { githubApi } from './../service/api';
import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'make:github-repo',
  description: 'Create a new repository on github',
  run: async (toolbox: GluegunToolbox) => {
    const {
      print: { success, error, info, spin },
      parameters,
      options,
      system,
      filesystem
    } = toolbox

    const repoName = parameters.first

    const repoDescription = options?.d 

    async function createRepo(name, description="") {

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
            "has_wiki": true
        }
    
        const { data: repository } = await githubApi.post("/user/repos", data, {
                                auth: {
                                    username: "thalesgelinger",
                                    password: "Th@l3sG3l1ng3R"
                                }
                            })
    
        return repository.clone_url
    }

    async function cloneRepo(repoUrl) {
        system.run(`git clone ${repoUrl}`)
    }

    function doInitialCommit(repoName) {
        system.run(`cd ${repoName}`)
        filesystem.append("./README.md",`### ${repoName}`)
        system.run("git add .")
        system.run("git commit -m \"Initial commit\"")
        system.run("git push")        
    }

    const repoUrl = createRepo(repoName, repoDescription)

    if(repoUrl) {
        cloneRepo(repoUrl)
        doInitialCommit(repoName)
    }

  }
}
