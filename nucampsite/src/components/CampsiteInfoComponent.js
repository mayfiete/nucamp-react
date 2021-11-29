

import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Label, Modal, ModalHeader, ModalBody, } from 'reactstrap';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);


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
            touched: {
                rating: false,
                author: false,
                text: false
            },
            isModalOpen: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.campsiteId, values.rating, values.author, values.text);
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render() {
        return (
            <React.Fragment>
                <button outline className="fa-lg" onClick={this.toggleModal} >
                    <span className="fa fa-pencil-square-o">Submit Comment</span>
                </button>
                <div>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <div className="form-group">
                                    <Label htmlFor="rating" >Rating</Label>

                                    <div className="form-group">
                                        <Control.select
                                            multiple={false}
                                            model=".rating"
                                            placeholder="Rating"
                                            id="rating"
                                            name="rating"
                                            label="Rating"
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
                                        <Label htmlFor="author">Your Name</Label>
                                        <Control.text
                                            model=".author"
                                            id="author"
                                            name="author"
                                            label="Author"
                                            placeholder="Your Name"
                                            className="form-control"

                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Label htmlFor="text">Comment</Label>
                                        <Control.textarea
                                            model=".text"
                                            id="text"
                                            name="text"
                                            label="Comment"
                                            rows="6"
                                            placeholder="Comment"
                                            className="form-control"

                                        />
                                    </div>
                                    <span className="form-group">
                                        <Button type="submit" color="primary">
                                            <i /> Submit
                                        </Button>
                                    </span>
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

function RenderComments({ comments, addComment, campsiteId }) {
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
                    <CommentForm campsiteId={campsiteId} addComment={addComment} />
                </div>

            </React.Fragment>
        )
    }
    return <div > </div>
}



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
                    <RenderComments
                        comments={props.comments}
                        addComment={props.addComment}
                        campsiteId={props.campsite.id}
                    />
                </div>
            </div>
        );

    }
    return <div > </div>
}





export default CampsiteInfo;