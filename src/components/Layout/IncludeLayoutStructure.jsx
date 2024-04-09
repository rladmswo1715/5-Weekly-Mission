import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

function IncludeLayoutStructure() {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default IncludeLayoutStructure;