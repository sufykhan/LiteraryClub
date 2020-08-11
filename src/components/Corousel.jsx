import React from 'react';
import CardBlock from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Details from "./Carddetails"
function Bcarousel()
{

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
function xx(detail)
{
     return(
      <CardBlock title={detail.title} subtitle={detail.subtitle} img={detail.img} blog={detail.blog} />
    );
};
return(
  
  <div id="club" style={{width:"75%",margin:"auto"}}>
  <Carousel 
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  customTransition="all 2s"
  transitionDuration={2500}
  containerClass="carousel-container"
  //removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-15-px"
  autoPlay={true}
  renderButtonGroupOutside={true}
  renderDotsOutside={true}
 >
  {Details.map((detail)=>xx(detail))}
</Carousel>
</div>);
}
export default Bcarousel;