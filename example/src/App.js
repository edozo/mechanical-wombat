import React, { Component } from 'react'

import {Button} from 'test-ui-lib'

/**
 * This should be used as a playground for building components,
 * storybook will be used for displaying components to stakeholders.
 */
export default class App extends Component {
  render () {
    return (
      <div>
        <Button text="I'm a real button!" />
      </div>
    )
  }
}
