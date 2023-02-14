import React, { Component } from 'react';

class ErrorBoundary extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            error: false
        }
    }
    
    static getDerivedStateFromError(error){
        return {state: true}
    }

    render(){
        if (this.state.error){
            return <h1>Some error ocured</h1>;
        }
        return this.props.children;
    }

}

export default ErrorBoundary;