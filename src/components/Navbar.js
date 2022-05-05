import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav } from 'react-bootstrap';
import "./App.css"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Home';
import Products from './Products';
import Pricing from './Pricing';

export default function Header() {
return (
    <Router>
    <Navbar bg="dark" variant="dark">
        <Container>
                    <Link className="link" to="/">For Practice</Link>
                <Nav>
                    <Link className="link" to="home">Home</Link>
                    <Link className="link" to="features">Features</Link>
                    <Link className="link" to="pricing">Pricing</Link>
                </Nav>
        </Container>
    </Navbar>
        <Switch>
            <Route exact path="/"  component={Pricing}/>
            <Route path='/home' component={Home} />
            <Route path='/features' component={Products}/>
            <Route path='/pricing' component={Pricing}/>
        </Switch>
    </Router>
)}
