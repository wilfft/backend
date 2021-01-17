const axios = require("axios");

module.exports = {
  async getRepository(req, res) {
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
  },
};
