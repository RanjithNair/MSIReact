import React, {Component, PropTypes} from 'react';
import Header from './Header';
import AudioPlayer from './AudioPlayer';
import ActionTypes from '../constants/ActionTypes';

export default class MSIData extends Component {
    constructor(props, context) {
        super(props, context);
    }

    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    fetchDetails(song) {
        if (song.LYRICS_URL != null) {
            const songID = song.LYRICS_URL.split("/")[5].split(".")[0];
            this.props.actions.fetchData('https://msiapi.herokuapp.com/msiapi/audio/' + songID, ActionTypes.RECEIVE_SONG_MP3_LINK)
        }
        this.props.actions.selectedSong(song);
    }

    renderResultRows(data) {
        return data.map((song) => { // anon func maintains scope!
            // Pass in a function to our onClick, and make it anon
            // to maintain scope.  The function body can be anything
            // which will be executed on click only.  Our song value
            // is maintained via a closure so it works.
            return (
                <tr onClick={() => this.fetchDetails(song)}>
                    <td data-title="Song">{song.S_SONG}</td>
                    <td data-title="Movie">{song.S_MOVIE}</td>
                    <td data-title="Year">{song.S_YEAR}</td>
                    <td data-title="Singers">{song.S_SINGERS}</td>
                    <td data-title="Musicians">{song.S_MUSICIAN}</td>
                    <td data-title="Lyricist">{song.Lyricist}</td>
                    <td data-title="Raaga">{song.S_RAGA == '' || song.S_RAGA == null ? 'NA' : song.S_RAGA}</td>
                </tr>
            );
        }); // no need to bind with anon function
    }
    render() {
        return (
            <div id="no-more-tables">
                <table className="table table-hover table-bordered table-striped msi-data">
                    <thead>
                        <tr>
                            <th>Song</th>
                            <th>Movie</th>
                            <th>Year</th>
                            <th>Singers</th>
                            <th>Musicians</th>
                            <th>Lyricist</th>
                            <th>Raaga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!this.isEmpty(this.props.state.searchResult)
                            ? this.renderResultRows(this.props.state.searchResult)
                            : ''}
                    </tbody>
                </table>

            </div>
        );
    }
}
