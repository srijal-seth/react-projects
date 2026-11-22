import React from 'react'
import { Container, PostCard } from '../components'
import { useState, useEffect } from 'react'
import appWriteService from '../appwrite/config'
import { useNavigate } from 'react-router'

function AllPost() {
    const [Posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        appWriteService.getPosts([]).then((posts) => {
            if(posts){
                setPosts(posts.rows)   
            }
        }) 
    }, [])
  return (
    <div className="w-full py-8">
        <Container>
            <div className='flex flex-wrap'>
                {Posts.map((post) => (
                    <div key={post.$id} className='w-1/4 p-2'>
                        <PostCard {...post} />
                    </div>
                ))}

            </div>
        </Container>
    </div>
  )
}

export default AllPost