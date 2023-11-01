import React, { FC } from 'react'
import BlogScreen from './BlogScreen'
import { getAllBillets } from '@/controllers/billets'

const BlogPage: FC = async() => {
  const response = await getAllBillets()
  const { data, message, statusResponse } = response

  return (
    <div>
      {data && <BlogScreen billets={data}/>}
    </div>
  )
}

export default BlogPage