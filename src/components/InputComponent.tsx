import React from "react";

const InputComponent = () => {
  return (
    <section className="flex flex-col items-center mt-8">
      <h3 className="font-semibold">Create a Task</h3>
      <form action="" className="w-full md:w-4/5">
        <input
          type="text"
          className="border p-2 rounded-sm my-4 block w-full"
          placeholder="Enter task name"
        />
        <textarea
          name=""
          id=""
          placeholder="Enter Description"
          className="border p-2 rounded-sm my-4 block w-full"
        ></textarea>
        <div className="md:flex justify-between">
          <input
            type="date"
            className="border p-2 rounded-sm my-4 block md:inline-block w-full md:w-2/5"
          />
          <input
            type="time"
            className="border p-2 rounded-sm my-4 block md:inline-block w-full md:w-2/5"
          />
        </div>
        <button className="bg-zinc-700 text-white p-4 w-full hover:bg-zinc-600">Create Task</button>
      </form>
    </section>
  );
};

export default InputComponent;
