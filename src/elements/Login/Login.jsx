import React, { Component } from "react";

class ContactOne extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnEmail: '',
            rnPassword: '',
            
        };
    }
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title" align="center" >Login</h2>
                                
                            </div>
                            <div className="form-wrapper">

                                <form>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                            placeholder="Your email *"
                                        />
                                    </label>
                                    <label htmlFor="item02">
                                        <input
                                            type="password"
                                            name="subject"
                                            id="item03"
                                            value={this.state.rnPassword}
                                            onChange={(e)=>{this.setState({rnPassword: e.target.value});}}
                                            placeholder="Password"
                                        />
                                    </label>
                                    
                                    <button className="rn-button-style--2 " type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Login</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/about-1.jpg" alt="Infoprize"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactOne;