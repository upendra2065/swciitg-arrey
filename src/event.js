import React, { Component } from 'react'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './event.css';

function Poster(props){
  const settings = {       
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const content = props.posts.map((post) =>
      <div key={post.id}>
        <img src={post.url}/>
        <p className="react-event-clubname">{post.clubname}</p>
        <p className="react-event-datetime">{post.time} | {post.date}</p>
        <p className="react-event-venue">{post.venue}</p> 
      </div>
  );
  
  return(   <div className="containerx">
      <Slider {...settings}>
        {content}
      </Slider>
    </div>
  );
  
}
export default Poster;