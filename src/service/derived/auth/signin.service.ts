import { Container, Service } from "typedi";
import HttpService from "service/base/http.service";

@Service()
class SignInService {

    constructor() { }
    protected httpService = Container.get(HttpService);


}

export default SignInService