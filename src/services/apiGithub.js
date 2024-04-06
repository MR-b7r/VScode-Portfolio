import axios from "axios";

const API_USER_URL = "https://api.github.com/users/MR-b7r";
const API_REPOS_URL = "https://api.github.com/users/MR-b7r/repos";

export async function getUser() {
  try {
    const responseUser = await axios.get(`${API_USER_URL}`);
    const responseRepos = await axios.get(`${API_REPOS_URL}`);
    return [responseUser.data, responseRepos.data];
  } catch (err) {
    console.error(err);
    return null;
  }
}
