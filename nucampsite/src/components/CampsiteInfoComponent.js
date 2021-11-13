

import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



class CampsiteInfo extends Component {
    constructor(props) {
        super(props);

        this.campsite = { campsite: this.campsite };
        // this.campsite = { campsite: null };

    };

    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1" >
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle> {campsite.image} </CardTitle>
                        <CardText> {campsite.description} </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    // Inside its render method, check if an object with the name "campsite" 
    // (passed in via props) can be evaluated as truthy 
    // (e.g. is not null, is not undefined)
    render() {
        if (this.props.campsite) { // passing in campsite via props from parent component
            return (
                // If so, then return an empty div that has the Bootstrap row class as an attribute.
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                </div>
            )

        }
        return < div > </div >
    }
}



export default CampsiteInfo;