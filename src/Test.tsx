import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

function Test() {
    const defaultTitle = 'This is a test page'
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        fetch('https://dummyjson.com/users/1')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const title = user ? `${user.firstName} ${user.lastName}` : defaultTitle
    const image = user?.image
    const description = user?.email

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                {user && <meta property="og:image" content={image} />}
                {user && <meta property="og:description" content={description} />}
            </Helmet>
            <h1>{title}</h1>
            {user && <>
                <p>{description}</p>
                <img src={image} />
            </>}
        </>
    )
}

export default Test