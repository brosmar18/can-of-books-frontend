import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Books from './Books';
import '../main/main.css';

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
                books: results.data
            });
        } catch (error) {
            console.log('we have an error: ', error.response.data);
        }
    };

    handleBookSubmit = async (event) => {
        event.preventDefault();
        let newBook = {
            title: event.target.title.value,
            description: event.target.description.value,
            status: event.target.status.checked,
        }
        console.log(newBook);
        this.postBook(newBook);
    };

    postBook = async (newBookObject) => {
        try {
            let url = `${process.env.REACT_APP_SERVER}/books`;
            let createdBook = await axios.post(url, newBookObject);

            this.setState({
                books: [...this.state.books, createdBook.data],
            });
        } catch (error) {
            console.log('we have an error: ', error.response.data);
        }
    };

    deleteBooks = async (id) => {
        console.log('proof of life');
        try {
            let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
            await axios.delete(url);

            let updatedBooks = this.state.books.filter(book => book._id !== id);
            this.setState({
                books: updatedBooks
            });
        } catch (error) {
            console.log('we have an error: ', error.response.data);
        }
    };

    componentDidMount() {
        this.getBooks();
    }

    render() {
        return (
            <Container>
                <Books
                    books={this.state.books}
                    deleteBooks={this.deleteBooks}
                    handleBookSubmit={this.handleBookSubmit}
                />
            </Container>
        );
    }
}

export default BestBooks;
