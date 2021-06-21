
import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        redirect: false
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log("Error Boundary caught error : ", error, info)
        setTimeout(() => this.setState({ redirect: true }), 5000)
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 5000)
        }
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to="" />
        }

        if (this.state.hasError) {
            return (
                <h2>
                    This listing has an error. <Link to="/">Click Here </Link> to go back to home page or wait 5 seconds.
                </h2>
            )
        }
        return this.props.children;

        // Children is h1
        // <ErrorBoundary>
        //     <h1></h1>
        // </ErrorBoundary>
    }
}

export default ErrorBoundary;
