import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/userContext"

const Select = () => {
    const { list, dispatch } = useContext(UserContext)
    useEffect(() => {
        console.log(list)
    },[list])
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
            <div>
                <div>
                    <label >First Name:</label>
                    <input type="text" placeholder="Enter your First Name" {...register('firstName')} />
                </div>
                <div>{formState.errors.firstName && formState.errors.firstName.message}</div>
                <div>
                    <label >Last Name:</label>
                    <input type="text" placeholder="Enter your Last Name" {...register('lastName')} />
                </div>
                <div>{formState.errors.lastName && formState.errors.lastName.message}</div>
                <button type="submit">Add</button>
                <button onClick={() => navigate('/')}>Back</button>
            </div>
        </form>
    )
}

export default Select