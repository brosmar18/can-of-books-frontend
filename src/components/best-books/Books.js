import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import bookImg from './book.jpeg';
import CreateBook from './CreatedBook';

class Books extends React.Component {
    render() {
        let books = this.props.books.map((book, index) => {
            return (
                <Carousel.Item key={book._id}>
                    <img className='image' src={bookImg} alt={book.title} />
                    <Carousel.Caption>
                        <h3 className="text-primary">Title: {book.title} </h3>
                        <p className="text-primary">Description: {book.description}</p>
                        <p className="text-primary">Status: {book.status}</p>
                    </Carousel.Caption>
                    <Button
                        variant="success"
                        onClick={() => this.props.deleteBooks(book._id)}>Delete Books</Button>
                </Carousel.Item>
            );
        });

        return (
            <>
                <Carousel id='carousel'>{books}</Carousel>
                <CreateBook handleBookSubmit={this.props.handleBookSubmit} />
            </>
        );
    }
}

export default Books;
