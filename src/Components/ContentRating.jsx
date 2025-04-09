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
import './ContentRating.css'
export class ContentRating extends Component {
  constructor(){
    super()
    // Initializing the states of likes and dislikes
    this.state = {
      likes:0,
      dislikes:0,
      totalRatings:0,

      // Creating two event handlers
      handleLike:() =>{
        this.setState((prevState) => ({
          likes:prevState.likes +1,
          totalRatings:prevState.totalRatings+1
        }));

      },

      handleDislike:() =>{
        this.setState((prevState) =>({
          dislikes: prevState.dislikes +1,
          totalRatings:prevState.totalRatings +1
        }));

      }
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
      <div className='rating-buttons'>
        <button className='like-button' onClick={this.state.handleLike}>
          Like ({this.state.likes})
        </button>
        <button className='dislike-button' onClick={this.state.handleDislike}>
          Dislike ({this.state.dislikes})
        </button>
      </div>
      <div className='rating-counter'>
        <p>Total Rating: {this.state.totalRatings}</p>
      </div>
      </>
    )
  }
}
export default ContentRating