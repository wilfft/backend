const { Router } = require("express");
const axios = require("axios");
const routes = Router();

/* 
<https://api.github.com/users?per_page=10&since=19>; rel="next", 
<https://api.github.com/users{?since}>; rel="first"
*/
///retrieves ALL USERS
routes.get("/api/users", async (req, res) => {
  const since = req.query.since;
  await axios
    .get(`/users?per_page=10&since=${since}`)
    .then((response) => {
      const users = response.data;
      const filteredUsers = users.map((e) => {
        return { id: e.id, login: e.login };
      });
      return res.json(filteredUsers);
    })

    .catch((err) => console.error(err));
});

///retrieveng repositories
routes.get("/api/users/:username/repos", async (req, res) => {
  const username = req.params.username;
  await axios
    .get(`/users/${username}/repos?type=owner`)
    .then((response) => {
      const repos = response.data;
      const filteredRepos = repos.map((e) => {
        return { id: e.id, name: e.name, url: e.html_url };
      });
      return res.json(filteredRepos);
    })
    .catch((err) => console.error(err));
});

//retrieves DETAILS of user
routes.get("/api/users/:username/details", async (req, res) => {
  const username = req.params.username;
  const response = await axios.get(`/users/${username}`);
  const user = {
    id: response.data.id,
    login: response.data.login,
    html_url: response.data.html_url,
    created_at: response.data.created_at,
  };
  return res.json(user);
});

module.exports = routes;
