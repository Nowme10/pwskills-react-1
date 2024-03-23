import React from "react";

function List({ items }) {
  return (
    <div>
      <ul style={{ backgroundColor: "black", color: "white" }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
