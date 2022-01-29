import React, { Component } from "react";

const ServiceList = [
    {
        icon: '01',
        title: 'Digital Marketing',
        description: 'World’s no.1 Digital Marketing Agency that help you to go ahead!'
    },
    {
        icon: '02',
        title: 'Website Development',
        description: 'Inforprize’s designers and developers help the customers to craft most elegant designs that you could never imagine.'
    },
    {
        icon: '03',
        title: 'Marketing & Reporting',
        description: 'Social media marketing has been regarded as the best tool to make a business visible. '
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;