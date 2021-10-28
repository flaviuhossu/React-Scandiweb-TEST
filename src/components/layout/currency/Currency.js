import React, { Component } from 'react'
import styled from 'styled-components'

export default class Currency extends Component {
  render() {
    return (
      <CurrencyStyled>
        <li className='currency'>
          {/* <div className='currency--symbol'>$</div> */}
          <div className='currency--code'>{this.props.currency}</div>
        </li>
      </CurrencyStyled>
    )
  }
}
const CurrencyStyled = styled.div`
  .currency {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex: 1;

    font-family: Raleway, sans-serif;
    font-weight: 500;

    &--symbol {
      margin-right: 1rem;
    }
  }
  &:hover {
    background-color: red;
  }
`
