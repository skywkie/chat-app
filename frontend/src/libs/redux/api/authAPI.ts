import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_SERVER_AUTH_URL } from "@utils/constants";
import type { RequestUserData, ResponseAuth } from "@utils/types";

const authBaseQuery = fetchBaseQuery({
  baseUrl: BASE_SERVER_AUTH_URL,
  method: "POST",
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: authBaseQuery,
  endpoints: (builder) => ({
    signUp: builder.mutation<ResponseAuth, RequestUserData>({
      // <responseType, resquestType>
      query: (userData) => ({ url: "/sign-up", body: userData }),
    }),
    signIn: builder.mutation<ResponseAuth, RequestUserData>({
      // void => коды 200, 201
      query: (userData) => ({ url: "/sign-in", body: userData }),
    }),
    logOut: builder.mutation<void, void>({
      query: () => ({ url: "/logout" }),
    }),
    // TODO: later must be used
    deleteAccount: builder.mutation<void, RequestUserData>({
      query: (user) => ({
        url: "/delete-account",
        body: user,
      }),
    }),
  }),
});

export const { useLogOutMutation, useSignInMutation, useSignUpMutation } = authApi;

export const { endpoints, reducerPath, reducer, middleware } = authApi;
