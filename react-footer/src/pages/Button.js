import React from 'react';

function Button() {
  const shoot = () => {
    alert("Coming Soon!");
  }

  return (
    <button onClick={shoot}>More</button>
  );
};
export default Button;
