import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundry'
import BrokenCounter from './BrokenCounter'

class App extends Component {
  render() {
    const style = {
      header: {
        width: '100%',
        background: '#04A5FF',
        color: '#FFFFFF',
        paddingTop: 50,
        paddingBottom: 50,
        textAlign: 'center',
        fontWeight: 800
      },
      example: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 50
      },
      card: {
        width: 200,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10
      }
    }

    return (
      <div>
        <div style={style.header}>
          React 16 Error Handling
        </div>
        <div style={style.example}>
          <ErrorBoundary>
            <div style={{...style.card, marginRight: 20}}>
              <BrokenCounter />
            </div>
            <div style={{...style.card, marginRight: 20}}>
              <BrokenCounter />
            </div>
          </ErrorBoundary>
        </div>
        <div style={style.example}>
          <ErrorBoundary>
            <div style={{...style.card, marginRight: 20}}>
              <BrokenCounter />
            </div>
          </ErrorBoundary>
          <div style={{...style.card, marginRight: 20}}>
            <BrokenCounter />
          </div>
        </div>
      </div>
    )
  }
}

export default App
