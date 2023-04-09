import { Service } from "typedi";
import { UseMutation } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { UseQuery, MutationDefinitionCustomization } from "@lxb/redux/type";

function useRTKQuery<R>(useQuery: UseQuery<R>) {
    const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
        useQuery(undefined);
    return { data, isLoading, isFetching, isSuccess, isError, error, refetch };
}

function useRTKMutation<B, R>(
    useMutation: UseMutation<MutationDefinitionCustomization<B, R>>
) {
    const [
        mutationAction,
        x
        // { data, isLoading, isError, isSuccess, isUninitialized, error },
    ] = useMutation();

    return {
        mutationAction,
        x
        // data,
        // isLoading,
        // isSuccess,
        // isError,
        // isUninitialized,
        // error
    };
}

@Service()
class HttpService<B, R> {
    public queryAPI = useRTKQuery;
    public mutationAPI = useRTKMutation;

    public execMutation(
        body: B,
        useMutation: UseMutation<MutationDefinitionCustomization<B, R>>
    ) {
        const {
            mutationAction,
            x
            // data,
            // isLoading,
            // isSuccess,
            // isError,
            // isUninitialized,
            // error
        } = this.mutationAPI(useMutation);
        mutationAction(body).unwrap();
        return x
        // return { data, isLoading, isSuccess, isError, isUninitialized, error };
    }
}

export default HttpService;
