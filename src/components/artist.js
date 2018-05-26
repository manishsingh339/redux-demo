import React from 'react';
import ArtistContainer from '../containers/artistContainer';

const Artist = (props) => {
    return (
        <div>
            <ArtistContainer {...props} />
        </div>
    );
};

export default Artist;