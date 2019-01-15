import React from 'react';
import {connect} from 'react-redux';

class SongDetail extends React.Component {


    render(){
        return (
            <div className="ui card">
                <div className="content">
                
                <h3>Details for:</h3>
                <p>
                    Title: {this.props.selectedSong.title} <br/>
                    Duration: {this.props.selectedSong.duration}
                </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {selectedSong: state.selectedSong};
};


export default connect(mapStateToProps)(SongDetail);