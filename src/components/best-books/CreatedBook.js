import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';


class CreateBook extends React.Component {
    render() {
        return (
            <Container className='Form'>
                <Form onSubmit={this.props.handleBookSubmit}>
                    <Form.Group controlId='title'>
                        <Form.Label className='form__label'>Title</Form.Label>
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group controlId='description'>
                        <Form.Label className='form__label'>Description</Form.Label>
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group controlId='status'>
                        <Form.Check type='checkbox' label='Check if you want.' />
                    </Form.Group>
                    <Button type='submit'>Add Book</Button>
                </Form>
            </Container>
        )
    }
}

export default CreateBook;
