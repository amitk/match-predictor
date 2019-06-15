import React, { Component } from 'react';
import { Input }

class TextBox extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return  (
      <Input type="text" value={this.props.value} />
    )
  }
}
