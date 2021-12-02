const fetchGithubRepo = require('./fetchGithubRepo');

fetchGithubRepo('sinatra/sinatra', (repoData) => {
    console.log(repoData);
    document.write(JSON.stringify(repoData));
});
 

