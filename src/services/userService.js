//CONFIGS OF REQUESTS
import { api, requestConfig } from "../utils/config";

//GET USER BY ID

const getUserById = async (id, token) => {
  const config = requestConfig("GET", null, token);
  try {
    const res = await fetch(api + "users/"+id, config);
    const data = await res.json(); // resolveu o problema do valor não Serialavel
    console.log(requestConfig("GET", null, token))
    return data;
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  getUserById,
};

export default userService;
