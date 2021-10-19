import React from 'react';
import {Layout} from 'antd';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./core/Routes/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AppRouter/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
