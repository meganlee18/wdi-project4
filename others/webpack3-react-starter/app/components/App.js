import React from 'react'
import Home from './Home'
import Feature from './Feature'
import Place from './Place'
import Date from './Date'
import Result from './Result'


export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      < Home />
      < Feature />
      < Place />
      < Date />
      < Result />
    </div>
  }
}
