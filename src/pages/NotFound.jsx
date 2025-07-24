import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>You Are Redirected to Worng Page!</div>
            <button onClick={() => navigate('/')}>Home</button>
        </>
    )
}

export default NotFound