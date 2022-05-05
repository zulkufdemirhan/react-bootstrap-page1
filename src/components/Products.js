import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button } from 'react-bootstrap';
import piano from "./photos/piano.jpg"
import trumpet from "./photos/trumpet.jpg"
import viola from "./photos/viola.jpg"
export default function Products() {
return (
    <div>
        <div className='d-flex justify-content-around mt-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top p-5" src={piano} />
                <Card.Body>
                    <Card.Title>Piano</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top p-5" src={viola} />
                <Card.Body>
                    <Card.Title>Viola</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top p-5" src={trumpet} />
                <Card.Body style={{padding:"1rem", marginTop:"3rem"}} >
                    <Card.Title>Trumpet</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
        </div>
        <div className='d-flex justify-content-around mt-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top p-5" src={piano} />
                <Card.Body>
                    <Card.Title>Piano</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top p-5" src={viola} />
                <Card.Body>
                    <Card.Title>Viola</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top p-5" src={trumpet} />
                <Card.Body style={{padding:"1rem", marginTop:"3rem"}} >
                    <Card.Title>Trumpet</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
)}
