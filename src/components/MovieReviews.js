import React, { Component } from 'react';

const Review = ({
    //headline
})

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(review => <p className="review">{review.display_title}</p>)}</div>

export default MovieReviews
