export const getGitHubUserData = async (githubIdOrLogin) => {
  return fetch(`${process.env.REACT_APP_GITHUB_API_URL}${githubIdOrLogin}`, {
    headers: { Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) {
      const err = new Error()
      err.response = res
      if (res.status === 403 && res.headers.get("X-RateLimit-Remaining") === "0") {
        const resetsAtMS = Number(`${res.headers.get("X-RateLimit-Reset")}000`)
        err.message = `Rate limit exceeded, try again in ${Math.ceil(
          (resetsAtMS - Date.now()) / 60000
        )}m`
        err.code = "github/rate-limit-exceeded"
        err.resetsAt = resetsAtMS
      } else if (res.status === 404) {
        err.message = `Could not find user data for github:${githubIdOrLogin}`
        err.code = "github/not-found"
      } else {
        err.message = `Unexpected status code: ${res.status}`
        err.code = "github/unknown"
      }
      return Promise.reject(err)
    }
    return res.json()
  })
}
