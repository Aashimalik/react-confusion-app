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

    renderComments(comments){
 return comments.map((com) => {
          console.log("disidm",com)
        return (
          
           <div key={com.id} className="list-unstyled">
            --{com.author},{com.date}<br/>
            -{com.comment}
            <br/>
            <br/>
           </div>
     
        );
    });
    }

    render() {
        const { dish } = this.props;
        const menu=this.renderComments(dish.comments);
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {this.renderComments(dish.comments)}
                  
                </div>

            </div>
        )
    }


}

export default DishDetail;