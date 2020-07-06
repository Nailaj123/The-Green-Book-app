import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        The greenbook application is a designation where black and brown people can go and create an account to access tons of local businesses. It is focused on creating opportunities for entrepreneurs to showcase their skills, services and products. With that I hope to encourage business and consumer engagement with these entrepreneurs -
        in an effort to create a greater sense of togetherness for our business communities.
      </p>
    </div>
  </div>
);

export default AboutPage;
