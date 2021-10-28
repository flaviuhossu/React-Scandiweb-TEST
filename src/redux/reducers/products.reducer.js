import {
  PRODUCTS_BY_CATEGORY_FAIL,
  PRODUCTS_BY_CATEGORY_REQUEST,
  PRODUCTS_BY_CATEGORY_SUCCESS,
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
} from '../actionTypes'

export const productsReducer = (
  previousState = {
    products: {},
    loading: false,
  },
  action //coming from action creator
) => {
  //destructure the action
  const { type, payload } = action
  switch (type) {
    case PRODUCTS_SUCCESS:
      return {
        ...previousState,
        loading: false,
        products: payload.categories,
      }
    case PRODUCTS_REQUEST:
      return {
        ...previousState,
        loading: true,
      }
    case PRODUCTS_FAIL:
      return {
        ...previousState,
        loading: false,
      }
    default:
      return previousState
  }
}

///////////////////////////////////////////////////////////////////////////////////

export const productsByCategoryReducer = (
  previousState = {
    products: {},
    loading: false,
  },
  action //coming from action creator
) => {
  //destructure the action
  const { type, payload } = action
  switch (type) {
    case PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...previousState,
        loading: false,
        products: payload,
      }
    case PRODUCTS_BY_CATEGORY_REQUEST:
      return {
        ...previousState,
        loading: true,
      }
    case PRODUCTS_BY_CATEGORY_FAIL:
      return {
        ...previousState,
        loading: false,
      }
    default:
      return previousState
  }
}
///////////////////////////////////////////////////////////////////////////////////
