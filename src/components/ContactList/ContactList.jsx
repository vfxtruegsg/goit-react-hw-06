import clStyles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
const ContactList = ({ arrayContacts, deleteNumber }) => {
  return (
    <ul className={clStyles["contact-list"]}>
      {arrayContacts.map(({ id, name, number }, index) => (
        <Contact
          key={index}
          id={id}
          name={name}
          number={number}
          deleteNumber={deleteNumber}
        />
      ))}
    </ul>
  );
};

export default ContactList;
