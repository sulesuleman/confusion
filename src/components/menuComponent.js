import React,{Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './Dishdetailcomponent';
import {ListGroup} from 'react-bootstrap'
class Menu extends Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
            selectedcomment: null
                }
    }
     onDishSelect(dish) {
        this.setState({ selectedDish: dish});
        console.log("hamza")
    }
     onCommentSelect(dish) {
        this.setState({ selectedcomment: dish});
        console.log(dish)
    }

    renderComment(dish) {
        if (dish != null)
            return(
                <div>
                    {/* console.log(dish) */}
                    <h3>Comments</h3>
                 <ListGroup>
                    {
                        this.state.selectedcomment.map((items)=>{
                        return(
                            
                        <ListGroup.Item>
                            {items.comment} <br/>
                            {items.author},  {items.date}
                        </ListGroup.Item>

                        )})
                    }
                </ListGroup>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
    renderDish(dish) {
        console.log(dish)
        if (dish != null)
            return(
                <DishDetail dish={dish}/>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
       
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                    onClick={() => {this.onDishSelect(dish);
                 this.onCommentSelect(dish.comments)}}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-2">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div className="col-12 col-md-5 m-1">
                      
                      {this.renderComment(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;