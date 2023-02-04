import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"

const routes = [
  {
    path: "/",
    title: "Become a Pro in Frontend Development with FrontendPro.dev",
  },
  { path: "/challenges", title: "FrontendPro - Challenges" },
  { path: "/solutions", title: "FrontendPro - Solutions" },
  { path: "/resources", title: "FrontendPro - Resources" },
  { path: "/roadmaps", title: "FrontendPro - Roadmaps" },
  { path: "/mysolutions", title: "FrontendPro - My Solutions" },
]

const Meta = () => {
  const [title, setTitle] = useState(
    "Become a Pro in Frontend Development with FrontendPro.dev"
  )
  const currentPath = useLocation().pathname

  useEffect(() => {
    routes.some((route) => route.path === currentPath && setTitle(route.title))
  }, [currentPath, routes])

  return (
    <Helmet>
      <title>{title}</title>
      <meta content="FrontendPro" property="og:site_name" />
      <meta content="image/png" property="og:image:type" />
      <meta content="1200" property="og:image:width" />
      <meta content="628" property="og:image:height" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta
        content="Code your way to success by solving our real-world Frontend Challenges and Join a community of like-minded developers to take your skills to the next level 🚀."
        data-react-helmet="true"
        name="description"
      />
      <meta
        content="Code your way to success by solving our real-world Frontend Challenges and Join a community of like-minded developers to take your skills to the next level 🚀."
        data-react-helmet="true"
        property="og:description"
      />
      <meta content={title} data-react-helmet="true" property="og:title" />
      <meta
        content="https://res.cloudinary.com/di5hmgowi/image/upload/v1675420804/codingspace_assets/frontendpro-og-image.png"
        data-react-helmet="true"
        property="og:image"
      />
      <meta
        content="Become a Pro in Frontend Development with FrontendPro.dev"
        data-react-helmet="true"
        property="og:image:alt"
      />
      <meta
        content="https://www.frontendpro.dev"
        data-react-helmet="true"
        property="og:url"
      />
      <meta content={title} data-react-helmet="true" name="twitter:title" />
      <meta
        content="Code your way to success by solving our real-world Frontend Challenges and Join a community of like-minded developers to take your skills to the next level 🚀."
        data-react-helmet="true"
        name="twitter:description"
      />
      <meta
        content="https://res.cloudinary.com/di5hmgowi/image/upload/v1675420804/codingspace_assets/frontendpro-og-image.png"
        data-react-helmet="true"
        name="twitter:image"
      />
      <meta property="twitter:domain" content="https://www.frontendpro.dev" />
      <meta property="twitter:url" content="https://www.frontendpro.dev" />
      <meta
        name="twitter:image:alt"
        content="Become a Pro in Frontend Development with FrontendPro.dev"
      />
    </Helmet>
  )
}

export default Meta
