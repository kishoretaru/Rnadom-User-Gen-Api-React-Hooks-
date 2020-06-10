import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({details}) => {
   return(
      <Card>
      <CardBody className="text-center">
      <img height="150" width="150" className="rounded-circle img-thumbnail border-danger"
      src={details.picture?.large} />
      <CardTitle className="text-primary">
      <h1>
      <span className="pr-2">{details.name?.title}</span>
      <span>{details.name?.title}</span>
      <span>{details.name?.title}</span>
      </h1>
      <CardText>
      <FaEnvelope />
        <h2>{details.email}</h2>
      </CardText>
      <CardText>
      <FaMapMarkedAlt />
        {details.location?.city}
      </CardText>
      <CardText>
      <FaPhone />
      <p>{details.phone}</p>
      </CardText>
      </CardTitle>
      </CardBody>
      </Card>
   );
}


export default MyCard;
