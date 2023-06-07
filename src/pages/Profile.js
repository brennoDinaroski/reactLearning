import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react"
import { AppContext } from "../App"

export const Profile = () => {
    const {username} = useContext(AppContext)
    const {setUsername} = useContext(AppContext)
    return(
    <div>
        PROFILE username: {username}
        <ChangeProfile />
    </div>
    )
}