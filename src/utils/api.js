import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3?api_key=6a2770e1df04412edbca64a1812495f3";

const TMBD_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN;

const Headers = {
  Authorization: `Bearer ${TMBD_TOKEN}`,
};

export const FetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3${url}?api_key=6a2770e1df04412edbca64a1812495f3`, { Headers, params });
    return data;
  } catch (err) {
    return err;
  }
};
