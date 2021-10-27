import React, { Component } from 'react'
import CartOverlay from './CartOverlay'
import CurrencySwitch from './currency/CurrencySwitch'
import Navbar from './Navbar'
import { store } from '../../redux/store'
import { connect } from 'react-redux'

class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        {this.props.currency.visible && <CurrencySwitch />}
        {/* <CartOverlay /> */}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  }
}
export default connect(mapStateToProps)(Layout)
