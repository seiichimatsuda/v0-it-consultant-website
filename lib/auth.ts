import { getUser as getAuth0User } from "./auth0"

export async function getUser() {
  try {
    return await getAuth0User()
  } catch {
    return null
  }
}
