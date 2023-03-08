import { getServerSideSitemapLegacy } from "next-sitemap"
import { getDocuments } from "../../firebase/firestore"

const BASE_URL = "https://www.frontendpro.dev"

export const getServerSideProps = async (ctx) => {
  const solutions = await getDocuments("solutions", ["completed", "==", true])

  const solutionsPath = solutions.map((solution) => ({
    loc: `${BASE_URL}/solution/${solution.id}`,
    lastmod: new Date().toISOString(),
  }))

  return getServerSideSitemapLegacy(ctx, solutionsPath)
}

export default function Sitemap() {}
