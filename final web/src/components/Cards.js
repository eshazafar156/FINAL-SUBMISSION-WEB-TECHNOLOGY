import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpeg'
              text='Explore the Beutiful Valleys of Tabout'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpeg'
              text='Travel Naran and visit the Marvelous Lake of Saif-ul Malook and Ride horse along the shores of the Lake'
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Boat with the cold water of Lake Saif-ul Malook with your Friends'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='Sleep in the most Luxurious Hotels of Deosai'
              label='Luxury'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpeg'
              text='Raft in the River of Hunza with your Friends and Family'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
