import React from "react";
import Contactlist from "../Component/Contactlist";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle_add } from "../JS/ACRTON/edit";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/add">
        <button className="btndelete" onClick={() => dispatch(toggle_add())}>
          add contact
        </button>
      </Link>
      <Contactlist />
    </div>
  );
};

export default Home;
