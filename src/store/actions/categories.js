import { getAllCategory, getCategoryDefined } from "../../utils/apiTeste";

export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_DEFINED_CATEGORY = "GET_DEFINED_CATEGORY";

export function fetchCategoriesSuccess(categories) {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  };
}

export function fetchDefinedCategorySuccess(categories) {
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

export const actionGetDefinedCategory = category => {
  return dispatch => {
    return getCategoryDefined(category)
      .then(response => {
        dispatch(fetchDefinedCategorySuccess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
