import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
    <h1>OTHER DESTINATIONS OF ODISHA!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='DUMDUMA'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Sunset View in Chilika'
              label='CHILIKA'
              path='/services'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Sunset View in Chilika'
              label='Lingaraj Temple'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Sunset View in Chilika'
              label='Dhauli'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Lord Shive '
              label='LORD DHABALESWAR'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Sea Beach View'
              label='PURI SEA BEACH'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='JAJPUR'
              path='/sign-up'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Khandagiri'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
