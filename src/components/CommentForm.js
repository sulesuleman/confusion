import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Col, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { Row,} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);


        this.state = {
            firstname: '',
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
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
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
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
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

export default CommentForm;