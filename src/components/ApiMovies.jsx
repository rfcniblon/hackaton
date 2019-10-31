import React from 'react';
import axios from 'axios';
import './distributeur/Distrib.css'

class ApiMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null
        };
        this.id  = this.props.id;
    }

    componentDidMount() {
        console.log(this.id);
        this.getMovies()
    }
    getMovies = () => {
        axios.get(`https://hackathon-wild-hackoween.herokuapp.com/movies/${this.id}`)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                this.setState({
                    movies: data.movie,
                });
            });
    }

    render() {
        
        return (
            <div>
                {this.state.movies === null ? <p>Loading...</p> :  
                    <div>
                        
                        <img className="jacquette" src={this.state.movies.posterUrl} alt={this.state.movies.title} />
                    </div>
                }

            </div>
        );

    }

}


export default ApiMovies;