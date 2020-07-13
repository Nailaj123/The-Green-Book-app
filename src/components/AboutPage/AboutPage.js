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
        Victor Hugo Green (November 9, 1892 – 1960) was a Harlem, New York, postal employee and civic leader. He developed and wrote what became known as The Green Book, a travel guide for African Americans in the United States.
        The was popular at a time when their choices of lodging, restaurants and even gas stations was restricted in many places, including outside the South.
        It was first published as The Negro Motorist Green Book and later as The Negro Travelers’ Green Book. The books were published from 1936 to 1966. Green reviewed hotels and restaurants that did business with African Americans during the time of Jim Crow laws and racial segregation in the United States.
        He printed 15,000 copies each year.
        In the 1930s, Green began his work by compiling data on stores in the New York area that accepted black travelers, and published his first guide in 1936. Similar guides had been published for Jewish travelers, who sometimes faced discrimination. Green’s guide was so popular that he immediately began to expand its coverage the next year to other US destinations, adding hotel and restaurants as well. After retiring from the Postal Service, Green continued to work on updating issues of The Green Book. In addition, he developed the related travel agency business he had established in 1947.
       
          With everything going on in our city, I felt the responsibility to showcase some of the amazing and positive things going on as well.
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
