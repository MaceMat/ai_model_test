import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import './App.css';

function App() {
  const [rows, setRows] = useState([]);

  const addRow = (rowData) => {
    setRows([...rows, rowData]);
  };

  const deleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const editRow = (index, updatedData) => {
    const updatedRows = rows.map((row, i) => (i === index ? updatedData : row));
    setRows(updatedRows);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage addRow={addRow} />} />
        <Route
          path="/news"
          element={<NewsPage rows={rows} deleteRow={deleteRow} editRow={editRow} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
