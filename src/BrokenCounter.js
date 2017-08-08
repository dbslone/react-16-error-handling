import React, { Component } from 'react'

class BrokenCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increase = () => {
    this.setState((state) => {
      return {
        counter: state.counter + 1
      }
    })
  }

  decrease = () => {
    this.setState((state) => {
      return {
        counter: state.counter - 1
      }
    })
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }

    const style = {
      container: {
        textAlign: 'center'
      },
      header: {
        background: '#71B6FF',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottm: 20
      },
      number: {
        fontSize: 70,
        marginBottom: 20
      },
      footer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontWeight: 700,
        fontSize: 20,
        cursor: 'pointer'
      },
      decrease: {
        padding: 10,
        background: '#FE737C',
        flexGrow: 1
      },
      increase: {
        padding: 10,
        background: '#92DAFE',
        flexGrow: 1
      }
    }
    return (
      <div style={style.container}>
        <div style={style.header}>
          Broken Counter
        </div>
        <div style={style.number}>
          {this.state.counter}
        </div>
        <div style={style.footer}>
          <div style={style.decrease} onClick={this.decrease}>-</div>
          <div style={style.increase} onClick={this.increase}>+</div>
        </div>
      </div>
    )
  }
}

export default BrokenCounter
