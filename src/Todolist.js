import React, { useState } from 'react';

const Todolist = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
      alert('Please enter a value');
    } else {
      setItems([...items, inputData]);
      setInputData('');
    }
  };

  const deleteItem = (id) =>{
    console.log('id');
    const updateditems = items.filter ((elem,ind) =>{
        return ind !== id;
    });
    setItems(updateditems);
  }

  return (
    <form className="w-full max-w-sm bg-current p-5 content-center">
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
            className="shadow bg-purple-500 hover:bg-purple-400 
        focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4
         rounded"
            type="button"
            onClick={addItem}>
            Add
          </button>
        </div>
      </div>
      <div className="text">
        {items.map((elem, ind) => {
          return (
            <div className="eachItem flex justify-between mt-3" key={ind}>
              <h1 className='text-white'>{elem}</h1>
              <button className='bg-red-500 px-3' onClick={() => deleteItem(ind)}>Delete</button>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default Todolist;
