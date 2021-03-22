import React from "react";
import { useDispatch } from "react-redux";
import { deletecontact, getonecontact } from "../JS/ACRTON/contact";
import { Link } from "react-router-dom";
import { toggle_edit } from "../JS/ACRTON/edit";
import { Card, Image, Button } from "semantic-ui-react";

const Contactcard = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <Image
        src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image21.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{contact.name}</Card.Header>
        <Card.Meta>{contact.email}</Card.Meta>
        <Card.Description>{contact.Phone}</Card.Description>
      </Card.Content>
      <Card.Content extra></Card.Content>
      <Link to={`/edit/${contact._id}`}>
        <Button
          className="btndelete"
          inverted
          color="blue"
          onClick={() => {
            dispatch(getonecontact(contact._id));
            dispatch(toggle_edit());
          }}
        >
          Edit
        </Button>
      </Link>
      <Button
        className="btndelete"
        inverted
        color="black"
        onClick={() => dispatch(deletecontact(contact._id))}
      >
        delete
      </Button>
    </Card>
  );
};

export default Contactcard;
