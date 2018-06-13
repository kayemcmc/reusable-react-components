import React, { Component } from 'react'

export default class Toggle extends Component {
  state = {
      on: false,
  }
  handleToggle = () => {
      this.setState({
          on: !this.state.on
      })
  }
  render() {
      const { children } = this.props;
      return children({
          on: this.state.on,
          handleToggle: this.handleToggle,
      })
  }
}
