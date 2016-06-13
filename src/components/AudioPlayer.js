import React, {Component} from 'react';

export default class AudioPlayer extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.audioLink !== this.props.audioLink) {
          return true;
        }
        return false;
    }

    componentDidUpdate(params) {
      this.refs.audioplayer.load();
      this.refs.audioplayer.play();
    }

    render() {
        if (this.props.audioLink != '') {
            return (
                <audio ref="audioplayer" controls>
                    <source src={this.props.audioLink} type="audio/mpeg"/>
                </audio>
            );
        }
        return (
            <div></div>
        )

    }
}
