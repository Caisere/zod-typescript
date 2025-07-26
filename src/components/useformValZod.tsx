import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the schema for user details using zod
// This schema will validate the form inputs
const UserDetailsSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.email(),
    password: z.string().min(8, 'Password must be 8 or more character')
})

// infer the type of the form input from the zod schema
type User = z.infer<typeof UserDetailsSchema>



function UseformValZod() {
    // managing the form state using useform hook 
    const {
        register, 
        handleSubmit, 
        formState: { 
            errors, 
            isSubmitting 
        }, 
        reset, 
        setError
    } = useForm<User>({
        defaultValues: {
            firstName: 'Omoshola',
            lastName: 'E'
        },
        // connecting the zod schema and the useform hook
        resolver: zodResolver(UserDetailsSchema)
    })

    async function onHandleSubmit(data: User): Promise<void> {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            reset();
            console.log('Form Successfully Submitted', data)
        } catch {
            setError('root', {
                message: `Something went wrong, please try again later`
            })
        }
    }
    
    return (
        // managing the form and validating the form inputs using zod for cleaner code.
        <>
            <h1>Use Form Validation with Zod</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        {...register('firstName')} 
                        autoComplete='true' 
                    />
                    {errors?.firstName && <p style={{color: 'red'}}>{errors?.firstName?.message}</p>}
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        {...register('lastName')} 
                        autoComplete="true"
                    />
                    {errors?.lastName && <p style={{color: 'red'}}>{errors?.lastName?.message}</p>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        {...register('email')} 
                    />
                    {errors?.email && <p style={{color: 'red'}}>{errors?.email?.message}</p>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        {...register('password')}
                    />
                    {errors?.password && <p style={{color: 'red'}}>{errors?.password?.message}</p>}
                </div>

                <button disabled={isSubmitting} type="submit">{isSubmitting ? 'Submitting' : "Submit"}</button>
            </form>
        </>
    )
}


export default UseformValZod