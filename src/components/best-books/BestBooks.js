import React, { Component } from 'react';
import axios from 'axios';
import { Container, Carousel } from 'react-bootstrap';

class BestBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }

    getBooks = async () => {
        try {
            let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
            console.log('results from api', results);
            this.setState({
                books: results.data,
            });
        } catch (error) {
            console.log('we have an error: ', error.response.data);
        }
    };

    componentDidMount() {
        this.getBooks();
    }

    render() {
        let allBooks = this.state.books.map((book, index) => {
            return (
                <Carousel.Item key={index}>
                    <Carousel.Caption>
                        <h3>Title: {book.title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        });
        return (
            <>
                {this.state.books.length > 0 && (
                    <>
                        <Container>
                            <Carousel>{allBooks}</Carousel>
                        </Container>
                    </>
                )}
            </>
        );
    }
}

export default BestBooks;
