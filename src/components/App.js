import React, { Component } from 'react'
import { Router, Route, Switch} from 'react-router-dom';
import StreamList from './stream/StreamList';
import StreamCreate from './stream/StreamCreate';
import StreamDelete from './stream/StreamDelete';
import StreamEdit from './stream/StreamEdit';
import StreamShow from './stream/StreamShow';
import StreamDisplayAll from './stream/StreamDisplayAll';
import history from '../history';
import Header from './Header';
export default class App extends Component {
    render() {
        return (
            <div>
              
                <div className="ui container"> 
                 <Header/>
                    <Router history={history}>
                        <Switch>
                            <Route path="/" exact component={StreamDisplayAll}></Route>
                            <Route path="/YourStream" exact component={StreamList}></Route>
                            <Route path="/Create/new" component={StreamCreate}></Route>
                            <Route path="/Delete/:id" component={StreamDelete}></Route>
                            <Route path="/Edit/:id" component={StreamEdit}></Route>
                            <Route path="/Show/:id" component={StreamShow}></Route>
                        </Switch>
                    </Router>
                </div> 
            </div>
        )
    }
}
