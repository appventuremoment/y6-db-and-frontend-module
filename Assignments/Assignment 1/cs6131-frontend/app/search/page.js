import React from 'react';
import './styles.css';

const TableContents = () => {
  const catsdata = [
    { id: 1, name: "Euro", breed: "American Shorthair", fur: "Black", gender: "Female", arrival: "017" },
    { id: 2, name: "Cotton", breed: "Bobtail", fur: "White", gender: "Female", arrival: "021" },
    { id: 3, name: "Sago", breed: "Bombay", fur: "Black", gender: "Female", arrival: "021" },
    { id: 4, name: "Sasha", breed: "Scottish Fold", fur: "Grey", gender: "Female", arrival: "023" },
  ];

  return (
    <div id="background">
      {/* Search */}
      <div id="search-container">
        <input id="search-input" type="text" placeholder="Search" value={'Gender=Female, ArrivalDate=24/11/2'} disabled/>
        <img id='search-icon' src='search_icon2.png'></img>
      </div>

      {/* Table View */}
      <div id="table-container">
        <table id="table">
          <thead>
            <tr id="column-names">
              <th>Chip ID</th>
              <th>Name</th>
              <th>Breed</th>
              <th>Fur Colour</th>
              <th>Gender</th>
              <th>Arrival Date</th>
            </tr>
          </thead>
          <tbody>
            {catsdata.map((cat, index) => (
              // TODO: Chip IDs will not be simple numbers + Searching will change the IDs, change zebra colouring to be independant of data in table when functionalities work
              <tr 
                key={cat.id}
                id={index % 2 === 0 ? 'row-even' : 'row-odd'}
              >
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{cat.breed}</td>
                <td>{cat.fur}</td>
                <td><span style={{ backgroundColor: "yellow" }}>{cat.gender}</span></td>
                <td><span style={{ backgroundColor: "yellow" }}>24/11/2</span>{cat.arrival}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div id="pagination-container">
        <button id="page-button">←</button>
        {/* TODO: Placeholder until I need to code functionalities */}
        <button id="page-button-active">1</button>
        <button id="page-button">2</button>
        ...
        <input id='page-input' value={'8'} disabled></input>
        ...
        <button id="page-button">11</button>
        <button id="page-button">12</button>
        <button id="page-button">→</button>
      </div>
    </div>
  );
};

export default TableContents;