import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import bookImg from './book.png';
import CreateBook from './CreatedBook';

class Books extends React.Component {
    render() {
        let books = this.props.books.map((book, index) => {
            return (
                <Carousel.Item key={book._id} style={{ height: '100vh' }}>
                    <Card className="h-100">
                        <Card.Img variant="top" src={bookImg} alt={book.title} style={{ height: '100%' }} />
                        <Carousel.Caption className="d-flex flex-column justify-content-end">
                            <h3 className='card-title'>{book.title}</h3>
                            <p className='card-description'>{book.description}</p>
                            <Button variant="danger" className="btn-delete" onClick={() => this.props.deleteBooks(book._id)}>Delete Book</Button>

                        </Carousel.Caption>
                    </Card>
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
