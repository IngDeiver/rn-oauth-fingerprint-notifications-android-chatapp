import React from 'react'
import { useDispatch } from 'react-redux'
import ContentDrawerTemplate from './contentDrawer.template'
import { logout } from '../../redux/reducers/auth.reducer'
import { FBLogout, GoogleLogout } from '../../services/auth.service'

const ContentDrawerContainer = (props) =>  {

    const dispatch = useDispatch()

    const exit = (method) => {
        if(method === "FB"){
            FBLogout()
            .then(_ => dispatch(logout()))
            .catch(err => console.log("Logout error:", err))
        }else if(method === "GOOGLE"){
            GoogleLogout()
            .then(_ => dispatch(logout()))
            .catch(err => console.log("Logout error:", err))
        }else { // FINGER_PRINT
            dispatch(logout())
        }

    }

    return <ContentDrawerTemplate {...props} logout={exit} />
}

export default ContentDrawerContainer