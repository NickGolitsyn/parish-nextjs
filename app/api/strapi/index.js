import axios from "axios";
// const url = "http://localhost:1337/api/services";
// export const readServices = () => axios.get(url);

const url = "http://localhost:1337/api/services";

export const readServices = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};