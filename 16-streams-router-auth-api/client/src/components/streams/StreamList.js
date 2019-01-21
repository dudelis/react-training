import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends Component {

  componentDidMount(){
    this.props.fetchStreams();
  }

  renderAdmin(stream){
    if (this.props.currentUserId === stream.userId){
      return (
        <div className="ui right floated content">
          <Link to={`/stream/edit/${stream.id}`} className="ui button primary">Edit</Link>          
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

  renderCreate() {
    if (this.props.isSignedIn)
    return (
      <div style={{textAlign: 'right'}}>
        <Link to="/stream/new" className="ui button primary">Create Stream</Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps =(state) => {
  return {
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    streams: Object.values(state.streams)
  }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);
