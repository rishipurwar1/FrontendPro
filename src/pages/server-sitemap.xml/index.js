import { getServerSideSitemapLegacy } from "next-sitemap"
import { getDocuments } from "../../firebase/firestore"
import { createSlug } from "../../utils/shared"

const BASE_URL = "https://www.frontendpro.dev"

export const getServerSideProps = async (ctx) => {
  const solutions = await getDocuments("solutions", ["completed", "==", true])

  const solutionsPath = solutions.map((solution) => ({
    loc: `${BASE_URL}/frontend-coding-challenges/${createSlug(
      solution.title,
      solution.challengeID
    )}/solutions/${solution.id}`,
    lastmod: new Date().toISOString(),
  }))

  return getServerSideSitemapLegacy(ctx, solutionsPath)
}

export default function Sitemap() {}
