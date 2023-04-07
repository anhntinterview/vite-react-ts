import React from "react";
import { IShopPage } from "shared/interface/shop/shop.interface";
import { BaseComponent } from "template/base-component.core";
import ShopModel from "./shop.model";
import ShopComponent from "app/component/shop";

class ShopPage extends BaseComponent({
  model: new ShopModel(),
})<IShopPage> {
  baseElement = () => <ShopComponent model={this.props.model} />;
}

export default ShopPage;
