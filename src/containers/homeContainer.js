import React, { Component } from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import Search from '../components/search';
import Artistlist from '../components/artistlist';
import {artistListAll, artistList} from '../actions'

class HomeContainer extends Component { 

    state = {
        artists:[]
    }

    componentWillMount() {
        this.props.artistListAll();
    }


    getKeywords = (event) => {
        let key = event.target.value;
        this.props.artistList(key);
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                {!!this.props.artists && !!this.props.artists.artistList && !!this.props.artists.artistList.length ?
                    <Artistlist artists={this.props.artists.artistList}/>
                    : null
                }
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        artists: state.artists
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({artistListAll, artistList}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)