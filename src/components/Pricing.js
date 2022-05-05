import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';

export default function Pricing() {
return (
<div style={{marginTop:"5px"}}>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://picsum.photos/id/225/1600/600"
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://picsum.photos/id/230/1600/600"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://picsum.photos/id/237/1600/600"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</div>
)}
