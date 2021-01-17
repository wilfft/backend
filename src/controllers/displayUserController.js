const axios = require("axios");

module.exports = {
  async displayUser(req, res) {
    const username = req.params.username;
    const response = await axios.get(`/users/${username}`);
    const user = {
      id: response.data.id,
      login: response.data.login,
      html_url: response.data.html_url,
      created_at: response.data.created_at,
    };
    return res.json(user);
  },
};
