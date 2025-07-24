import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"

const Home = () => {
    const navigate = useNavigate()
    const {list} = useContext(UserContext)
    return (
        <>
            {!list.length ? <div>No-one Added Yet !</div> : (
                <ol>
                    {list.map((item, index) => (
                        <li key={index}>{item.fName+ " "},{item.lName}</li>
                    ))}
                </ol>
            )}
            <div>

                <button onClick={() => navigate('select')}>Add People To List!</button>
                <button onClick={() => navigate('random')}>Select Randomly</button>
            </div>
        </>
    )
}

export default Home