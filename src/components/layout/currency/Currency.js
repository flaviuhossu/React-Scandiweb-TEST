import React, { Component } from 'react'

export default class Currency extends Component {
  render() {
    return (
      <li className='list__currency'>
        {/* <div className='list__currency--symbol'>$</div> */}
        <div className='list__currency--code'>{this.props.currency}</div>
      </li>
    )
  }
}
