export const getUser = ({ auth}) => auth.user.name;
export const isUserLogin = ({ auth }) => auth.isLogin;
export const isToken = ({ auth }) => auth.token;
export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};