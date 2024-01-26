import React, { useState } from 'react';

const Todolist = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert('Please enter a value');
      return;
    }

    if (editIndex !== null) {
      // If editing, update the item at the editIndex
      const updatedItems = [...items];
      updatedItems[editIndex] = inputData;
      setItems(updatedItems);
      setEditIndex(null); // Reset editIndex
    } else {
      // If not editing, add a new item
      setItems([...items, inputData]);
    }

    setInputData('');
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => ind !== id);
    setItems(updatedItems);
    setEditIndex(null); // Reset editIndex when deleting an item
  };

  const editItem = (id) => {
    setEditIndex(id);
    setInputData(items[id]);
  };

  return (
    <div className="w-full max-w-sm bg-current p-5 content-center mx-auto h-auto">
      <div className="md:flex md:items-center justify-between mb-6">
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
        <div className="md:w-1/1">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={addItem}
          >
            {editIndex !== null ? 'Edit' : 'Add'}
          </button>
        </div>
      </div>
      <div className="text-fixed">
        {items.map((elem, ind) => (
          <div className="each-item flex justify-between mt-3" key={ind}>
            <div className="text-white">{elem}</div>
            <div>
              <button
                className="bg-blue-500 px-3 mr-2"
                onClick={() => editItem(ind)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 px-3"
                onClick={() => deleteItem(ind)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
