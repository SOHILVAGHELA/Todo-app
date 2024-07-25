import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseURl } from "../utils/constant";

function Popup({ setShowPopup, popupContent, setUpdateUi }) {
  const [input, setInput] = useState(popupContent.text);
  const updatetodo = () => {
    axios
      .put(`${baseURl}/update/${popupContent.id}`, { todo: input })
      .then((res) => {
        setUpdateUi((prevState) => !prevState);
        setShowPopup(false);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      updatetodo();
    }
  };
  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update todo</h1>
        <div className="popup_input_holder">
          <input
            type="text"
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            placeholder="update a todo"
          />
          <button onClick={updatetodo}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
