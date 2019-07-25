import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions';
class GooglAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                '278376221815-lafnd713sasc1ephqdlm6f702g8ocbgp.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.AuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.AuthChange);
            });
        })
    }
    AuthChange = (SignedIn) => {
        if (SignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }

    }
    ButtonSignIn = () => {
        this.auth.signIn();
    }
    ButtonSignOut = () => {
        this.auth.signOut();
    }
   
    renderAuthBut () {
        if (this.props.SignedClick === null){
            return null;
        } else if (this.props.SignedClick){
            return (
                <button onClick={this.ButtonSignOut} className="ui red google button">
                    <i className="google icon"></i>
                    Sign out
                </button>
            )
        } else{
            return  (
                <button onClick={this.ButtonSignIn} className="ui red google button">
                    <i className="google icon"></i>
                    Sign In
                </button>
            )
        }
    }
    
    render() { 
        console.log();
        return (
            <div>
                {this.renderAuthBut()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        SignedClick : state.auth.SignedIn
    };
}
export default connect(mapStateToProps, {signIn,signOut})(GooglAuth);