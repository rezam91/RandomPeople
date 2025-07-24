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
        <div className="ml-[10px] mr-[10px] p-[10px] border-2 bg-gray-50 rounded-[10px]">
            <div className="text-lg">There are <strong>{list.length} people</strong> in the list.</div>
            <div className="mb-[10px]">So you can Enter maximum: <strong>{list.length-1} person</strong></div>
            <hr />
            <div className="mt-[10px] flex gap-[20px]">
                <input className="w-[60px] text-gray-700 border-1 rounded-[10px] pl-[4px] pr-[4px]" onChange={checkMax} type="number" />
                <button className={`bg-red-500 hover:bg-red-700 text-white font-semibold ${!available ? "hover:cursor-not-allowed" : "hover:cursor-pointer" } p-[5px] rounded-[10px]`} disabled={!available} onClick={selectPerson}>Choose</button>
            </div>
            <div className="flex gap-[60px] mt-[20px]">
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-md shadow transition duration-200" onClick={() => navigate('/select')}>Add More!</button>
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-md shadow transition duration-200" onClick={() => navigate('/')}>Back</button>
            </div>
            {!selectedPersons.length ? <div className="mt-[10px]"><strong>Pick how many Person you Need</strong></div> : (
                <ul className="flex justify-evenly mt-[20px]">
                    {selectedPersons.map((person,index) => (
                        <li className="p-[10px] rounded-[10px] bg-amber-200" key={index}>{person.fName}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Random