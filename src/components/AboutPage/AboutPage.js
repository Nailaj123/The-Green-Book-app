import React from 'react';
import './AboutPage.css';
// import hugoGreen from './s-l640.jpg';
import localBusiness from './couple.jpeg';
import history from './negro_motorist_green_book_victor_hugo_green.jpg';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div className="about-container">

      <img className="about-image" src={history}></img>
      {/* <img src={hugoGreen}></img> */}
      <h1>About Page </h1>

      <p className='info'>
        First published in 1936, the Green Book was the brainchild of a Harlem-based postal carrier named Victor Hugo Green. Like most Africans Americans in the mid-20th century, Green had grown weary of the discrimination blacks faced whenever they ventured outside their neighborhoods. Green published the first edition of The Negro Motorist Green Book.
        At the time, the segregation-era guide was meant to direct black New York City residents to businesses they could frequent without facing the overt discrimination and threats of violence they encountered even up north.
        The greenbook application is a designation where black and brown people can go and create an account to access tons of local black and brown owned businesses. It is focused on creating opportunities for entrepreneurs to showcase their skills, services and products.
        With that I hope to encourage business and consumer engagement with these entrepreneurs -
        in an effort to create a greater sense of togetherness for our business communities. In 1936 a black postal worker named Victor Hugo Green published the first edition of The Negro Motorist Green Book.

        I created this application because up until recently it was really hard to find a list of black and brown owned businesses without having to be on social media, which I am not and even still it was pretty hard to find a list or a directory of all of them.
        So my solution was to create the greenbook app, a designation where people can go and support tons of local businesses. It is focused on creating opportunities for entrepreneurs to showcase their skills, services and products.
        With that I hope to encourage business and consumer engagement with these entrepreneurs
        in an effort to create a greater sense of togetherness for our business communities.

      </p>

      <img className="about-image" src={localBusiness}></img>
    </div>
  </div>
);

export default AboutPage;
