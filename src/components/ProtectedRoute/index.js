import {useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    
    useEffect(() => {
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken === undefined) {
            return navigate('/login')
        }
    }, [navigate])

    return <>{children}</>
}
export default ProtectedRoute