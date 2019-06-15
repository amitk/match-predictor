import React, {Fragment, Component} from 'react';
import { Label, Input, Progress, Button } from 'reactstrap';
import { wordCode, squeezArray } from './../utils';
class LoveCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      yourName: '',
      partnerName: '',
      progress: 0,
    }
  }

  calculateLoveValue = () => {
    let yourNameArray = [], partnerNameArray = [];
    yourNameArray = wordCode(this.state.yourName);
    partnerNameArray = wordCode(this.state.partnerName)
    let requiredArray = yourNameArray.concat(partnerNameArray)
    while(requiredArray.length >  2) {
      console.log(requiredArray, 'requiredArray')
      requiredArray = squeezArray(requiredArray)
    }
    this.setState({ progress: (requiredArray[0]*10 + requiredArray[1]) });
  }

  handleYourNameChange = (e) => {
    this.setState({ yourName: e.target.value })
  }

  handlePartnerNameChange = (e) => {
    this.setState({ partnerName: e.target.value })
  }

  calculateProgress = () => {
    this.setState({ progress: this.calculateLoveValue() })
  }

    render() {
      return (
        <>
        <Label>Your Name</Label>
        <Input type="text" value={this.state.yourName} onChange={this.handleYourNameChange}/>
        <Label>Partner Name</Label>
        <Input type="text" value={this.state.partnerName} onChange={this.handlePartnerNameChange}/>
        <Button type="primary" onClick={this.calculateLoveValue}>Calculate</Button>
        <Label>{this.state.progress}</Label>
        <Progress value={this.state.progress}/>
        </>
      )
    }
}

export default LoveCalculator;
