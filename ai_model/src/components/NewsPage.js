import React, { useState } from 'react';
import './NewsPage.css';

const NewsPage = ({ rows, deleteRow, editRow }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ name: '', email: '' });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditSubmit = (index) => {
    editRow(index, editData);
    setEditIndex(null);
  };

  return (
    <main className="main-content">
      <h1>News Page</h1>
      {rows.length > 0 ? (
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleEditChange}
                    />
                  ) : (
                    row.name
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleEditChange}
                    />
                  ) : (
                    row.email
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <button onClick={() => handleEditSubmit(index)}>Save</button>
                  ) : (
                    <>
                      <button onClick={() => setEditIndex(index)}>Edit</button>
                      <button onClick={() => deleteRow(index)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available. Go to the Home page to add some.</p>
      )}
    </main>
  );
};

export default NewsPage;
