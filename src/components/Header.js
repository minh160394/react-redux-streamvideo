import { Button,Icon, Menu } from 'semantic-ui-react';
import GooglAuth from './GooglAuth';
import history from '../history';
import { connect } from 'react-redux';
import React, { Component } from 'react'

 class Header extends Component {
       
     renderCreate =(e) => {
         console.log(e);
         if(e === true){
              return (
                  <Menu.Item><Button primary onClick={() => {history.push('/YourStream'); }}><Icon name='video'/>Your Streams</Button></Menu.Item>
              )           
         }
         else{
             return (
                <Menu.Item><Button  color='green' onClick={() => {history.push('/Create/new'); }}><Icon name='signup'/>Sign Up</Button></Menu.Item>
            )           
         };
     }
    render() { 
        return (
            <Menu color='teal' inverted secondary>
            <Menu.Item><Button basic inverted color='blue' onClick={() => {history.push(''); }}>Home</Button></Menu.Item>
            <Menu.Item><Button basic inverted color='blue' onClick={() => {history.push('/Show'); }}>Show</Button></Menu.Item>
            <Menu.Menu position='right'>
             {this.renderCreate(this.props.SignedClick)}
              <Menu.Item><GooglAuth/></Menu.Item>
            </Menu.Menu>
          </Menu>
        )
    };
};

const mapStateToProps = state => {
    return {
        SignedClick : state.auth.SignedIn
    };
}
export default connect(mapStateToProps)(Header);