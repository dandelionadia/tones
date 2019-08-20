import React from 'react'
import SongList from '../../../molecules/SongList'

function Content({ data }) {
  return (
    <div>
      <SongList data={data} />
    </div>
  )
}

export default Content
