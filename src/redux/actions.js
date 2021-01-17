export const requestNewLanguage = () => ({
  type: "REQUEST_NEW_LANGUAGE",
});

export const receiveNewLanguage = (content) => ({
  type: "RECEIVE_NEW_LANGUAGE",
  content,
});

export const receiveNewLanguageError = () => ({
  type: "RECEIVE_NEW_LANGUAGE_ERROR",
});
