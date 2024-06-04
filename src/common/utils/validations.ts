export const isEmailValid = (email: string) => {
  const emailPattern = /[a-zA-Z0-9.+-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;

  return emailPattern.test(email);
};
