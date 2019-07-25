import React, { Component } from 'react'
import { connect} from 'react-redux';
import { fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';
class StreamEdit extends Component {
    componentWillMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmitEdit = formValues =>{
        this.props.editStream(this.props.match.params.id,formValues);
    }
    render() {
        if(!this.props.stream){
            return <div>Loading....</div>;
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm initialValues={_.pick(this.props.stream,'title','desp')} onSubmit={this.onSubmitEdit}/>
            </div>
        )
    }
}
const mapStateToProps =(state, ownProps) =>{
    return { stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchStream,editStream})(StreamEdit);
