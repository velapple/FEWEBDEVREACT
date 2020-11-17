import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderDish({dish}) {
    return(
        <div className="col-md-5 col-12 m-1">
            <Card  key={dish.id}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
function RenderComments({comments}) {
    return (
        <div className="col-md-5 col-12 m-1">
            {comments.map(comment => {
                return(
                <li className="comments text-left m-2 mb-5" style={{listStyleType: "none"}}>
                    <p>{comment.comment}</p>
                    <author>-- {comment.author}</author>, 
                    <date>{comment.date}</date>
                </li>
                )
                })
            }
        </div>
    )
}
const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.dish.comments} />
            </div>
        </div>
    )
}
export default DishDetail;