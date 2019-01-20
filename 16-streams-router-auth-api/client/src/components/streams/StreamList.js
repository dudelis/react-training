import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStreams } from '../../actions';

class StreamList extends Component {

  componentDidMount(){
    this.props.fetchStreams();
  }

  renderAdmin(stream){
    if (this.props.currentUserId === stream.userId){
      return (
        <div className="ui right floated content">
          <button className="ui button primary">Edit</button>          
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>   
          {this.renderAdmin(stream)}       
          <i className="large middle aligned icon camera"/>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
          
        </div>
      );
    });
  }

  render() {
    console.log(this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps =(state) => {
  return {
    currentUserId: state.auth.userId,
    streams: Object.values(state.streams)
  }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);
