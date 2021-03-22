import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontacts } from "../JS/ACRTON/contact";
import Contactcard from "./Contactcard";
import Spiner from "./Spiner";

const Contactlist = () => {
  const dispatch = useDispatch();
  const listcontact = useSelector((state) => state.contactreducer.listcontact);
  const load = useSelector((state) => state.contactreducer.load);
  console.log(listcontact);
  useEffect(() => {
    dispatch(getcontacts());
  }, []);
  return (
    <div className="listcontact">
      {load ? (
        <h1><Spiner/></h1>
      ) : (
        listcontact.map((el) => <Contactcard contact={el} key={el._id} />)
      )}
    </div>
  );
};

export default Contactlist;
