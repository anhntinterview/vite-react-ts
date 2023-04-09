import {
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    MutationDefinition,
} from "@reduxjs/toolkit/dist/query/react";
import { BaseQueryFn } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
export type { UseQuery } from "./useQuery";

export type MutationDefinitionCustomization<B, R> = MutationDefinition<
    B,
    BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
    >,
    "User",
    R,
    "api"
>;
