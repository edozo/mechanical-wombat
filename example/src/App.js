import React, { Component } from 'react'

import {Example, Button} from 'test-ui-lib'

export default class App extends Component {
  render () {
    return (
      <div>
        <Example text='Modern React component module!' />
        <Button text="I'm a real button!" />
      </div>
    )
  }
}
