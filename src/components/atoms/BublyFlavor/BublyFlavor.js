import React from 'react';

const BublyFlavor = (props) => {
  const {flavor} = props;
  return (
    <div>
      <span>ID: {flavor.id}</span>
      <span>PK: {flavor.pk}</span>
      <span>Flavor: {flavor.flavor}</span>
      <span>Votes: {flavor.votes}</span>
    </div>
  );
};

export default BublyFlavor;
