import React, {Component, PropTypes} from 'react';
import MSIData from './MSIData.js';
import Header from './Header';
import Loading from 'react-loading';

export default class MSIRoot extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
      {if(this.props.state.isSubmitClicked) {
        return(
          <div>

            {this.props.state.searchResult != null ?
              <MSIData
                actions = {this.props.actions}
                state={this.props.state}/>
              :
              <Loading type='balls' color='#000' />
            }
          </div>
      );
      }}
      return null;

    }
}
