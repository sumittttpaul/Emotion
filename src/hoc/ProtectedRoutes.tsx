/**
 * @Access_Denied_If_User_Exist
 **/
export const NoAccessToUserExistPages = (gssp: any) => {
  return async (Context: any) => {
    const { req } = Context;
    const token = req.cookies.token;
    if (token) {
      return {
        redirect: {
          destination: '/',
          statusCode: 302,
        },
      };
    }
    return await gssp(Context);
  };
};

/**
 * @Access_Denied_If_User_Not_Exist
 **/
export const NoAccessToNullUserPages = (gssp: any) => {
  return async (Context: any) => {
    const { req } = Context;
    const token = req.cookies.token;
    if (!token) {
      return {
        redirect: {
          destination: '/',
          statusCode: 302,
        },
      };
    }
    return await gssp(Context);
  };
};
