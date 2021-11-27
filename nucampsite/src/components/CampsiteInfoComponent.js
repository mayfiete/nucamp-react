

import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Label, Col, Row, FormGroup, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import Select from 'react-select'


/* 
    construct a Reactstrap Modal that contains a React Redux form for users 
    to submit their comments as shown in the image, as detailed below. 

    Implement the rating field with Control.select and options 1-5, 
    the author field with Control.text, and the comment text field with Control.textarea and 6 rows. 
    For the model of the author, use ".author". For the model of the rating, use ".rating". 
    For the model of the comment text, use ".text". The id and name for each should be based on the model. 
    Refer to ContactComponent.js for examples of using LocalForm and the Control component.

    Make sure that for every Control component, the name and id properties are the same as the model, 
    without the dot (e.g. model=".text" id="text" name="text"). This is important in how the values are 
    passed to the handleSubmit() method and used in the corresponding action creator.

    For formatting: You do not need to use the Bootstrap grid for this (so no Rows or Cols). 
    Format this in a way similar to the Login modal form, but instead of using the 
    FormControl component (as that is not available for use with LocalForm), 
    use a div with className="form-group" around each set of Controls and their corresponding Labels. 
    You should end up with three divs inside the LocalForm. For all Controls, 
    set className="form-control".

*/

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: '1',
            author: '',
            text: '',
            touched: {
                ratings: false,
                author: false,
                text: false
            },
            isModalOpen: false
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);

        /* 
        
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        */
    }



    handleSubmit(values) {
        // echo back the values
        console.log(values);
        // event.preventDefault();
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleCommentSubmit(values) {
        alert(`Rating:  ${this.rating.value}   Author: ${this.author.value} 
                Text: ${this.text.checked}`);
        this.toggleModal();
    }

    handleRatingChange(value) {
        this.setState({ rating: value });
    }


    render() {
        const optionz = [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
        ];
        return (
            <React.Fragment>
                <button outline className="fa-lg" onClick={this.toggleModal} >
                    <span className="fa fa-pencil-square-o">Submit Comment</span>
                </button>
                <div>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <Label htmlFor="rating" md={2}>Rating</Label>

                                    <div className="form-group">
                                        <Control.select
                                            multiple={false}
                                            option value={this.state.rating}
                                            model=".rating"
                                            placeholder="Rating"
                                            id="rating"
                                            value={this.state.rating}
                                            onChange={this.handleRatingChange}
                                            className="form-control"

                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>

                                        </Control.select>

                                    </div>
                                    <div className="form-group">
                                        <Control.text
                                            model=".author"
                                            id="author"
                                            name="author"
                                            placeholder="Your Name"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Control.textarea
                                            model=".text"
                                            id="text"
                                            name="text"
                                            placeholder="Comment"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div >
            </React.Fragment >
        );
    }
}

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
            <React.Fragment>
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {
                        comments.map(comment => {
                            return (
                                <div key={comment.id}>
                                    <p>{comment.text}</p>
                                    <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                </div>
                            );
                        })
                    }
                    <CommentForm />
                </div>

            </React.Fragment>
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