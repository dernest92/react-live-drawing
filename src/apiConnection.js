import axios from "axios";
const ENDPOINT = "http://localhost:3000";

const instance = axios.create({
  baseURL: ENDPOINT
});

export default {
  async createBoard(boardName) {
    const res = await instance.post("/boards", { boardName });
    const data = await res.data;
    return data;
  },
  async getDirectory() {
    const res = await instance.get("/directory");
    const data = await res.data;
    return data;
  }
};
