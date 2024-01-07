import React from 'react';
import senset from './images/senset.png';

function Home() {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-md bg-primary">
      <img src={senset} alt="Beautiful Sunset" className="w-full h-64" />
      <div className="px-1 py-4 d-flex">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Add
</button>
    </div>
    </div>
  );
}

export default Home;
