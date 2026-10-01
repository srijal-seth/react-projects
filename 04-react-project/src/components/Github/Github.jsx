import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/srijal-seth")
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])

    return (
        <>
            <div className='text-center bg-gray-400 text-white text-4xl p-4' >
                <img width={200} src={data.avatar_url} alt="Github Profile" />
                Github Followers: {data.followers}
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async function (){
    const response = await fetch("https://api.github.com/users/srijal-seth")
    return response.json()
}