import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    //     import {ListGroup} from 'react-bootstrap';

function RenderDish({dish}) {
        return(
            <div  className="col-12 col-md-5 m-1">
                  <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
        );   
    }
    
    function RenderComments({comments}) {
        console.log("comment: ",comments)
        return(
            <div  className="col-12 col-md-5 m-1">
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
                </Card>
            </div>
        )
    }
    const DishDetail=(props)=>{
        console.log("dish: ",props)
    if(props.dish!=null){
        console.log("hello")   
        return(
                <div className="container">
                    <div className="row">
                         <RenderDish dish={props.dish} /> 
                         <RenderComments comments={props.dish.comments} />
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