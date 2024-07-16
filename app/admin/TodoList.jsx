import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(-1); // Track the index of the task being edited

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    // Reset editIndex if the deleted task was being edited
    if (editIndex === index) {
      setEditIndex(-1);
    }
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setNewTask(tasks[index]); // Populate input with current task for editing
  };

  const handleSaveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTask;
    setTasks(updatedTasks);
    setNewTask('');
    setEditIndex(-1); // Reset edit state after saving
  };

  const handleCancelEdit = () => {
    setNewTask('');
    setEditIndex(-1); // Reset edit state without saving
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
      <div className="flex">
        <input
          type="text"
          className="border rounded-l py-2 px-3 w-full"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        {editIndex === -1 ? (
          <button style={{width:"150px"}}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        ) : (
          <div className="flex">
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-r"
              onClick={() => handleSaveEdit(editIndex)}
            >
              Save
            </button>
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-r"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center border-b py-2">
            {editIndex === index ? (
              <input
                type="text"
                className="border rounded py-1 px-2 w-full"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
            ) : (
              <span>{task}</span>
            )}
            <div>
              {editIndex === index ? (
                <></>
              ) : (
                <button
                  className="text-blue-500 hover:text-blue-600 mr-2"
                  onClick={() => handleEditTask(index)}
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.93 2.93l4.24 4.24-10.34 10.34-4.24-4.24zm-2.17 2.17l-1.41 1.41 9.18 9.18 1.41-1.41-9.18-9.18z" />
                  </svg>
                </button>
              )}
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => handleDeleteTask(index)}
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
