import { useUserContext } from './UserContext/state'

export const CURRENT_USER = () => {
    const {user} = useUserContext();
    return user
}

