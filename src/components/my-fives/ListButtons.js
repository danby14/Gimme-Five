import React from 'react';

const ListButtons = ({ lists, setActiveList }) => {
  const handleClick = i => {
    setActiveList(i);
  };

  return (
    <>
      {lists &&
        lists.map((list, idx) => (
          <button key={list.id} onClick={() => handleClick(idx)}>
            {list.title}
          </button>
        ))}
    </>
  );
};

export default ListButtons;
