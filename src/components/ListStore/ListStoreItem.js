import React from 'react';
import { Link } from 'react-router-dom'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import './styles.scss'

const ListStoreItem = (props) => {
  return (
    <div>
      <Card className="list-store-item-card">
        <CardImg top width="100%" src={props.data.logoUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.data.name}</CardTitle>
          <CardSubtitle>{`${props.data.address} ${props.data.district} ${props.data.city}`}</CardSubtitle>
          <CardText>{props.data.phone}</CardText>
          <Link to={`/stores/${props.data.id}`}>View store</Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default ListStoreItem;