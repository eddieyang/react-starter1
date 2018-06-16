// import _ from 'lodash';
import { hot } from 'base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';

import SubContent from './SubContent';

import './sample.css';

@hot(module)
class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };


  render() {
    console.log('render Sample');
    return (
      <div>
        <div className="header">
          <button className="btn btn-primary" onClick={this.handleClick}>click</button>
          <span>{this.state.count}</span>
        </div>
        <div className="flex-container">
          <div className="item a">1</div>
          <div className="item b flex-2">2</div>
          <div className="item c">
            <div>3</div>
            <SubContent />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(Sample);
