import api from "./api";

export const getChapters = () =>
  api.get("/gita/chapters");

export const getChapter = (id) =>
  api.get(`/gita/chapter/${id}`);

export const searchVerse = (query) =>
  api.get(`/gita/search?q=${query}`);

export const getDailyVerse = () =>
  api.get("/gita/daily");