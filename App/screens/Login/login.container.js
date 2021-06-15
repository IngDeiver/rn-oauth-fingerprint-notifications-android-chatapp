import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import LoginTemplate from './login.template'
import { login } from '../../redux/reducers/auth.reducer'

const LoginContainer = () => {
    const dispatch = useDispatch()

    const onLogin = useCallback((userData) => {
        dispatch(login(userData))
    })

    return (<LoginTemplate onLogin={onLogin}/>)
}

export default LoginContainer