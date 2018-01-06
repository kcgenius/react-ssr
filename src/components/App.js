import React from 'react'
import universal from 'react-universal-component'

const UniversalTab = universal(({tab}) => import(`./${tab}`),{
  minDelay: 750,
  //loading: Loading //component
  loadingTransition: false
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'Home' }
  }

  render() {
    return (
      <div>
        <UniversalTab tab={this.state.selected} /*isLoading={true}*/ />

        <button onClick={ () => this.setState({ selected: 'Home' }) }>
          Home
        </button>
        <button onClick={ () => this.setState({ selected: 'Foo' }) }>
          Foo
        </button>
        <button onClick={ () => this.setState({ selected: 'Bar' }) }>
          Bar
        </button>
      </div>
    )
  }
}
