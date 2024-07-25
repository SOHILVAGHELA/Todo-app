import axios from "axios";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { baseURl } from "../utils/constant";

function ToDo({ text, id, setUpdateUi, setShowPopup, setPopupContent }) {
  const deletetodo = () => {
    axios
      .delete(`https://todo-app-kmrk.onrender.com/delete/${id}`)
      .then((res) => {
        setUpdateUi((prevState) => !prevState);
      });
  };
  const updateTodo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };
  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <CiEdit className="icon" onClick={updateTodo} />
        <RxCross1 className="icon" onClick={deletetodo} />
      </div>
    </div>
  );
}

export default ToDo;
