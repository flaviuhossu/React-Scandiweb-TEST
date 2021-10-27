import React, { Component } from 'react'
import styled from 'styled-components'
import './PLP.css'

export default class PLP extends Component {
  render() {
    return (
      <div className='flex-container'>
        <main className='container'>
          <h1 className='category-name'>Category name</h1>
          <Cards>
            <div className='cards'>
              <div className='card'>
                <img
                  src='https://fakeimg.pl/350x200/ff0000/000'
                  alt=''
                  className='card__image'
                />
                <div className='card__content'>
                  <p>bluza 1</p>
                  <p>$ 50</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src='https://fakeimg.pl/350x200/ff0000/000'
                  alt=''
                  className='card__image'
                />
                <div className='card__content'>
                  <p>bluza 2</p>
                  <p>$ 50</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src='https://fakeimg.pl/350x200/ff0000/000'
                  alt=''
                  className='card__image'
                />
                <div className='card__content'>
                  <p>bluza 3</p>
                  <p>$ 50</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src='https://fakeimg.pl/350x200/ff0000/000'
                  alt=''
                  className='card__image'
                />
                <div className='card__content'>
                  <p>bluza 4</p>
                  <p>$ 50</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src='https://fakeimg.pl/350x200/ff0000/000'
                  alt=''
                  className='card__image'
                />
                <div className='card__content'>
                  <p>bluza 5</p>
                  <p>$ 50</p>
                </div>
              </div>
              <div className='card'>
                <img
                  src='https://fakeimg.pl/350x200/ff0000/000'
                  alt=''
                  className='card__image'
                />
                <div className='card__content'>
                  <p>bluza 6</p>
                  <p>$ 50</p>
                </div>
              </div>
            </div>
          </Cards>
        </main>
      </div>
    )
  }
}

// STYLED COMPONENTS

const Cards = styled.div`
  .cards {
    margin: 0 auto;
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .card {
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0, 0.1);

    &__image {
      width: 100%;
      display: block;
    }
    &__content {
      line-height: 1.5;
      font-size: 0.9em;
      padding: 15px;
      background-color: #fafafa;
    }
    &__info {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      font-size: 0.8em;
    }
  }
`
