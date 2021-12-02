const fetchGithubRepo = require('./fetchGithubRepo')

const urlInput = document.querySelector("#urlName");
const button = document.querySelector("#urlSubmit");
const repoName = document.querySelector("#repoName");
const repoPic = document.querySelector("#repoPic");
const repoLink = document.querySelector("#repoLink");
const repoStars = document.querySelector("#repoStars");
const repoForks = document.querySelector("#repoForks");
const repoLan = document.querySelector("#repoLan");


button.addEventListener("click", () => {
  const apiURL = urlInput.value;
  console.log(apiURL);
  fetchGithubRepo(apiURL, (response) => { 
    repoName.innerText = response.full_name
    repoPic.innerText = response.owner.avatar_url
    repoLink.innerText = response.html_url
    repoStars.innerText = response.stargazers_count
    repoForks.innerText = response.forks
    repoLan.innerText = response.language

    console.log(JSON.stringify(response))
  }); 
});

