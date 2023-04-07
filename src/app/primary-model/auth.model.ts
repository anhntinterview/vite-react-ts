import SignInService from "service/derived/auth/signin.service";
import { Container } from "typedi";

class AuthModel {
    constructor() { }
    public readonly userService = Container.get(SignInService)
}

export default AuthModel