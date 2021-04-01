import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import EditForm from '../../../Components/EditForm'

const Recipe = () => {
    const router = useRouter()
    const { id } = router.query
    console.log(id)
    const editId = parseInt(id)
    console.log(router)
    console.log(editId)

    return <>
        Recipe: {id}
           {recipe.length ? <EditForm key={editId} id={editId}/> : 'nothing'}
        </>
}

export default Recipe