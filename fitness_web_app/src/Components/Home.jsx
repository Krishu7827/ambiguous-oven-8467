import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from './ExampleCarouselImage';
import "../App.css"
function UncontrolledExample() {
  return (
    <Carousel interval={8000}>
      <Carousel.Item  id='Home1'>
      <div>
            <div className = "img" >
              </div>
        </div>
        <Carousel.Caption >
        <div className='sliding'>
        <h3>BUY IN AFFORDABLE PRICE</h3>
        <h4>AT 8$ ANY COURSE</h4>
        <button>BUY</button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item id='Home2'>
      <div className='img'>
          
        </div>
        <Carousel.Caption>
        <div className='sliding'>
        <h3>BUY IN AFFORDABLE PRICE</h3>
        <h4>AT 8$ ANY COURSE</h4>
        <button>BUY</button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;