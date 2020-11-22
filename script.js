// Add a rootReducer
// Add redux store and initialState
// A way to change the state
const initialState = {
  count: 0,
};

function rootReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case "INCREMENT":
      newState.count++;
      break;
    case "DECREMENT":
      newState.count--;
      break;
    default:
      break;
  }
  return newState;
}

const store = Redux.createStore(rootReducer);

// Presetnational component
const updateCouterElement = () => {
  var currentState = store.getState();
  $("#counter").text(currentState.count);
};
$(document).ready(function () {
  updateCouterElement();
  $("#increment").on("click", function () {
    // dispatch action to increment the count!
    store.dispatch({
      type: "INCREMENT",
    });
    updateCouterElement();
  });
  $("#decrement").on("click", function () {
    // dispatch action to decrement the count!
    store.dispatch({
      type: "DECREMENT",
    });
    updateCouterElement();
  });
});
