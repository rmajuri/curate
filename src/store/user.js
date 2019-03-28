const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

const defaultUser = {}



export const user = (state = defaultUser, action) => {
  const {type, user} = action
  switch (type) {
    case GET_USER:
      return user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
