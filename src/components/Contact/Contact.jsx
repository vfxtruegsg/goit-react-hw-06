import cntStyles from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPerson } from "react-icons/md";

const Contact = ({ id, name, number, deleteNumber }) => {
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
