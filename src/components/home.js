import React from 'react';
import HomeContainer from '../containers/homeContainer';

const Home = (props) => {
    return (
        <div>
            <HomeContainer {...props} />
        </div>
    );
};

export default Home;