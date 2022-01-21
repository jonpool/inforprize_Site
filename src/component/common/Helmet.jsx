import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || React Multipurpose Template </title>
                    <meta name="description" content="Inforprize || Pleasure in technology - Marketing - Video - Website - Apps & Systems" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
