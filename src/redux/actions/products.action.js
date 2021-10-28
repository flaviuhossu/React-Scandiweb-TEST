import { gql } from '@apollo/client'
import {
  PRODUCTS_BY_CATEGORY_FAIL,
  PRODUCTS_BY_CATEGORY_REQUEST,
  PRODUCTS_BY_CATEGORY_SUCCESS,
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
} from '../actionTypes'
import { client } from '../../index'
/////////////////////////////////////////////////////////////////////////////////////////
export const getProducts = () => async (dispatch) => {
  //DO THE PRODUCTS QUERY
  //LOADING STATE
  dispatch({ type: PRODUCTS_REQUEST })
  try {
    const query = gql`
      query {
        categories {
          name
          products {
            id
            name
            inStock
            gallery
            description
            category
            attributes {
              id
              name
              type
              items {
                displayValue
                value
                id
              }
            }
            prices {
              currency
              amount
            }
            brand
          }
        }
      }
    `
    const data = await client.query({
      query: query,
    })

    dispatch({ type: PRODUCTS_SUCCESS, payload: data.data })
  } catch (error) {
    console.log(error.message)
    dispatch({ type: PRODUCTS_FAIL, payload: error.message })
  }
}
/////////////////////////////////////////////////////////////////////////////////////////
export const getProductsByCategory = (category) => async (dispatch) => {
  //DO THE PRODUCTS BY CATEGORY QUERY

  try {
    //LOADING STATE
    dispatch({ type: PRODUCTS_BY_CATEGORY_REQUEST })

    const query = gql`
      query {
        category(input: { title: category }) {
          name
          products {
              id
              name
              type
              items {
                displayValue
                value
                id
              }
            }
            prices {
              currency
              amount
            }
            brand
          }
        }
      }
    `
    const data = await client.query({
      query: query,
    })

    dispatch({ type: PRODUCTS_BY_CATEGORY_SUCCESS, payload: data.data })
  } catch (error) {
    console.log(error.message)
    dispatch({ type: PRODUCTS_BY_CATEGORY_FAIL, payload: error.message })
  }
}
