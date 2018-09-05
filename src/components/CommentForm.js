import React,{Component} from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';

import {  
     Modal, ModalHeader, ModalBody,
    Button, Row, Col, Label } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        }
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    toggleModal(){
       this.setState({
        isModalOpen:!this.state.isModalOpen
       })
    }

    render(){
        const {isModalOpen}=this.state;
        return(
            <div>
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                    <Col md={12}>
                            <Label htmlFor="rating" >Rating</Label>
                            </Col>
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
                            <Col md={12}>
                            <Label htmlFor="rating" >Your Name</Label>
                            </Col>
                            
                            <Col md={12}>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="Your Name"
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
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                       
                            </Row>
                            <Row className="form-group">
                            <Col md={12}>
                            <Label htmlFor="comment" >Comment</Label>
                            </Col>
                            <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

export default CommentForm;