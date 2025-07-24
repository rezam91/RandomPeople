import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext"
import { useNavigate } from "react-router-dom"

const Random = () => {
    const navigate = useNavigate()
    const [available, setAvailable] = useState(false)
    const [neededNumber,setNeededNumber] = useState(0)
    const [selectedPersons, setSelectedPersons] = useState([])
    const {list} = useContext(UserContext)
    const checkMax = (e) => {
        if (e.target.value < list.length && e.target.value>0) {
            setAvailable(true)
            setNeededNumber(e.target.value)
        } else {
            setAvailable(false)
        }
    }
    const numbers = [];
    const selectPerson = () => {
        if (available) {
            while (numbers.length < neededNumber) {
                const rand = Math.floor(Math.random() * list.length);
                if (!numbers.includes(rand)) {
                    numbers.push(rand);
                }
            }
        }
        setSelectedPersons(
            list.filter((_, index) => numbers.includes(index))
        )
    }
    useEffect(() => {
        console.log(selectedPersons)
    },[selectedPersons])
    return (
        <>
            <div>There are {list.length} people in the list</div>
            <div>So you can Enter maximum: {list.length-1}</div>
            <input onChange={checkMax} type="number" />
            <button disabled={!available} onClick={selectPerson}>Choose</button>
            <div>
                <button onClick={() => navigate('/select')}>Add More!</button>
                <button onClick={() => navigate('/')}>Back</button>
            </div>
            {!selectedPersons.length ? <div>Pick how many Person you Need</div> : (
                <ul>
                    {selectedPersons.map((person,index) => (
                        <li key={index}>{person.fName}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Random