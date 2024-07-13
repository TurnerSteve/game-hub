import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "20bd0c11a3794251bd390bb18ff9664e",
  },
});
