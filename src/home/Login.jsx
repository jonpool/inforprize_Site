import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import LoginOne from "../elements/Login/Login";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/FooterTwo";


class Login extends Component{
    
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Login' />

                <Header colorblack="color--white" logoname="logo.png" text-color="blue"/>

               {/* Start Contact Page Area  */}
                <div className="rn-contact-page ptb--120 bg_color--2" align="center" color="white">
                    <LoginOne />
                </div>
                {/* End Contact Page Area  */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />
                
            </React.Fragment>
        )
    }
}
export default Login