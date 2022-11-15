import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
  console.log('state :>> ', state)
  return {
    count: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'Increment' }),
    decrement: () => dispatch({ type: 'Decrement' })
  }
}

class Counter extends Component {
  constructor () {
    super()
    this.state = {
      msg: 'Hello World'
    }
  }

  render () {
    return (
    <>
      {this.state.msg}
      {this.props.count}<br/>
      <button onClick={() => this.props.increment()}>+</button>
      <button onClick={() => this.props.decrement()}>-</button>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
Counter.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  count: PropTypes.number

}
