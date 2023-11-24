import React from 'react';
import Navbars from '../components/Navbar/Navbar';
import Footers from '../components/Footer/Footer';
import Container from './Container';

const Layout = (props) => {
    const children = props.children
    return (
        <div>
            <Navbars />
            <Container>
                {children}
            </Container>
            <Footers />
        </div>
    );
}

export default Layout;