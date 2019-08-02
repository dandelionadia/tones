import React from 'react'
import Albums from '../../../molecules/Albums'

const foo = [
  {
    src: 'https://satyr.io/400x400',
    text: 'foo',
    subText: 'subFoo'
  },
  {
    src: 'https://satyr.io/400x400',
    text: 'foo',
    subText: 'subFoo'
  },
  {
    src: 'https://satyr.io/400x400',
    text: 'foo',
    subText: 'subFoo'
  },
  {
    src: 'https://satyr.io/400x400',
    text: 'foo',
    subText: 'subFoo'
  },
  {
    src: 'https://satyr.io/400x400',
    text: 'foo',
    subText: 'subFoo'
  },
  {
    src: 'https://satyr.io/400x400',
    text: 'foo',
    subText: 'subFoo'
  },
  {
    src: 'https://satyr.io/400x400',
    text: 'foo',
    subText: 'subFoo'
  },
  {
    src: 'https://satyr.io/400x400',
    text: 'foo',
    subText: 'subFoo'
  },
  {
    src: 'https://satyr.io/400x400',
    text: 'foo',
    subText: 'subFoo'
  }
]

class Overview extends React.Component {
  render() {
    return (
      <div>
        <p>Overview</p>
        <Albums data={foo} />
      </div>
    )
  }
}

export { Overview }
