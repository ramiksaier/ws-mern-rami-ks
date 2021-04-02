const addContact = async (req, res) => {
  try {
    if (!req.body.email || !req.body.name) {
      res.send("email and name are required checked again please");
      return;
    }
    const newContact = new Contact({ ...req.body });
    const response = await newContact.save();
    res
      .status(200)
      .send({ response: response, message: "contact added sucufully" });
  } catch (error) {
    res.status(400).send("user no added :can not save it ");
  }
};

afficheContacts = async (req, res) => {
  try {
    const list = await Contact.find();
    res.send({ msg: "this is your data", list });
  } catch (error) {
    res.status(400).send("can not get the data");
  }
};
afficheOneContact = async (req, res) => {
  try {
    const getone = await Contact.findOne({ _id: req.params._id });
    res.status(200).send({ message: "this is who you looking for", getone });
  } catch (error) {
    res.status(400).send("could not get this id ,please check you again id  ");
  }
};
DeleteContact = async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params._id });

    result.n
      ? res.status(200).send("contact is deletetd")
      : res.status(400).send("ther is no user with this id");
  } catch (error) {
    res.status(400).send("can not delet it please check again");
  }
};
updateContact = async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params._id },
      { $set: { ...req.body } }
    );
    result.nModified
      ? res.status(200).send({ message: "user updated" })
      : res.send("user already updated");
  } catch (error) {
    res.status(400).send("can not find the user you looking for");
  }
};
//export methode
module.exports = controller = {
  addContact,
  afficheContacts,
  afficheOneContact,
  DeleteContact,
  updateContact,
};
