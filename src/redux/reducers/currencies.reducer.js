import { CURRENCIES_SUCCESS } from '../actionTypes'

const initialState = {
  visible: false,
  currencies: [],
}

const currencyReducer = (previousState = initialState, action) => {
  //destructure the action
  console.log('actiune', action)
  const { type, payload } = action

  switch (type) {
    case CURRENCIES_SUCCESS:
      console.log('Currencies')
      return {
        ...previousState,
        visible: !previousState.visible,
        currencies: payload,
      }
    default:
      return previousState
  }
}
export default currencyReducer
