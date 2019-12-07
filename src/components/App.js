import React, { Component, Profiler } from 'react';
import Cipher from './cipher';
import TextArea from './textArea';
import rotiEncode from '../cipherAlgorithm/ROTI13Encode';
import rotiDecode from '../cipherAlgorithm/ROTI13Decode';
import asciiDecode from '../cipherAlgorithm/asciiDecode';
import asciiEncode from '../cipherAlgorithm/asciiEncode';

import CodeBtn from './codeBtn';
import '../style/style.css'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textAreaInputValue: '',
      outputValue: '',

      currentAlgoName: ''

    }

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeOutput = this.handleChangeOutput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  // put text into input field
  handleChangeInput(event) {
    this.setState({
      textAreaInputValue: event.target.value,
    })
  }
  // put text into ouput field
  handleChangeOutput(event) {
    this.setState({
      outputValue: event.target.value,
    })
  }



  handleClick(event) {

    if (this.state.currentAlgoName === 'roti13') {
      if (event.target.textContent === 'Encode') {

        this.setState({
          outputValue: rotiEncode(this.state.textAreaInputValue)
        })
      } else if (event.target.textContent === 'Decode') {
        this.setState({
          textAreaInputValue: rotiDecode(this.state.outputValue)
        })
      }
    } else if (this.state.currentAlgoName === 'ascii') {
      if (event.target.textContent === 'Encode') {
        this.setState({
          outputValue: asciiDecode(this.state.textAreaInputValue)
        })
      } else if (event.target.textContent === 'Decode') {
        this.setState({
          textAreaInputValue: asciiEncode(this.state.outputValue)
        })
      }
    }
  }

  // after mount, 'roti13' will be selected by default, to a user can do text-transform immediately
  componentDidMount() {
    this.setState({
      currentAlgoName: 'roti13'
    })
  }

  transferData = (value) => {
    this.setState({
      currentAlgoName: value
    })
  }



  render() {
    return (

      <>
        <React.StrictMode>

          <header className="choose-cipher">
            <Cipher updatefunc={this.transferData} />
          </header>

          <main>
            <Profiler id="TextArea" onRender={(
              actualDuration,
              baseDuration,
              startTime,
              commitTime,
              interactions) => {
              console.log(actualDuration,
                baseDuration,
                startTime,
                commitTime,
                interactions)
            }}>

              <TextArea onChange={this.handleChangeInput} val={this.state.textAreaInputValue} />
              <div className="code-btns">
                <CodeBtn clickEvent={this.handleClick} whatDo="Encode" />
                <CodeBtn clickEvent={this.handleClick} whatDo="Decode" />
              </div>
              <TextArea onChange={this.handleChangeOutput} val={this.state.outputValue} />
            </Profiler>
          </main>
        </React.StrictMode>
      </>
    )
  }
}
