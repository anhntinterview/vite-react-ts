import React from "react";
import Loading from "@lxb/template/loading";
import { Route, Routes } from "react-router-dom";

const LoginContainer = React.lazy(
    () =>
        import(
            /* webpackChunkName: "LoginContainer" */
            "@lxb/app/container/auth/login"
        )
);

const ShopPage = React.lazy(
    () =>
        import(
            /* webpackChunkName: "ShopPage" */
            "@lxb/app/page/shop"
        )
);

function App() {
    return (
        <div className="">
            <React.Suspense fallback={<Loading isLoading={true} />}>
                <Routes>
                    <Route path="" element={<ShopPage />} />
                </Routes>
                <Routes>
                    <Route path="/login" element={<LoginContainer />} />
                </Routes>
            </React.Suspense>
        </div>
    );
}

export default App;
