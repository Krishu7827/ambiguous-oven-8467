import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from './ExampleCarouselImage';
import "../App.css"
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <div>
            <img className='img' src="https://artimg.gympik.com/articles/wp-content/uploads/2019/10/Featured1.jpg" alt="" />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div>
            <img className='img' src="https://tropeaka.com/cdn/shop/articles/main_image_d517c79f-4ec7-4946-bb5e-db7e80623e85_1080x.jpg?v=1571697737" alt="" />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;