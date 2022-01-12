import React, { useState } from "react";
import ListContainer from "./ListContainer";

const ToDo = () => {
  const [input, setInput] = useState("");
  //   const [isEdited, SetIsEdited] = useState(false);
  const [buttonText, setButtonText] = useState("Add");
  const [taskId, setTaskId] = useState(null);

  const handleToDOList = (e) => {
    e.preventDefault();
    const data = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      task: input,
    };
    let buttonText = e.target.children[1].innerText;
    if (buttonText === "Add") {
      fetch("http://localhost:4000/task", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) alert("Task successfully added");
        });
    }

    if (buttonText === "Update") {
      fetch(`http://localhost:4000/task/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) alert("Task successfully updated");
        });
      setButtonText("Add");
      //   SetIsEdited(false);
    }
    setInput("");
  };

  // handle editing functionality
  const handleEdit = (e, id, text) => {
    setTaskId(id);
    console.log(id);
    setInput(text);
    // SetIsEdited(true);
    setButtonText("Update");

    /*    if (buttonText === "Add") {
      e.target.setAttribute("disabled", true);
    } else {
      e.target.removeAttribute("disabled");
    } */
  };

  return (
    <>
      <section className="mt-16">
        <form onSubmit={handleToDOList}>
          <input
            className="border text-white border-white bg-transparent px-2 py-3 w-1/3 focus:outline-0"
            type="text"
            placeholder="Enter task"
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-5 py-3 bg-white font-bold border text-green-500"
          >
            {buttonText}
          </button>
        </form>
      </section>
      <ListContainer handleEdit={handleEdit} buttonText={buttonText} />
    </>
  );
};

export default ToDo;
