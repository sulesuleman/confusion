import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
//     import {ListGroup} from 'react-bootstrap';
class DishDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            record:{}
        }
    }
    render() {
        console.log("hello:  ",this.props.Dish);
        console.log("data:  ",this.state.record);
        if(this.state.record=this.props.Dish){
            return(
                <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                  <Card>
                    <CardImg top src={this.state.record.image} alt={this.state.record.name} />
                    <CardBody>
                      <CardTitle>{this.state.record.name}</CardTitle>
                      <CardText>{this.state.record.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <h2>Comments</h2>
                    {
                        this.state.record.comments.map(dish=>{
                            return(
                                <CardBody>                         
                                    <CardText>{dish.comment}</CardText>
                                    <CardText>{dish.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.date)))}</CardText> 
                                </CardBody>
                            );
                        })
                    }           
                   
                </Card>
                  </div>
                </div>
                </div>          
            )
        }   
        else{
        return (
            <div>
                  
            </div>
            );   
        }
                
    }
}
export default DishDetail;