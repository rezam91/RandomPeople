import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/userContext"

const Select = () => {
    const { list, dispatch } = useContext(UserContext)
    const schema = yup.object({
        firstName: yup.string().required().min(3),
        lastName: yup.string().required().min(3)
    })
    const {handleSubmit, register, formState, reset} = useForm({
        resolver: yupResolver(schema)
    }
    )
    const navigate = useNavigate()
    const submitForm = (data) => {
        dispatch({
            type: 'add-person',
            value: {
                fName: data.firstName,
                lName: data.lastName
            }
        })
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div className="flex flex-col gap-[10px] bg-gray-50 rounded-[10px] ml-auto mr-auto p-[10px] w-2/3 border-2">
                <div className="flex justify-between">
                    <label >First Name:</label>
                    <input className="text-gray-700 border-1 rounded-[10px] pl-[4px]" type="text" placeholder="Enter your First Name" {...register('firstName')} />
                </div>
                <div className="text-red-500 text-sm">{formState.errors.firstName && formState.errors.firstName.message}</div>
                <div className="flex justify-between">
                    <label >Last Name:</label>
                    <input className="text-gray-700 border-1 rounded-[10px] pl-[4px]" type="text" placeholder="Enter your Last Name" {...register('lastName')} />
                </div>
                <div className="text-red-500 text-sm">{formState.errors.lastName && formState.errors.lastName.message}</div>
                <div className="flex gap-[20px] mt-[20px]">
                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-md shadow transition duration-200" type="submit">Add</button>
                    <button className="flex-1 bg-blue-500 hover:bg-blue-600  hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-md shadow transition duration-200" onClick={() => navigate('/')}>Back</button>
                </div>
            </div>
        </form>
    )
}

export default Select