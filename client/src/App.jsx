import ToDo from "./components/ToDo";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURl } from "./utils/constant";
import Popup from "./components/Popup";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUi, setUpdateUi] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURl}/get`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, [updateUi]);

  const savetodo = (e) => {
    axios
      .post(`${baseURl}/save`, { todo: input })
      .then((res) => {
        setUpdateUi((prevState) => !prevState);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      savetodo();
    }
  };
  return (
    <>
      <main>
        <div className="container">
          <h1 className="title">Todo App</h1>
          <div className="input_holder">
            <input
              type="text"
              value={input}
              onKeyDown={handleKeyDown}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a todo"
            />
            <button onClick={savetodo}>Add</button>
          </div>
          <div className="list">
            {todos.map((el) => (
              <ToDo
                key={el._id}
                text={el.todo}
                id={el._id}
                setUpdateUi={setUpdateUi}
                setShowPopup={setShowPopup}
                setPopupContent={setPopupContent}
              />
            ))}
          </div>
        </div>
        {showPopup && (
          <Popup
            setShowPopup={setShowPopup}
            popupContent={popupContent}
            setUpdateUi={setUpdateUi}
          />
        )}
      </main>
    </>
  );
}

export default App;
