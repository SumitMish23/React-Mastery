const inputR = (state = [], action) => {
   const arr=[1];
    // console.log(action)
  switch (action.type) {
    case "Input":
      return [...state,action.payload];

    default:
      return state;
  }
};
export default inputR;
