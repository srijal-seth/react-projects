import React from 'react'
import { Container, PostCard } from '../components'
import { useState, useEffect } from 'react'
import appWriteService from '../appwrite/config'

function Home() {
    const [Posts, setPosts] = useState([])

    useEffect(() => {
        appWriteService.getPosts([]).then((posts) => {
            if(posts){
                setPosts(posts.rows)   
            }
            
        })
    }, [])


    if(Posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='w-full p-2'>
                            <h2>
                                Login to see posts
                            </h2>
                        </div>
                    </div>
                </Container>
            </div>
        )
    } else {
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
}

export default Home