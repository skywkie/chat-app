import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_SERVER_AUTH_URL } from "@utils/constants";
import type { UserData } from "@utils/types";

const authBaseQuery = fetchBaseQuery({
  baseUrl: BASE_SERVER_AUTH_URL,
  method: "POST",
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: authBaseQuery,
  endpoints: (builder) => ({
    signUp: builder.mutation<void, UserData>({
      // <responseType, resquestType>
      query: (userData) => ({ url: "/sign-up", body: userData }),
    }),
    signIn: builder.mutation<void, UserData>({
      // void => коды 200, 201
      query: (userData) => ({ url: "/sign-in", body: userData }),
    }),
    logOut: builder.mutation<void, void>({
      query: () => ({ url: "/logOut" }),
    }),
    // TODO: later must be used
    deleteAccount: builder.mutation<void, UserData>({
      query: (user) => ({
        url: "/delete-account",
        body: user,
      }),
    }),
  }),
});

export const { useLogOutMutation, useSignInMutation, useSignUpMutation } = authApi;

export const { endpoints, reducerPath, reducer, middleware } = authApi;
