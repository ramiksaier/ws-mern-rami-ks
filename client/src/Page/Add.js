import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editcontact, postcontact } from "../JS/ACRTON/contact";
import { Link } from "react-router-dom";
import { Divider, Form, Button, Label } from "semantic-ui-react";

const Add = () => {
  const [user, setuser] = useState({});
  const userReducer = useSelector((state) => state.contactreducer.user);
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();
  useEffect(() => {
    edit ? setuser(userReducer) : setuser({ name: "", email: "", Phone: "" });
  }, [userReducer]);
  const handeldata = () => {
    edit
      ? dispatch(editcontact(userReducer._id, user))
      : dispatch(postcontact(user));
  };
  const handelchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="inpu">
      <h1 className="title">{edit ?"Modify your user":"Add the new user"}</h1>
      <Form.Field>
        <Label pointing>Please enter your name</Label>
        <input
          type="text"
          placeholder="your name "
          name="name"
          value={user.name}
          onChange={handelchange}
        />
      </Form.Field>
      <Divider />

      <Form.Field>
        <Label pointing="below">Please enter your email</Label>
        <input
          placeholder="your email"
          type="text"
          name="email"
          value={user.email}
          onChange={handelchange}
        />
      </Form.Field>
      <Divider />

      <Form.Field inline>
        <Label pointing="left">Please entre your Phone</Label>

        <input
          type="text"
          placeholder=" your phone"
          name="Phone"
          value={user.Phone}
          onChange={handelchange}
        />
      </Form.Field>
      <Divider />
      <Button className="btndelete" inverted color="blue" onClick={handeldata}>
        <Link to="/">{edit ? "edit" : "save"}</Link>
      </Button>
    </div>
  );
};

export default Add;
