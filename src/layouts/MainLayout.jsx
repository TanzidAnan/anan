
import Nav from '../Compontents/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

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
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;