import react from "react";
import React, { useRef, useState } from "react";
import ListContainer from "./ListContainer";

const ToDo = () => {
  const [input, setInput] = useState("");
  //   const [task, setTask] = useState([]);

  const handleToDOList = (e) => {
    e.preventDefault();
    const data = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      task: input,
    };
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
    setInput("");
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
            Add
          </button>
        </form>
      </section>
    </>
  );
};

export default ToDo;
