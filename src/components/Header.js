import React, {Component, PropTypes} from 'react';
import ActionTypes from '../constants/ActionTypes';
import AudioPlayer from './AudioPlayer';

export default class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }

    changeSearchText(event) {
        this.props.actions.changeSearchText(event.currentTarget.value);
    }

    executeSearch(searchText) {
        this.props.actions.fetchData('https://msiapi.herokuapp.com/msiapi/songs/ms/' + this.props.state.searchText + '/1', ActionTypes.RECEIVE_SEARCH_RESULT_DATA);
        //this.props.actions.fetchData('http://localhost:3004/msiapi', ActionTypes.RECEIVE_SEARCH_RESULT_DATA);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">RJ's MSI</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="#">Link
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">Link</a>
                            </li>
                            <li id="msi-audio-player">
                              <AudioPlayer audioLink={this.props.state.songAudioLink} />
                            </li>
                        </ul>
                        <div className = "searchSection">
                            <input type="text" id="searchText" className="input-lg" placeholder="Search" onChange={this.changeSearchText.bind(this)}/>
                            <button className="btn btn-primary btn-lg" id="searchButton" onClick={() => {
                                this.executeSearch();
                            }}>Submit</button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
