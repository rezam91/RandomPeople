import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <button onClick={() => navigate('select')}>Add People To List!</button>
        </>
    )
}

export default Home