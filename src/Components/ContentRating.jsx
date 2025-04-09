/*
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     </>
    );
  }
}

export default ContentRating;
*/
import React, { Component } from 'react'
import './ClontentRating.css'
export class ContentRating extends Component {
  constructor(){
    super()
    // Initializing the states of likes and dislikes
    this.state = {
      likes:0,
      dislikes:0
    };
  }
  render(){
    return(
      <>
      <div className='content-rating'>
        <p>
          Cats are as friendly as dogs! 
        </p>
      </div>
      <div className='rating-button'>
        <button className='like-button'>
          Like ({this.state.likes})
        </button>
        <button className='dislike-button'>
          Dislike ({this.state.dislikes})
        </button>
      </div>
      </>
    )
  }
}
export default ContentRating