import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coreSliceApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.REACT_APP_API_FQDN,
    }),
    tagTypes: ["User"],
    endpoints: () => ({}),
});

export default coreSliceApi.reducer;
