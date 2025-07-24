import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"

const Home = () => {
    const navigate = useNavigate()
    const {list} = useContext(UserContext)
    return (
        <>
            {!list.length ? <div className="text-center text-2xl">List is empty - Add People</div> : (
                <ol className="flex justify-evenly">
                    {list.map((item, index) => (
                        <li className="rounded-[10px] text-center p-[30px] bg-amber-300" key={index}>{item.fName+ " "}<hr className="border-amber-100"/>{item.lName}</li>
                    ))}
                </ol>
            )}
            <div className="ml-auto mr-auto w-2/3 mt-[20px] flex gap-[20px] justify-center">
                <button className="bg-blue-500 text-lg text-[#FFFFFF] pl-[10px] pr-[10px] pt-[20px] pb-[20px] rounded-[10px] flex-1 hover:bg-blue-600 hover:cursor-pointer" onClick={() => navigate('select')}>Add People To List!</button>
                <button disabled={list.length<2 ? true : false} className={`bg-blue-500 text-lg text-[#FFFFFF] pl-[10px] pr-[10px] pt-[20px] pb-[20px] rounded-[10px] flex-1 hover:bg-blue-600 ${list.length<2 ? "hover: cursor-not-allowed" :"hover: cursor-pointer"}`} onClick={() => navigate('random')}>Select Randomly</button>
            </div>
        </>
    )
}

export default Home