const increment = () => {
  return {
    type: "Increment",
  };
};

const decrement = () => {
  return {
    type: "Decrement",
  };
};

export default {
  increment,
  decrement,
};
