import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"

const Meta = ({ routes }) => {
  const [title, setTitle] = useState("")
  const currentPath = useLocation().pathname

  useEffect(() => {
    routes.some((route) => route.path === currentPath && setTitle(route.title))
  }, [currentPath, routes])

  return (
    <Helmet>
      <title>{title}</title>
      <meta content="website" property="og:type" />
      <meta content="CodingSpace" property="og:site_name" />
      <meta content="image/png" property="og:image:type" />
      <meta content="1200" property="og:image:width" />
      <meta content="628" property="og:image:height" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta
        content="CodingSpace is a platform that offers real-world web development challenges to help you hone your web dev skills and become an expert in web development."
        data-react-helmet="true"
        name="description"
      />
      <meta
        content="CodingSpace is a platform that offers real-world web development challenges to help you hone your web dev skills and become an expert in web development."
        data-react-helmet="true"
        property="og:description"
      />
      <meta content={title} data-react-helmet="true" property="og:title" />
      <meta
        content="https://i.imgur.com/chgN5iK.png"
        data-react-helmet="true"
        property="og:image"
      />
      <meta
        content="Learn Web Development by Building Real World Projects"
        data-react-helmet="true"
        property="og:image:alt"
      />
      <meta
        content="https://coding-space.vercel.app"
        data-react-helmet="true"
        property="og:url"
      />
      <meta content={title} data-react-helmet="true" name="twitter:title" />
      <meta
        content="CodingSpace is a platform that offers real-world web development challenges to help you hone your web dev skills and become an expert in web development."
        data-react-helmet="true"
        name="twitter:description"
      />
      <meta
        content="https://i.imgur.com/chgN5iK.png"
        data-react-helmet="true"
        name="twitter:image"
      />
      <meta
        name="twitter:site"
        content="@codingspace30
"
      />
      <meta property="twitter:domain" content="coding-space.vercel.app" />
      <meta property="twitter:url" content="https://coding-space.vercel.app" />
      <meta
        name="twitter:image:alt"
        content="Learn Web Development by Building Real World Projects"
      />
    </Helmet>
  )
}

export default Meta
