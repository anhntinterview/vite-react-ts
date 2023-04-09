import { coreSliceApi } from "@lxb/redux/slice";
import { LoginBodyDto } from "@lxb/shared/dto/login.dto";
import { UserEntity } from "@lxb/shared/entity/User";
import { instanceToPlain } from "class-transformer";

export const extendedApiSlice = coreSliceApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (accountLogin: LoginBodyDto) => {
                return {
                    url: "/auth/login",
                    method: "POST",
                    body: instanceToPlain(accountLogin),
                };
            },
            transformResponse(rawResult: UserEntity, meta, arg) {
                return rawResult;
            },
        }),
    }),
});

export const { useLoginMutation } = extendedApiSlice;
