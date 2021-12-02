(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchGithubRepo.js
  var require_fetchGithubRepo = __commonJS({
    "fetchGithubRepo.js"(exports, module) {
      var fetchGithubRepo2 = (repoName2, onDataFetched) => {
        fetch("https://api.github.com/repos/" + repoName2).then((response) => response.json()).then((jsonData) => {
          onDataFetched(jsonData);
        });
      };
      module.exports = fetchGithubRepo2;
    }
  });

  // index.js
  var fetchGithubRepo = require_fetchGithubRepo();
  var urlInput = document.querySelector("#urlName");
  var button = document.querySelector("#urlSubmit");
  var repoName = document.querySelector("#repoName");
  var repoPic = document.querySelector("#repoPic");
  var repoLink = document.querySelector("#repoLink");
  var repoStars = document.querySelector("#repoStars");
  var repoForks = document.querySelector("#repoForks");
  var repoLan = document.querySelector("#repoLan");
  button.addEventListener("click", () => {
    const apiURL = urlInput.value;
    console.log(apiURL);
    fetchGithubRepo(apiURL, (response) => {
      repoName.innerText = response.full_name;
      repoPic.innerText = response.owner.avatar_url;
      repoLink.innerText = response.html_url;
      repoStars.innerText = response.stargazers_count;
      repoForks.innerText = response.forks;
      repoLan.innerText = response.language;
      console.log(JSON.stringify(response));
    });
  });
})();
