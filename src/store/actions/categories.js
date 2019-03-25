import { getAllCategory } from "../../utils/apiTeste";

export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";

export function fetchCategoriesSuccess(categories) {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  };
}

export const actionGetAllCategories = () => {
  return dispatch => {
    return getAllCategory()
      .then(response => {
        dispatch(fetchCategoriesSuccess(response.data.categories));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
