import * as React from "react";
import { IShopComponentProps } from "@lxb/shared/interface/shop/shop.interface";
import LoginComponent from "../auth/login";
import LoginContainer from "@lxb/app/container/auth/login";

const ShopComponent: React.FunctionComponent<IShopComponentProps> = (props) => {
    React.useEffect(() => {
        console.log('hello world');
    },[])
    return (
        <div className="">
            <h1>Shop component here</h1>
        </div>
    );
};

export default ShopComponent;
