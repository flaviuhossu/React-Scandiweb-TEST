import { CURRENCIES_SUCCESS } from '../actionTypes'

const initialState = {
  visible: false,
  currencies: [],
}

const currencyReducer = (previousState = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CURRENCIES_SUCCESS:
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
