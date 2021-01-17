const axios = require("axios");

module.exports = {
  async getUsers(req, res) {
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
  },
};
