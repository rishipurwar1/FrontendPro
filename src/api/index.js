const API_BASE_URL = "https://api.stackexchange.com/2.3/tags"

const fetchSkills = async (value) => {
  const res = await fetch(
    `${API_BASE_URL}?page=1&pagesize=6&order=desc&sort=popular&inname=${value}&site=stackoverflow`
  )
  const data = await res.json()
  return data
}

export default fetchSkills
