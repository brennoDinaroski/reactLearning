import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("Name is required!"),
        email: yup.string().email().required("Email is required"),
        age: yup.number().positive().integer().min(18).required("Age is required"),
        password: yup.string().min(4).max(20).required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required("Confirm the password is required"),
    });

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });  

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name" {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input  type="text" placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age" {...register("age")} />
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password" {...register("password")}></input>
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm password" {...register("confirmPassword")}></input>
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit"></input>
        </form>
    )
}