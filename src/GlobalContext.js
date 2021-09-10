import React, { useState, useEffect } from "react";

const END_POINT =
  "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";

const Context = React.createContext();
function ContextProvider({ children }) {
  const [contactData, setContactData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // let storedIds = [];

  const getData = async () => {
    try {
      const response = await fetch(END_POINT);
      const data = await response.json();
      // const newContact = data.map((element) => ({
      //   ...element,
      //   isChecked: false,
      // }));
      setContactData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleCheckBox = (id) => {
  //   const checkedId = contactData.map((contactId) => {
  //     if (contactId.id === id) {
  //       return { ...contactId, isChecked: true };
  //     } else {
  //       return contactId;
  //     }
  //   });
  //   setContactData(checkedId);
  // };

  // const loggedId = contactData.some((contact) => {
  //   if (contact.id) {
  //     storedIds.push(contact);
  //   }
  // });
  // console.log(loggedId);

  const contactsName = contactData.filter(
    (contact) =>
      contact.first_name.toLowerCase().includes(inputValue.toLowerCase()) ||
      contact.last_name.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  return (
    <Context.Provider
      value={{
        contactData,
        setInputValue,
        inputValue,
        contactsName,
        // handleCheckBox,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
