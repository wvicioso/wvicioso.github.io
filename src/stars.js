import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Stars extends Component {

  constructor() {
    super();
    let num = this.getRandomInt(600)
    this.state = {
      right: 0,
      top: num,
    }
  }

  componentDidMount() {
    // console.log('helloo')
    // this.setState({
    //   right: '100%'
    // })
  }

  renderLanguages() {

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  // onLoad={this.test.bind(this)}
  render() {
    let i = Math.floor(Math.random() * Math.floor(30))
    setTimeout(() => {
      this.setState({
        top: this.getRandomInt(600)
      })
    }, (i*1000))
    return (
      <div className="stars" style={{
        position: 'absolute',
        right: this.state.right,
        top: this.state.top,
        height: 2,
        width: 2,
        background: 'white',

        animation: `App-stars infinite ${i}s linear`
      }}></div>
    );
  }
}
// transition: `all ${Math.floor(Math.random() * Math.floor(15))}s ease-out`,

export default Stars;
