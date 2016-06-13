import React, {Component, PropTypes} from 'react';
import MSIData from './MSIData.js';
import Header from './Header';

export default class MSIRoot extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
      return(
      <MSIData actions = {this.props.actions} state={this.props.state}/>

      );
    }
}
