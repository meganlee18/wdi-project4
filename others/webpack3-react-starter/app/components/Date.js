import React from 'react'

export default class Date extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <h1>You are interested in _____ </h1>
      <h3>When are you thinking of going?</h3>
      <input 
      type="date" 
      id="myDate"/>
  </div>
  }
}