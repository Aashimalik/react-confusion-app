import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
          comments:[]
        }
    }

    renderDish(dish) {
        if(dish)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        return <div></div>
    }

    renderComments(comments){
        if(comments)
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map(comment => {
                        return (
                            <li key={comment.id} className="list-group-item">
                                {comment.comment} <br />
                                -- {comment.author}, {new Date(comment.date).toLocaleString()}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    return <div></div>
    }

    render() {
        const { dish } = this.props;
      
        if(dish)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            )
        return <div></div>
    }


}

export default DishDetail;