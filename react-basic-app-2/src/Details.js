import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import Modal from './Model';

// const Details = () => {
//     return (
//         <h2>Hi lol !!!</h2>
//     );
// };

class Details extends Component {

    // constructor() {
    //     super();
    //      
    //     this.state = {
    //         loading: true
    //     };
    // }
    // this is a shortcut for the above constructor; // but we have to add it in the babel and eslint config !!!!
    state = { loading: true, showModal: false }

    async componentDidMount() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        )

        const json = await res.json();
        // this.setState({
        //     loading: false,
        //     name: json.pets[0].name
        //      animal 
        //     .......
        // })
        this.setState(
            // everything will assigned from the json 
            Object.assign(
                {
                    loading: false
                },
                json.pets[0]
            )
        )
    }

    toggleModa = () => this.setState({ showModal: !this.state.showModal });
    adopt = () => (window.location = 'http://bit.ly/pet-adopt');

    render() {

        if (this.state.loading) {
            return <h2>Loading...</h2>
        }

        const { animal, breed, name, city, state, description, images, showModal } = this.state;
        return (
            <div className="details">
                <Carousel images={images} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${city} - ${state}`}</h2>

                    {/* Another way to do it  */}
                    <ThemeContext.Consumer>
                        {
                            ([theme]) => (
                                <button
                                    onClick={this.toggleModa}
                                    style={{ backgroundColor: theme }}>Adopt {name}</button>
                            )
                        }
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                    <h1>Would you like to adopt me.</h1>
                                    <div className="buttons">
                                        <button onClick={this.adopt}>Yes</button>
                                        <button onClick={this.toggleModa}>No</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                </div>
            </div>
        )
    }
}

// withRouter will inject all the route information in the Details to use .
const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailsWithRouter />
        </ErrorBoundary>
    )
}