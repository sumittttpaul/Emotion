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

/**
 * @Access_Denied_For_Null_Pages
 **/
export const NoAccessToNullPages = (gssp: any) => {
  return async () => {
    return {
      redirect: {
        destination: '/',
        statusCode: 302,
      },
    };
  };
};

/**
 * @Access_Denied_For_Index_Pages
 **/
export const NoAccessToIndexPages = (gssp: any) => {
  return async () => {
    return {
      redirect: {
        destination: '/home',
        statusCode: 302,
      },
    };
  };
};
