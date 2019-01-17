import React, { Component } from 'react';


class GoogleAuth extends Component {
    state = {isSignedIn: null}
    componentDidMount(){
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId: '201336569786-t4jneln59di5cg8p18cifj4u363rrcoa.apps.googleusercontent.com',
                scope: 'email'
            }).then((res) =>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };
    onAuthChange = () =>{
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }
    onSignInClick = () =>{
        this.auth.signIn();
    }
    
    onSignOutClick = () =>{
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null){
            return null;
        } else if (this.state.isSignedIn){
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

export default GoogleAuth;
