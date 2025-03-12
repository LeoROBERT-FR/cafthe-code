import React from 'react';
/* npm install react-router-dom */
import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            {/* Outlet : Là où s'affichent les pages enfants*/}
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;