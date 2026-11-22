import React from 'react'
import { Container, PostForm } from '../components'
import { useNavigate, useParams } from 'react-router'
import { useState, useEffect } from 'react'
import appWriteService from '../appwrite/config'


function EditPost() {

    const [Post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            appWriteService.getPost(slug).then((post) => {
                setPost(post)
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])


  return Post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={Post} />
        </Container>
    </div>
  ) : null
}

export default EditPost