import React from 'react';
import BestBooks from '../best-books/BestBooks';


class Main extends React.Component {
    render() {
        return (
            <>
                <section className='main'>
                    <h2 className='main__title'>Best Books</h2>
                    <BestBooks />
                </section>
            </>
        );
    }

}




export default Main;
