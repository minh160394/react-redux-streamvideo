import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Link } from "react-router-dom";
import { fetchStreams} from '../../actions/index';
 class StreamDisplayAll extends Component {
    componentDidMount(){
         this.props.fetchStreams();
     }
    
    renderCreButton(){
        if(this.props.userSignin){
            return (
                <div style={{textAlign: 'right'}} >
                    <Link to="/Create/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }
    renderList(){
        return this.props.streams.map(stream => {
                return (
                        <div className="item" key={stream.id}>
                            <i className="large middle aligned icon camera"></i>
                            <div className="content">
                            <Link to={`/Show/${stream.id}`} className="header">
                                {stream.title}
                            </Link>
                                <div className="description">{stream.desp}</div>
                            
                            </div>                           
                        </div>
                );
            
        });
        return <div></div>
    }
    render() {
        return (
            <div>
                <h2>Stream</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreButton()}
            </div>
        )
    }
    
}
const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentId: state.auth.userid,
        userSignin: state.auth.SignedIn
    }
}
export default connect(mapStateToProps,{fetchStreams})(StreamDisplayAll);