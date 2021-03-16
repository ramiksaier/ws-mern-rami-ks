const express = require("express");
const router = express.Router();
const Contact = require("../Contact");
const controleur = require("./Controllers/ContactControlleur");

router.get("/h", (req, res) => {
  res.send("hello word");
});
//@POST methode
//@DESC ADD CONTACT
//PATH:http://localhost/api/contact/
//PARAMS : req.body
//access: public /private
router.post("/", controleur.addContact);
//@methode GET
//@DESC GET all CONTACTS
//PATH:http://localhost/api/contact/
router.get("/", controleur.afficheContacts);
//@methode GET
//@DESC GET one CONTACT
//PATH:http://localhost/api/contact/
//@params req.params._id
router.get("/:_id", controleur.afficheOneContact);
//@methode DELETE
//@DESC DELETE one CONTACT
//PATH:http://localhost/api/contact/
//@params _id
router.delete("/:_id", controleur.DeleteContact);
//@methode put
//@DESC update CONTACT by id
//PATH:http://localhost/api/contact/
//@params _id body
router.put("/:_id", controleur.updateContact);

module.exports = router;
