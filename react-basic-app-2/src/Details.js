import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Carousel from './Carousel';

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
    state = { loading: true }

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

    render() {

        if (this.state.loading) {
            return <h2>Loading...</h2>
        }

        const { animal, breed, name, city, state, description, images } = this.state;
        return (
            <div className="details">
                <Carousel images={images} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${city} - ${state}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

// withRouter will inject all the route information in the Details to use .
export default withRouter(Details);