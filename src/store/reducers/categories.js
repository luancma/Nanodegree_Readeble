import {
  GET_ALL_CATEGORIES,
  GET_DEFINED_CATEGORY
} from "../actions/categories";

const categories = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return [...action.categories];

    case GET_DEFINED_CATEGORY:
      return [...action.categories];
    default:
      return state;
  }
};
export default categories;
