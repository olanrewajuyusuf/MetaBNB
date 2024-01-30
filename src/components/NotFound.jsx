import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        }, 1000)
    }, [navigate])
  return (
    <div>NotFound</div>
  )
}

export default NotFound