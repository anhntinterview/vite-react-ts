import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { selectLoginResult } from 'redux/selector/user.selector';
import { User } from "shared/entity/User";

export const coreSliceApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.REACT_APP_API_FQDN,
  }),
  // tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (accountLogin: LoginBodyRO) => ({
        url: '/users/login',
        method: 'POST',
        body: accountLogin,
      }),
      transformResponse(rawResult: UserRO, meta, arg) {
        return rawResult;
      },
    }),
  }),
  // endpoints: () => ({}),
});

export const { useLoginMutation } = coreSliceApi;

export default coreSliceApi.reducer;