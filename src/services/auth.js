import { useSelector } from "react-redux";

export function isAuthenticated() {
  const user  = useSelector(state => state.user.user)

  return user? true :false
}
