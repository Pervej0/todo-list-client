import React, { useEffect, useState } from "react";

const ListContainer = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  console.log(tasks);
  return (
    <section className="container text-left mx-4 md:mx-20 mt-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div>
          {tasks?.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-green-500 w-full p-3 flex justify-between items-center"
            >
              <div>
                <small className="font-semibold">Date: {item.date}</small>
                <h2 className="text-2xl font-mono">{item.task}</h2>
                <small className="font-semibold">{item.time}</small>
              </div>
              <div>
                <button className="bg-yellow-500 text-sm px-4 py-1 font-semibold">
                  Edit
                </button>
                <button className="bg-red-500 px-4 py-1 text-sm ml-1 font-semibold">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-0 border-white border-l">
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default ListContainer;
