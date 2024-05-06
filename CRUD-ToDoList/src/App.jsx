import { useState, useRef } from "react";
// import "./App.css";

function App() {
  const btnRef = useRef();
  const [ToDo, setToDo] = useState([]);
  const [value, setValue] = useState();
  const [isEdit, setIsEdit] = useState();
  // console.log(value);
  // console.log(isEdit);

  const HandleAddTask = () => {
    if (btnRef.current.innerHTML === "Upadate Task") {
      let newUpdateToDo = [...ToDo];
      newUpdateToDo[isEdit] = value;
      setToDo(newUpdateToDo);
      // console.log(newUpdateToDo);
      setValue("");
      btnRef.current.innerHTML = "Add Task";
    } else {
      let addToDo = [...ToDo, value];
      setToDo(addToDo);
      setValue("");
      // console.log(addToDo);
    }
  };

  const HandleDelete = (index) => {
    let DeleteToDo = ToDo?.filter((item, ind) => ind != index);
    setToDo(DeleteToDo);
    // console.log(DeleteToDo);
  };

  const HandleUpdate = (index) => {
    let UpdateToDo = ToDo?.find((item, ind) => ind == index);
    setValue(UpdateToDo);
    btnRef.current.innerHTML = "Upadate Task";
    setIsEdit(index);

    // console.log(UpdateToDo);
  };

  return (
    <>
      <section className="grid place-items-center bg-gray-400 h-32  ">
        <div className="flex gap-4">
          <input
            className="h-12 w-96 rounded-lg border-emerald-500 indent-4 bg-gray-300 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
            type="text"
            placeholder="Add your task here......."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button
            className="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
            onClick={HandleAddTask}
            ref={btnRef}
          >
            Add Task
          </button>
        </div>
      </section>
      {ToDo?.map((item, index) => (
        <div className="container mx-auto p-6 border border-gray-300 rounded-md shadow-md">
          <p className="mb-4">{item}</p>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => HandleUpdate(index)}
          >
            Update
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => HandleDelete(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
