export const emailValidation =
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
export const passwordValidation = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

export const emailCheck = function (email_address: string) {
  const email_regex = emailValidation;
  return email_regex.test(email_address);
};

export const passwordCheck = function (password: string) {
  const password_regex = passwordValidation;
  return password_regex.test(password);
};
