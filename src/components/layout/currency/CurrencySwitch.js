import React, { Component } from 'react'
import styled from 'styled-components'
import '../../../base.css'
import Currency from './Currency'
import { connect } from 'react-redux'

class CurrencySwitch extends Component {
  render() {
    return (
      <CurrencySwitchStyled>
        <ul className='list'>
          {/* <li className='list__currency'>
            <div className='list__currency--symbol'>$</div>
            <div className='list__currency--code'>USD</div>
          </li> */}

          {this.props.currencies?.map((currency) => (
            <Currency currency={currency} />
          ))}
        </ul>
      </CurrencySwitchStyled>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    currencies: state.currency.currencies,
  }
}

export default connect(mapStateToProps)(CurrencySwitch)
//  STYLED COMPONENTS

const CurrencySwitchStyled = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 5rem;
  height: 7rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  right: 6.2vw;
  bottom: 0;
  top: 60px;

  position: absolute;

  .list {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
  }
`
