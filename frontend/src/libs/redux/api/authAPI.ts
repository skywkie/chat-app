import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_SERVER_AUTH_URL } from "@utils/constants";

interface User {
  username: string;
  password: string;
}

const authBaseQuery = fetchBaseQuery({
  baseUrl: BASE_SERVER_AUTH_URL,
  method: "POST",
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: authBaseQuery,
  endpoints: (builder) => ({
    createAccount: builder.mutation<User, Partial<User>>({
      query: (user) => ({ url: "/create-account", body: user }),
    }),
    deleteAccount: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: "/delete-account",
        body: user,
      }),
    }),
  }),
});

export const { useCreateAccountMutation, useDeleteAccountMutation } = authApi;

export const { endpoints, reducerPath, reducer, middleware } = authApi;
