import React from 'react';

const ListSelector = ({ lists, lid, setLid }) => {
  return (
    <select value={lid} onChange={e => setLid(e.target.value)}>
      {lists &&
        lists.map((list, idx) => (
          <option key={idx} value={idx}>
            {list.title}
          </option>
        ))}
    </select>
  );
};

export default ListSelector;
