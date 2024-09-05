import axios from "axios";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (code: string) => {
  const response = await API.post("/execute", {
    language: "javascript",
    version: "18.15.0",
    files: [
      {
        content: code
      }
    ]
  });
  return response.data;
};

export const getRuntimes = async () => {
  const response = await API.get("/runtimes")
  return response.data;
};