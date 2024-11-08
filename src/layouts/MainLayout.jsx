import React from 'react';
import Nav from '../Compontents/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Compontents/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='h-16'>
            <Nav></Nav>
            
            </div>
            <div>
            <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayout;