export const reducer = (state, action) => {
  if (action.type === "ADD_PERSON") {
    return {
      ...state,
      people: [...state.people, action.payload],
      isModalOpen: true,
      modalContent: `${action.payload.name} is added`,
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter name",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }

  if (action.type === "DELETE_PERSON") {
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload),
      isModalOpen: true,
      modalContent: "Person is deleted",
    };
  }
  return state;
};
