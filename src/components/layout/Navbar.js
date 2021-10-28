import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import styled from 'styled-components'
import '../../base.css'
import logo from '../../assets/brand_logo.svg'
import cartIcon from '../../assets/empty_cart.svg'
import arrowDown from '../../assets/arrow_down.svg'

import { getCurrencies } from '../../redux/actions/currencies.action'
import { getProducts } from '../../redux/actions/products.action'
import { connect } from 'react-redux'

class Navbar extends Component {
  render() {
    return (
      <Nav className='nav'>
        <div className='navbar'>
          <div className='navbar__links-container'>
            <ul>
              <li className='women-links '>
                <Link to='/clothing' onClick={''}>
                  <a href='#'>clothing</a>
                </Link>
                <div className='women-links--slate'></div>
              </li>

              <li className='men-links'>
                <Link to='/tech'>
                  <a href='#'>tech</a>
                </Link>
                <div className='men-links--slate'></div>
              </li>

              {/* <li className='kids-links'>
                <Link to='/kids'>
                  <a href='#'>kids</a>
                </Link>
                <div className='kids-links--slate'></div>
              </li> */}
            </ul>
          </div>
          <div className='brand'>
            <Link
              to='/'
              onClick={() => {
                this.props.getProducts()
              }}
            >
              <a href='#'>
                <img src={logo} class='brand-logo' alt='brand-logo' />
              </a>
            </Link>
          </div>
          <div className='navbar__checkout-container'>
            <div
              className='navbar__checkout-container__currency'
              onClick={() => {
                this.props.getCurrencies()
              }}
            >
              <div className='navbar__checkout-container__currency--symbol'>
                $
              </div>
              <div className='navbar__checkout-container__currency--arrow'>
                <img src={arrowDown} alt='arrow-down' />
              </div>
            </div>
            <div className='navbar__checkout-container__cart'>
              <Link to='/cart'>
                <a href='#'>
                  <img src={cartIcon} alt='cart-icon' />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Nav>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  }
}

export default connect(mapStateToProps, { getCurrencies, getProducts })(Navbar)

// STYLED COMPONENTS

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .navbar {
    width: 90vw;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* LINKS */

    &__links-container {
      font-family: Raleway, sans-serif;
      text-transform: uppercase;
      text-decoration: none;
      ul {
        display: flex;
        list-style: none;
        li {
          padding: 0 0.8rem 0 0.8rem;
          a {
            text-decoration: none;
            color: var(--c-text);
          }
        }
        .women-links {
          &--slate {
            background-color: var(--c-primary);
            width: 100%;
            height: 2px;
            /* ↓ Display none for now... we will ad an "active" class that will mek it visible again */
            display: none;
          }
        }
        .men-links {
          &--slate {
            background-color: var(--c-primary);
            width: 100%;
            height: 2px;
            display: none;
          }
        }
        .kids-links {
          &--slate {
            background-color: var(--c-primary);
            width: 100%;
            height: 2px;
            display: none;
          }
        }
      }
    }
    /* LOGO */
    .brand {
      .logo {
        width: 100px;
        height: 50px;
      }
    }

    /* CURRENCY AND CART */

    &__checkout-container {
      display: flex;
      align-items: center;
      justify-content: center;

      &__currency {
        display: flex;
        align-items: center;

        &--symbol {
          padding: 0.3rem 0 0.3rem 0.3rem;
        }
        &--arrow {
          padding: 0.5rem;
          margin-right: 0.5rem;
        }
      }

      &__cart {
        padding: 0.5rem;
      }
    }
  }
`
