import React from "react";
import { BaseComponent } from "@lxb/template/base/base-component.core";
import AuthModel from "@lxb/app/component/auth/auth.model";
import { IAuthContainer } from "@lxb/shared/interface/shop/auth.interface";
import LoginComponent from "@lxb/app/component/auth/login";

class LoginContainer extends BaseComponent({
  model: new AuthModel(),
})<IAuthContainer> {
  baseElement = () => <LoginComponent model={this.props.model} />;
}

export default LoginContainer;
