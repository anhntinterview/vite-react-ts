import { Container } from "typedi";
import AuthService from "@lxb/service/derived/auth/auth.service";
import { LoginBodyDto } from "@lxb/shared/dto/login.dto";
import { UserEntity } from "@lxb/shared/entity/User";
import { useLoginMutation } from "@lxb/redux/api";

class AuthModel {
    constructor() { }
    public readonly authService = Container.get(
        AuthService<LoginBodyDto, UserEntity>
    );
    public loginBodyDto = new LoginBodyDto("kminchelle", "0lelplR");

    public login = () => {
        const x = this.authService.signIn(this.loginBodyDto, useLoginMutation);
        console.log(`x: -------`, x.status);
    }
}

export default AuthModel