import { CURRENT_USER } from '../current_user'
import { useState } from 'react'

const SaveButton = ({recipe}) => {

    const recipeSaved = () => {
        
    }

    const current_user = CURRENT_USER
    const [saved, setSaved] = useState(recipeSaved)



    return <button onClick={() => console.log}>Save</button>
}

export default SaveButton