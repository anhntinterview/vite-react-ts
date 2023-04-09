import * as React from "react";
import { ILoginProps } from "@lxb/shared/interface/auth/signup/signup.interface";
import { skipToken } from "@reduxjs/toolkit/query";
import { UserEntity } from "@lxb/shared/entity/User";
import Loading from "@lxb/template/loading";

const LoginComponent: React.FunctionComponent<ILoginProps> = (props) => {
    // const { data } = props.model.login();
    // props.model.login()
   
    // const [user, setUser] = React.useState<UserEntity>();

    // if (isLoading) {
    //     return <Loading isLoading />;
    // } else if (isSuccess) {
    //     setUser(data);
    //     return <div className="">{JSON.stringify(user)}</div>;
    // } else if (isError) {
    //     return <div>{error!.toString()}</div>;
    // }

    return <div className="">
        <button onClick={() => props.model.login()}>Click me!</button>
    </div>;
};

export default LoginComponent;
