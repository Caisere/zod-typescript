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
        <div className="flex flex-col px-12 py-8 gap-4 shadow-xl rounded-lg">
            <h1 className="text-center text-violet-900 font-semibold">Use Form Validation with Zod</h1>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="inputCon">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className='placeholder:text-stone-100 text-sm' 
                        type="text" 
                        id="firstName" 
                        {...register('firstName')} 
                        autoComplete='true' 
                    />
                    {errors?.firstName && <p style={{color: 'red'}}>{errors?.firstName?.message}</p>}
                </div>

                <div className="inputCon">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className='placeholder:text-stone-100 text-sm' 
                        type="text" 
                        id="lastName" 
                        {...register('lastName')} 
                        autoComplete="true"
                    />
                    {errors?.lastName && <p style={{color: 'red'}}>{errors?.lastName?.message}</p>}
                </div>

                <div className="inputCon">
                    <label htmlFor="email">Email</label>
                    <input
                        className='placeholder:text-stone-100 text-sm' 
                        type="email" 
                        id="email" 
                        {...register('email')} 
                    />
                    {errors?.email && <p style={{color: 'red'}}>{errors?.email?.message}</p>}
                </div>

                <div className="inputCon">
                    <label htmlFor="password">Password</label>
                    <input
                        className='placeholder:text-stone-100 text-sm' 
                        type="password" 
                        id="password" 
                        {...register('password')}
                    />
                    {errors?.password && <p style={{color: 'red'}}>{errors?.password?.message}</p>}
                </div>

                <button className="bg-violet-500 text-stone-200 py-2 rounded-sm hover:bg-violet-700 transition-all duration-300 mt-2" disabled={isSubmitting} type="submit">{isSubmitting ? 'Submitting' : "Submit"}</button>
            </form>
        </div>
    )
}


export default UseformValZod