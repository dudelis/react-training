import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchPosts} from '../actions';

class PostList extends Component {


    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        return (
            <div className="ui items">
                <div className="item">
                    <div className="content">
                        Comments
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts};
}

export default connect(mapStateToProps,{fetchPosts})(PostList);