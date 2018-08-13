import React from 'react';
import {
    Card, CardImg,  CardText, CardBody,
    CardTitle
} from 'reactstrap';

function RenderDish({dish}){
    if(dish){

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
                <RenderComments comments={dish.comments}/>
            </div>
            </div>

        )
    }else{
        return(
            <div></div>
        )
    }
      
}

 function RenderComments({comments}) {
    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comments.map(comment => {
                    return (
                        <li key={comment.id} className="list-group-item">
                            {comment.comment} <br />
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const DishDetail=(props)=>{
    return (
        <div className="container">

        <RenderDish dish={props.dish}/>
           
            
   
        </div>
    )
}   
   

export default DishDetail;