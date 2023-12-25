import React from 'react';

//import Components
import Header from './Header';
import Footer from './Footer';
import Sidebar from './SideBar';
const VerticalLayout = (props: any) => {
    return (
        <React.Fragment>
            <div id="layout-wrapper">
                <Header />
                <Sidebar />
                <div className="main-content">
                    {props.children}
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    );
};

export default VerticalLayout;
