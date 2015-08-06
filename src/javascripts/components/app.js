import React from 'react'
import Router from 'react-router'

export default class App extends React.Component {
    render() {
        return (
          <div className="row">
            <div className="large-12 columns">
              <h1>Footie</h1>
              <Router.RouteHandler/>
            </div>
          </div>
        );
    }
}
