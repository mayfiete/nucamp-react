

import React, { Component } from 'react';
// maybe remove CardImgOverlay from here
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

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {
                        comments.map(comment => {
                            return (
                                <div key={comment.id}>
                                    <p>{comment.text}</p>
                                    <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        <div>   </div>
    }



    // Inside its render method, check if an object with the name "campsite" 
    // (passed in via props) can be evaluated as truthy 
    // (e.g. is not null, is not undefined)
    render() {
        if (this.props.campsite) { // passing in campsite via props from parent component
            return (
                // If so, then return an empty div that has the Bootstrap row class as an attribute.
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite.comments)}
                    </div>
                </div>
            )

        }
        return < div > </div >
    }
}



export default CampsiteInfo;