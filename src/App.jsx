import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect, useState } from "react";

function App() {
  const arrayContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [phone, setPhone] = useState(
    JSON.parse(localStorage.getItem("contacts")) || arrayContacts
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(phone));
  }, [phone]);

  const addTask = (newTask) => {
    setPhone((prevTasks) => [...prevTasks, newTask]);
  };

  const [findName, setFindName] = useState("");

  const visibleTasks = phone.filter((task) =>
    task.name.toLowerCase().includes(findName.toLowerCase())
  );

  const deleteNumber = (numberId) => {
    setPhone((prevItem) => prevItem.filter((item) => item.id !== numberId));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm contactsArray={addTask} />
      <SearchBox value={findName} onFindName={setFindName} />
      <ContactList arrayContacts={visibleTasks} deleteNumber={deleteNumber} />
    </>
  );
}

export default App;
