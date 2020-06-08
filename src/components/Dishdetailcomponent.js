import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
    //     import {ListGroup} from 'react-bootstrap';

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
function RenderComments({comments}) {
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
                    <RenderComments comments={props.comments} />
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