import React, { Component } from 'react'
import styled from 'styled-components'
import '../../../base.css'

class PLPCard extends Component {
  render() {
    return (
      <PLPCardStyled>
        <div className={!this.props.product.inStock && 'out-of-stock'}>
          <div className='card'>
            <img
              src={this.props.product.gallery[0]}
              alt='product'
              className='card__image'
            />
            {!this.props.product.inStock && (
              <h1 className='card__out-of-stock--title'>out of stock</h1>
            )}
            <div className='card__content'>
              <h2 className='card__content--name'>{this.props.product.name}</h2>
              <h2 className='card__content--price'>
                {this.props.product.prices[0].amount}
              </h2>
            </div>
          </div>
        </div>
      </PLPCardStyled>
    )
  }
}

export default PLPCard

//STYLED COMPONENTS
const PLPCardStyled = styled.div`
  .card {
    position: relative;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0, 0.1);

    &__out-of-stock--title {
      font-family: Raleway, sans-serif;
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.375rem;
      color: var(--c-oos-gray);
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &__image {
      width: 400px;
      height: 400px;
      display: block;
      object-fit: contain;
    }
    &__content {
      line-height: 1.5;
      font-size: 0.9em;
      padding: 15px;

      &--name {
        font-family: Raleway, sans-serif;
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 1.81rem;
        color: var(--c-text);
      }
      &--price {
        font-family: Raleway, sans-serif;
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.81rem;
      }
    }
  }
`
