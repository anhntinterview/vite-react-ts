import React from "react";
import { IShopPage } from "@lxb/shared/interface/shop/shop.interface";
import { BaseComponent } from "@lxb/template/base/base-component.core";
import ShopModel from "./shop.model";
import ShopComponent from "@lxb/app/component/shop";

class ShopPage extends BaseComponent({
  model: new ShopModel(),
})<IShopPage> {
  baseElement = () => <ShopComponent model={this.props.model} />;
}

export default ShopPage;
