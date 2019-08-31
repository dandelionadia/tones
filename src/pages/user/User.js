import React from 'react'
import Heading from '../../atoms/Heading'
import Button from '../../atoms/Button'

const User = () => {
  return (
    <div>
      <img
        src="https://imgix.ranker.com/user_node_img/50058/1001158933/original/momo-is-an-incarnation-of-aye-aye-the-lemur-spirit-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
        alt="image"
      ></img>
      <Heading>User</Heading>
      <Button>btm</Button>
      <ul>
        <li>foo</li>
      </ul>
    </div>
  )
}

export default User
