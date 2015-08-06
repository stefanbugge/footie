import React from 'react'
import Router from 'react-router'

const { RouteHandler } = Router;

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Go Daw</h1>
                <RouteHandler />
            </div>
        );
    }
}
