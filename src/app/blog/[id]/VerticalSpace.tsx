import React, { FC } from 'react'

type VerticalSpaceProps = {
  size: number
}

const VerticalSpace: FC<VerticalSpaceProps> = ({ size }) => {
  return (
    <div style={{height: `${size}px`, backgroundColor: 'transparent'}} />
  )
}

export default VerticalSpace