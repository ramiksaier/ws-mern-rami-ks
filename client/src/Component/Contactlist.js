import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontacts } from "../JS/ACRTON/contact";

const Contactlist = () => {
  const dispatch = useDispatch();
  const listcontact = useSelector((state) => state.contactreducer.listcontact);
  console.log(listcontact);
  useEffect(() => {
    dispatch(getcontacts());
  }, []);
  return <div>contaactliste</div>;
};

export default Contactlist;
