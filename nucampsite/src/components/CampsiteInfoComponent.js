

import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCampsite({ campsite }) {
    return (
        <div className="col-md-5 m-1" >
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText> {campsite.description} </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComments({ comments }) {
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
    return <div > </div>
}



// Inside its render method, check if an object with the name "campsite" 
// (passed in via props) can be evaluated as truthy 
// (e.g. is not null, is not undefined)
function CampsiteInfo(props) {
    if (props.campsite) { // passing in campsite via props from parent component
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );

    }
    return <div > </div>
}




export default CampsiteInfo;