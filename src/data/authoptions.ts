import githubicon from '../../public/githubicon.svg'
import bitbucketicon from '../../public/bitbucketicon.svg'
import azureicon from '../../public/azureicon.svg'
import gitlabicon from '../../public/gitlabicon.svg'
import ssoicon from '../../public/keyicon.svg'

const Saas = [
    {
        key: 1,
        name: "Github",
        icon: githubicon,
        link: "/",
    },
    {
        key: 2,
        name: "Bitbucket",
        icon: bitbucketicon,
        link: "/",
    },
    {
        key: 3,
        name: "Azure Devops",
        icon: azureicon,
        link: "/",
    },
    {
        key: 4,
        name: "GitLab",
        icon: gitlabicon,
        link: "/",
    }
]

const SelfHosted = [
    {
        key: 1,
        name: "GitLab",
        icon: gitlabicon,
        link: "/",
    },
    {
        key: 2,
        name: "SSO",
        icon: ssoicon,
        link: "/"
    }
]

const authOptions = {
    saas: Saas,
    selfHosted: SelfHosted,
};
  
export default authOptions;