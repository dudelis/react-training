import React, { Component } from 'react';
import {connect} from 'react-redux';
import {trySignIn, trySignOut} from '../actions';


class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId: '201336569786-t4jneln59di5cg8p18cifj4u363rrcoa.apps.googleusercontent.com',
                scope: 'email'
            }).then((res) =>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };
    onAuthChange = (isSignedIn) =>{
        if (isSignedIn){
            this.props.trySignIn(this.auth.currentUser.get().getId());
        }else {
            this.props.trySignOut();
        }

    }
    onSignInClick = () =>{
        this.auth.signIn();
    }
    
    onSignOutClick = () =>{
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null){
            return null;
        } else if (this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui blue google button">
                    <i className="google icon"></i>
                    Sign In
                </button>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {trySignIn, trySignOut})(GoogleAuth);
