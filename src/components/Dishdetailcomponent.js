import React, { useState ,Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
    import {FormFeedback,Button, Form, FormGroup, Label, Input, Col, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { Row,} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
 
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);


        this.state = {
            author: '',
            rating: 'select',
            comment: '',
            touched: { 
                firstname: false,
            },
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
       // this.handleLogin = this.handleLogin.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: {...this.state.touched, [field]: true } 
        });
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render() {
        return(
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    
                    </ModalBody>
                </Modal>
                <Col md={{size:10, offset: 0}}>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                    </Col>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                <Label htmlFor="rating" >Rating</Label>
                                </Col>
                                <Col md={12}>
                                <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option default>select..</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col >
                                <Label htmlFor="firstname">Name</Label>
                                </Col>
                                <Col md={12}>
                                    <Control.text model=".author" id="firstname" name="firstname"
                                        placeholder="First Name"
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
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col> 
                                <Label htmlFor="message" >Comment</Label>
                                </Col>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>     
                            <Row className="form-group">
                                <Col md={{size:10, offset: 0}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                       
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}



function RenderDish({dish}) {
        return(
                  <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                );
            }
function RenderComments({comments, addComment, dishId}) {
        console.log("comment: ",comments)
        return(
           
                <Card>
                    <h2>Comments</h2>
                    {
                     comments.map(comment=>{
                         return(
                            <CardBody>                         
                                <CardText>{comment.comment}</CardText>
                                <CardText>{comment.author}, {comment.date}</CardText>
                                
                            </CardBody>
                    
                     )
                    })
                }
                <CommentForm dishId={dishId} addComment={addComment} />    
                </Card>

        )
    }
    const DishDetail=(props)=>{
        console.log("dish: ",props)
    if(props.dish!=null){
        console.log("hello")   
        return(
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
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments}
                    addComment={props.addComment}
                    dishId={props.dish.id}
                />
            </div>
            </div>
            </div>
            )
        }
        
        else{
            console.log("bye")
        return(
        <div>

        </div>
        )
    } 
}        
    
export default DishDetail;