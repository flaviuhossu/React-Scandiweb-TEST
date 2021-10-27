import React, { Component } from 'react'
import styled from 'styled-components'
import '../../base.css'
import './cartOverlay.css'

export default class CartOverlay extends Component {
  render() {
    return (
      <div className='slim-shady'>
        <CartOverlayContainer>
          <div className='container'>
            <h3 className='overlay__heading'>
              <strong>My bag</strong>
              <span>, 2 items</span>
            </h3>
            <div className='products-container'>
              <div className='product'>
                <div className='product__left'>
                  <p className='product__left__desc'>Product description</p>
                  <p className='product__left__price'> $50</p>
                  <div className='product__left__size'>
                    <button className='product__left__size--small'>S</button>
                    <button className='product__left__size--medium'>M</button>
                    <button className='product__left__size--large'>L</button>
                  </div>
                </div>
                <div className='product__right'>
                  <div className='product__right__quantity'>
                    <button className='product__right__quantity--plus'>
                      +
                    </button>
                    <p className='product__right__quantity--current-quantity'>
                      22
                    </p>
                    <button className='product__right__quantity--minus'>
                      -
                    </button>
                  </div>
                  <img
                    src='https://fakeimg.pl/350x200/ff0000/000'
                    alt=''
                    className='product__right__image'
                  />
                </div>
              </div>
              <div className='product'>
                <div className='product__left'>
                  <p className='product__left__desc'>Product description</p>
                  <p className='product__left__price'> $50</p>
                  <div className='product__left__size'>
                    <button className='product__left__size--small'>S</button>
                    <button className='product__left__size--medium'>M</button>
                    <button className='product__left__size--large'>L</button>
                  </div>
                </div>
                <div className='product__right'>
                  <div className='product__right__quantity'>
                    <button className='product__right__quantity--plus'>
                      +
                    </button>
                    <p className='product__right__quantity--current-quantity'>
                      22
                    </p>
                    <button className='product__right__quantity--minus'>
                      -
                    </button>
                  </div>
                  <img
                    src='https://fakeimg.pl/350x200/ff0000/000'
                    alt=''
                    className='product__right__image'
                  />
                </div>
              </div>
            </div>
            <div className='totals'>
              <p className='totals__heading'>total</p>
              <p className='totals__price'>$100.0</p>
            </div>
            <div className='buttons'>
              <button className='buttons--view-bag'>view bag</button>
              <button className='buttons--check-out'>check out</button>
            </div>
          </div>
        </CartOverlayContainer>
      </div>
    )
  }
}

//  STYLED COMPONENTS

const CartOverlayContainer = styled.div`
  z-index: 100;
  background-color: #fff;
  height: 500px;
  width: 400px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 6.2vw;
  bottom: 0;
  top: 60px;

  position: absolute;
  .container {
    width: 90%;
    height: 90%;

    .products-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .product {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        padding: 1rem;

        &__left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          margin-right: 3rem;
          &__desc {
            font-family: Raleway, sans-serif;
            font-weight: 300;
          }
          &__price {
            font-family: Raleway, sans-serif;
            font-weight: 500;
          }
          &__size {
            display: flex;
            flex-direction: row;
            &--small {
              margin-right: 0.5rem;
              font-size: 1rem;
              font-weight: 500;
              width: 1.4rem;
              height: 1.4rem;
              font-family: Raleway, sans-serif;
              font-weight: 500;
              outline: none;
              background: transparent;
              cursor: pointer;
              padding: 0.2rem 0.2rem;
              border-color: var(--c-text);
            }
            &--medium {
              margin-right: 0.5rem;
              font-size: 1rem;
              width: 1.4rem;
              height: 1.4rem;
              font-family: Raleway, sans-serif;
              font-weight: 500;
              outline: none;
              background: transparent;
              cursor: pointer;
              padding: 0.2rem 0.2rem;
              border-color: var(--c-text);
            }
            &--large {
              margin-right: 0.5rem;
              font-size: 1rem;
              font-weight: 500;
              width: 1.4rem;
              height: 1.4rem;
              font-family: Raleway, sans-serif;
              font-weight: 500;
              outline: none;
              background: transparent;
              cursor: pointer;
              padding: 0.2rem 0.2rem;
              border-color: var(--c-text);
            }
          }
        }
        /* End of Left */
        &__right {
          display: flex;
          flex-direction: row;

          &__quantity {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &--plus {
              margin-right: 0.5rem;
              font-size: 1rem;
              font-weight: 500;
              width: 1.4rem;
              height: 1.4rem;
              font-family: Raleway, sans-serif;
              font-weight: 500;
              outline: none;
              background: transparent;
              cursor: pointer;
              padding: 0%.2rem 0.2rem;
              border-color: var(--c-text);
            }
            &--current-quantity {
              margin-right: 0.5rem;
              font-size: 1rem;
              font-weight: 500;
              width: 1.4rem;
              height: 1.4rem;
              font-family: Raleway, sans-serif;
              font-weight: 500;
              outline: none;
              background: transparent;
              cursor: pointer;
              padding: 0%.2rem 0.2rem;
              border-color: var(--c-text);
            }
            &--minus {
              margin-right: 0.5rem;
              font-size: 1rem;
              font-weight: 500;
              width: 1.4rem;
              height: 1.4rem;
              font-family: Raleway, sans-serif;
              font-weight: 500;
              outline: none;
              background: transparent;
              cursor: pointer;
              padding: 0%.2rem 0.2rem;
              border-color: var(--c-text);
            }
          }
          &__image {
            width: 130px;
            height: 130px;
          }
        }
        /* End of Right */
      }
    }
    /* End of Producs container */
    .totals {
      display: flex;
      justify-content: space-between;
      align-content: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
      &__heading {
        text-transform: capitalize;
        font-size: 1.2rem;
        font-family: Roboto, sans-serif;
        font-weight: 500;
      }
      &__price {
        text-transform: capitalize;
        font-size: 1.2rem;
        font-family: Raleway, sans-serif;
        font-weight: 700;
      }
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &--view-bag {
        width: 140px;
        height: 43px;
      }
      &--check-out {
        width: 140px;
        height: 43px;
      }
    }
  }
`
