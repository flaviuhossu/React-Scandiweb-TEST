import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getProducts } from '../../../redux/actions/products.action'
import PLPCard from './PLPCard'

class PLP extends Component {
  // componentDidMount() {
  //   console.log('PRODUCTS ARE:', this.props.getProducts())
  // }
  render() {
    return (
      <PLPStyled>
        <div className='flex-container'>
          <main className='container'>
            <h1 className='category-name'>All</h1>
            <div className='cards'>
              {this.props.products?.products[0]?.products.map((product) => (
                <PLPCard product={product} />
              ))}
              {this.props.products?.products[1]?.products.map((product) => (
                <PLPCard product={product} />
              ))}
            </div>
          </main>
        </div>
      </PLPStyled>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}
export default connect(mapStateToProps, { getProducts })(PLP)

// STYLED COMPONENTS

const PLPStyled = styled.div`
  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    width: 90vw;
  }
  .category-name {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .cards {
    margin: 0 auto;
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`
