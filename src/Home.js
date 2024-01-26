import React from 'react';

function Home() {

  const studentname = [
    {
      name: 'subhash',
      email: 'subhash@gmail.com',
      contact: 7989675432
    },
    {
      name: 'kumar',
      email: 'kumar@gmail.com',
      contact: 7989678907
    },
    {
      name: 'manish',
      email: 'manish@gmail.com',
      contact: 7982897856
    },
  ];

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">name</th>
              <th scope="col" className="px-6 py-3">email</th>
              <th scope="col" className="px-6 py-3">number</th>
            </tr>
          </thead>
          <tbody>
            {studentname.map((data, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.name}</th>
                <td className="px-6 py-4">{data.email}</td>
                <td className="px-6 py-4">{data.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
