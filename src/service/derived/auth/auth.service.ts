import { Container, Service } from 'typedi';
import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import HttpService from '@lxb/service/base/http.service';
import { MutationDefinitionCustomization } from '@lxb/redux/type';

// B: Body, R: Response data
@Service()
class AuthService<B, R> {
    protected httpService = Container.get(HttpService<B, R>);

    public signIn(
        body: B,
        useMutation: UseMutation<MutationDefinitionCustomization<B, R>>
    ) {
        return this.httpService.execMutation(body, useMutation);
    }
}

export default AuthService;
