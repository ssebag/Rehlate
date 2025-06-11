import React from 'react'

export default function Title({titleParagraph, titleMain}) {
  return (
    <div className='main-title'>
      <h4 className='text-secondary'>
        {titleParagraph}
      </h4>
      <h2>
        {titleMain}
      </h2>
    </div>
  )
}
