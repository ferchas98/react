import { useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";

export default function App() {
  const [todos, setTodos] = useState([]);
  // const [text, setText] = useState("");   //Inicializacion de estados de un componente

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    reset,
  } = useForm();

  // function addtodo() {
  //   setTodos([...todos, text]);
  // }

  // function onSubmit(event) {
  //   // event.preventDefault();
  //   addtodo();
  //   setText("");
  // }

  function onSubmit(data) {
    console.log("data", data);
    setTodos([...todos, data.todo]);
    reset();
  }

  function removeTodo(indexToRemove) {
    //todos.splice(indexToRemove, 1)
    //setTodos([... todos])

    const newTodos = todos.filter((todo, index) => index != indexToRemove);
    setTodos(newTodos);
  }

  return (
    <main className="w-full min-h-screen">
      <form
        className="flex flex-grow gap-2 justify-center p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Ingresa una tarea"
          className={clsx("p-2 rounded text-black w-full max-w-screen-sm", {
            "border-2 border-red-500 bg-red-300": errors.todo,
          })}
          required
          {...register("todo", {
            required: { value: true, message: "campo requerido" },
            minLength: { value: 3, message: "minimo 3 caracteres" },
            maxLength: { value: 180, message: "maximo 180 caracteres" },
          })}
          // value={text}
          // onChange={(event) => setText(event.target.value)}
        />

        <button
          disabled={isSubmitted ? !isValid : false}
          // className={clsx("text-black px-3 rounded", {
          //   "bg-stone-400": isSubmitted ? !isValid : false,
          //   "bg-white": isSubmitted ? isValid : true,
          // })}
          className="text-black px-3 rounded bg-white disabled:bg-stone-400"
          required
        >
          + Agregar
        </button>
      </form>
      {errors.todo && (
        <p className="text-red-500 text-center text-sm font-semibold">
          {errors.todo?.message}
        </p>
      )}

      <div className="max-w-screen-sm w-full mx-auto p-4 flex flex-col gap-1">
        {todos.length === 0 && (
          <p className="text-white/50">No tienes tareas pendientes 🎉🎉</p>
        )}

        {todos.map((todo, idx) => {
          return (
            <div
              key={`todo-${idx}`}
              className="bg-white/10 rounded p-4 flex flex-row justify-between"
            >
              <span className="select-none">{todo}</span>
              <span
                className="text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-1 size-8 text-center items-center flex"
                onClick={() => removeTodo(idx)}
              >
                Equis
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
