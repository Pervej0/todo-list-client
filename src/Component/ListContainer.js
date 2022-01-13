import React, { useEffect, useState } from "react";

const ListContainer = ({ handleEdit, buttonText, setIsLoaded }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-ravine-13253.herokuapp.com/task")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setTasks(data);
          console.log("ok");
        }
      });
  }, [tasks, buttonText]);

  // handleDelete functionality
  const handleDelete = (id) => {
    const confirmation = window.confirm("Are you sure want to delete this?");
    if (confirmation) {
      setIsLoaded(true);
      fetch(`https://sleepy-ravine-13253.herokuapp.com/task/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            setIsLoaded(false);
            alert("Task successfully deleted");
          }
        });
    } else {
      return;
    }
  };

  return (
    <section className="text-left mx-4 md:mx-20 mt-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div>
          {tasks?.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-green-500 w-full p-2 my-5 flex flex-wrap gap-2 justify-between items-center"
            >
              <div>
                <small className="font-semibold">Date: {item.date}</small>
                <h2 className="text-2xl font-mono">{item.task}</h2>
                <small className="font-semibold">{item.time}</small>
              </div>
              <div>
                <button
                  onClick={(e) => handleEdit(e, item._id, item.task)}
                  className="bg-yellow-500 text-sm px-4 py-1 font-semibold"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 px-4 py-1 text-sm ml-1 font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-0 md:border-l md:border-t-0 border-t border-white py-6">
          <div>
            <div className="px-10 font-mono text-white">
              <blockquote className="py-6">
                "It's not enough to be busy, so are the ants. The question is,
                what are we busy about?"
              </blockquote>
              <p>-- Henry David Thoreau</p>
            </div>
            <div className="px-10 font-mono text-white">
              <blockquote className="py-6">
                "Time is more valuable than money. You can get more money, but
                you cannot get more time."
              </blockquote>
              <p>-- Jim Rohn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListContainer;
