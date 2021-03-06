import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
    <div>
    <Navbar inverse fixedTop>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React App</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Grid>
    </Navbar>
    <Jumbotron>
      <Grid>
        <h1>Velkommen til UllernRenseriet</h1>
        <p>
          <Button
            bsStyle="success"
            bsSize="large"
            href="http://react-bootstrap.github.io/components.html"
            target="_blank">
            Tjenester
          </Button>
        </p>
      </Grid>
    </Jumbotron>
  </div>
);
}
}

export default App;
