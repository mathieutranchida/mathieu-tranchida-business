export const receiveNewLanguage = (content) => ({
  type: "RECEIVE_NEW_LANGUAGE",
  content,
});

export const updateLoadState = (data) => ({
  type: "UPDATE_LOAD_STATE",
  data,
});
