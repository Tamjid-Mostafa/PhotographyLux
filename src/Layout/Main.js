import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterBar from '../Pages/Footer/FooterBar';
import Header from '../Pages/Header/Header';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterBar></FooterBar>
        </div>
    );
};

export default Main;