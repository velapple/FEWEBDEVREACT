import {React, Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Nav, NavItem, Row, Col, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish({dish}) {
    return(
        <div className="col-md-5 col-12 m-1">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card  key={dish.id}>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                 </Card>
            </FadeTransform>
        </div>
    )
}
class RenderComments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        console.log("modal clicked")
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });

      }

    render(){
        return (
            <div className="col-md-5 col-12 m-1">
                <Stagger in>
                        {this.props.comments.map((comment) => {
                            return (
                                <Fade in>
                                    <li className="comments text-left m-2 mb-5" style={{listStyleType: "none"}}>
                                        <p>{comment.comment}</p>
                                        <author>-- {comment.author}</author>, 
                                        <date>{ comment.date }</date>
                                    </li>
                                </Fade>
                                );
                            })}
                        </Stagger>

            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Button onClick={this.toggleModal}><span className="fa fa-comment fa-lg"></span> Submit Comment</Button>
                </NavItem>
            </Nav>
            <CommentForm isOpen={this.state.isModalOpen} dishId={this.props.dishId} toggle={this.toggleModal} postComment={this.props.postComment}/>
            </div>
        )
    }
}
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        
        // event.preventDefault();
    }

    render() {
        return(
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggleModal}>
                <ModalHeader toggle={this.props.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 2 characters. ',
                                            maxLength: 'Must be 15 characters or less. '
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:3}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    </Modal>
        )
    }
}

function DishDetail(props) {
    if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) 
    
    return (
        <div className="container">
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} dishId={props.dish.id}  postComment={props.postComment}/>
                        
                </div>
        </div>
    )
}
export default DishDetail;