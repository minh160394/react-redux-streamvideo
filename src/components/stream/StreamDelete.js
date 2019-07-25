import React, { Component } from 'react'
import Modal from '../Modal';
import history from '../../history';
import { Button } from 'semantic-ui-react';
import { connect} from 'react-redux';
import { fetchStream, deleteStream } from '../../actions/index';
import {Link} from "react-router-dom";
class StreamDelete extends Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    deletebutton = () => {
        const {id}  = this.props.match.params;
        this.props.deleteStream(id)
    }
   renderactions () {
      
       return (<React.Fragment>
            <Button.Group>
                <Button primary onClick={this.deletebutton}>Delete</Button>
                <Button.Or text='or' />
                <Button secondary><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Cancel</Link></Button>
            </Button.Group>
         
            
        </React.Fragment>);
    }
 
    rendercontent(){
        if(!this.props.stream){
            return 'Finding the stream that you want to delete'
        }
        return `Are you sure you want to delete with title: ${this.props.stream.title} ?`
    }
    Dismiss = () => {
        history.push('/');
    }
      
   
    render() {
        return (
            <div>
                <Modal
                 title="Delete Stream"
                 content={this.rendercontent()}
                 actions={this.renderactions()}
                 onDismiss={this.Dismiss}/>
            </div>
        )
    }
}
const mapStatetoProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};
export default connect(mapStatetoProps,{fetchStream,deleteStream})(StreamDelete);
