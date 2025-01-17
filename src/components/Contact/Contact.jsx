import cntStyles from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteNumber = () => dispatch(deleteContact(id));
  return (
    <li className={cntStyles["contact-block"]} key={id}>
      <div>
        <div className={cntStyles["inf-sec"]}>
          <MdPerson />
          <p>{name}</p>
        </div>
        <div className={cntStyles["inf-sec"]}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => deleteNumber(id)}
        className={cntStyles["del-btn"]}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
