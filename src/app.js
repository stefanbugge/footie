import React from 'react'
import Router from 'react-router'

const { Route, RouteHandler, Link } = Router;

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Go Daw</h1>
                <Link to="test">test</Link>
                <br/>
                <Link to="lol">lol</Link>
                <RouteHandler />
            </div>
        );
    }
}

class Test extends React.Component {
    render() {
        return <h1>Hest</h1>;
    }
}

class Test2 extends React.Component {
    render() {
        return <h1>LOL</h1>;
    }
}

// declare our routes and their hierarchy
const routes = (
  <Route handler={App}>
    <Route name="test" handler={Test}/>
    <Route name="lol" handler={Test2}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});