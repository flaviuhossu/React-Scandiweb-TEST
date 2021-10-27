import { gql } from '@apollo/client'
import { CURRENCIES_SUCCESS } from '../actionTypes'
import { client } from '../../index'

export const getCurrencies = () => async (dispatch) => {
  //DO THE CURRENCY QUERY
  const query = gql`
    query {
      currencies
    }
  `
  const data = await client.query({
    query: query,
  })

  dispatch({ type: CURRENCIES_SUCCESS, payload: data.data.currencies })
}
