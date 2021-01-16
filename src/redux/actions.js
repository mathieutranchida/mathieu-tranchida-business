export const requestNewLanguage = () => ({
  type: "REQUEST_NEW_LANGUAGE",
});

export const receiveNewLanguage = (data) => ({
  type: "RECEIVE_NEW_LANGUAGE",
  data,
});

export const receiveNewLanguageError = () => ({
  type: "RECEIVE_NEW_LANGUAGE_ERROR",
});
