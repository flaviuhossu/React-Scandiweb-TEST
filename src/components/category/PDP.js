import React, { Component } from 'react'
import styled from 'styled-components'

export default class PDP extends Component {
  // Product description page
  render() {
    return (
      <>
        <ProductDescription>
          <div className='product'>
            <div className='product__preview'>
              <ul className='product__preview__list'>
                <li className='product__preview__list__item'>
                  <img
                    className='product__preview__list__item--image'
                    src='https://fakeimg.pl/350x200/ff0000/000'
                    alt=''
                  />
                </li>
                <li>
                  <img
                    src='https://fakeimg.pl/350x200/ff0000/000'
                    alt=''
                    className='product__preview__list__item--image'
                  />
                </li>
                <li>
                  <img
                    src='https://fakeimg.pl/350x200/ff0000/000'
                    alt=''
                    className='product__preview__list__item--image'
                  />
                </li>
              </ul>
            </div>
            <div className='product__center'>
              <img
                className='product__center--image'
                src='https://fakeimg.pl/350x200/ff0000/000'
                alt='product'
              />
            </div>
            <div className='product__description'>
              <div className='product__description__titles'>
                <h2 className='product__description__titles--heading'>
                  apollo
                </h2>
                <h3 className='product__description__titles--sub-heading'>
                  running short
                </h3>
              </div>
              <div className='product__description__size'>
                <h2 className='product__description__size--heading'>size:</h2>
                <div className='product__description__size__buttons'>
                  <button className='product__description__size__buttons--xs'>
                    xs
                  </button>
                  <button className='product__description__size__buttons--s'>
                    s
                  </button>
                  <button className='product__description__size__buttons--m'>
                    m
                  </button>
                  <button className='product__description__size__buttons--l'>
                    l
                  </button>
                </div>
              </div>
              <h3 className='product__description__price--heading'>price:</h3>
              <h3 className='product__description__price--amount'>$50.00</h3>
              <button className='product__description__add-to-cart'>
                add to cart
              </button>
              <p className='product__description__info'>
                Find stunning women's cocktail dresses and party dresses. Stand
                out in lace and metallic cocktail dresses and party dresses from
                all your favorite brands.
              </p>
            </div>
          </div>
        </ProductDescription>
      </>
    )
  }
}

const ProductDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    height: 100%;
    &__preview {
      flex: 0.2;

      &__list {
        list-style: none;
        &__item {
          &--image {
            height: 100px;
            width: 100px;
          }
        }
      }
    }
    &__center {
      flex: 0.5;
      &--image {
        height: 511;
        width: 610;
        object-fit: cover;
      }
    }
    &__description {
      flex: 0.3;

      &__titles {
        margin-bottom: 1rem;
        &--heading {
          font-family: Raleway, sans-serif;
          font-weight: 600;
          font-size: 1.875rem;
          line-height: 1.68rem;
          text-transform: capitalize;
        }
        &--sub-heading {
          font-family: Raleway, sans-serif;
          font-weight: 400;
          font-size: 1.875rem;
          text-transform: capitalize;
        }
      }
      &__size {
        &--heading {
          font-family: 'Roboto Condensed', sans-serif;
          font-weight: 700;
          font-size: 1.12rem;
          line-height: 1.12rem;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        &__buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &--xs {
            color: var(--c-size-gray);
            font-family: 'Roboto Condensed', sans-serif;
            font-weight: 700;
            font-size: 1rem;
            line-height: 1.12rem;
            text-transform: uppercase;
            outline: none;
            background: transparent;
            cursor: pointer;
            padding: 0.81rem 1.43rem;
            border-color: var(--c-text);
          }
          &--s {
            color: #fff;
            font-family: 'Roboto Condensed', sans-serif;
            font-weight: 700;
            font-size: 1rem;
            line-height: 1.12rem;
            text-transform: uppercase;
            outline: none;
            background: var(--c-size-bg);
            cursor: pointer;
            padding: 0.81rem 1.43rem;
            border-color: var(--c-text);
          }
          &--m {
            color: var(--c-size-ok);
            font-family: 'Roboto Condensed', sans-serif;
            font-weight: 700;
            font-size: 1rem;
            line-height: 1.12rem;
            text-transform: uppercase;
            outline: none;
            background: transparent;
            cursor: pointer;
            padding: 0.81rem 1.43rem;
            border-color: var(--c-text);
          }
          &--l {
            color: var(--c-size-ok);
            font-family: 'Roboto Condensed', sans-serif;
            font-weight: 700;
            font-size: 1rem;
            line-height: 1.12rem;
            text-transform: uppercase;
            outline: none;
            background: transparent;
            cursor: pointer;
            padding: 0.81rem 1.43rem;
            border-color: var(--c-text);
          }
        }
      }
      &__price--heading {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 700;
        font-size: 1.12rem;
        line-height: 1.12rem;
        text-transform: uppercase;
        margin-top: 0.625rem;
        margin-bottom: 0.625rem;
      }
      &__price--amount {
        font-family: Raleway, sans-serif;
        font-weight: 600;
        font-size: 2rem;
        line-height: 1.68rem;
        text-transform: capitalize;
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
      }
      &__add-to-cart {
        font-family: Raleway, sans-serif;
        font-weight: 600;
        font-size: 1rem;
        text-transform: uppercase;
        line-height: 1.2rem;
        width: 100%;
        height: 3.25rem;
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
        background: var(--c-primary);
        color: #fff;
      }
      &__info {
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.567rem;
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
      }
    }
  }
`
