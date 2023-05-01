import React from 'react';
import BestBooks from './components/BestBooks/BestBooks.js';

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
