import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


const UserDetailsSchema = z.object({
    firstName: z.string(),
    lastName: z.string('required'),
    email: z.email('Invalid email').toLowerCase(),
    password: z.string().min(8)
})

type User = z.infer<typeof UserDetailsSchema>


function App() {
    const {register, handleSubmit, formState: {errors}} = useForm<User>({
        resolver: zodResolver(UserDetailsSchema)
    })
    

    function onHandleSubmit(data: User) {
        console.log(data)
    }

    function onError() {
        // console.log(error)
    }

    return (
        <form onSubmit={handleSubmit(onHandleSubmit, onError)}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" {...register('firstName', {required: 'First Name is required'})} />
                {errors?.firstName && <p>{errors?.firstName?.message}</p>}
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" {...register('lastName', {required: 'Last Name is required'})}/>
                {errors?.lastName && <p>{errors?.lastName?.message}</p>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register('email')} />
                {errors?.email && <p style={{color: 'red'}}>{errors?.email?.message}</p>}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register('password')}/>
                {errors?.password && <p style={{color: 'red'}}>{errors?.password?.message}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default App;
