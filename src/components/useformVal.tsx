import { useForm } from "react-hook-form"

type FormFeilds = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const UseFormValidation= () => {
    const {
        register, 
        handleSubmit, 
        formState: {
            errors, 
            isSubmitting
        },
        reset,  
    } = useForm<FormFeilds>({
        defaultValues: {
            firstName: 'Anonymous',
            lastName: 'User',
            email: '',
            password: ''
        }
    })

    async function handleFormSubmit(data: FormFeilds): Promise<void> {
        await new Promise((rel) => setTimeout(rel, 2000));
        reset();
        console.log('Form Submitted Successfully', data)
    }

    return (
        <div className="flex flex-col px-12 py-8 gap-4 shadow-xl rounded-lg">
            <h1 className="text-center text-violet-900 font-semibold">Use Form Validation</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-2">
                <div className="inputCon">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        className='placeholder:text-stone-100 text-sm' 
                        type="text" 
                        id="firstname" 
                        {...register('firstName', {
                            required: 'First Name is required',
                            minLength: {
                                value: 4,
                                message: 'First Name must be at least 4 characters long'
                            }
                        })} 
                        autoComplete='true' 
                    />
                    {errors?.firstName && <p style={{color: 'purple'}}>{errors?.firstName?.message}</p>}
                </div>

                <div className="inputCon">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        className='placeholder:text-stone-100 text-sm' 
                        type="text" 
                        id="lastname" 
                        {...register('lastName', {
                            required: 'Last Name is required',
                            minLength: {
                                value: 4,
                                message: 'Last Name must be at least 4 characters long'
                            }
                        })} 
                        autoComplete='true' 
                    />
                    {errors?.lastName && <p style={{color: 'purple'}}>{errors?.lastName?.message}</p>}
                </div>

                <div className="inputCon">
                    <label htmlFor="email-add">Email</label>
                    <input
                        className='placeholder:text-stone-100 text-sm' 
                        type="email" 
                        id="email-add" 
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address'
                            }
                        })} 
                        autoComplete='true' 
                    />
                    {errors?.email && <p style={{color: 'purple'}}>{errors?.email?.message}</p>}
                </div>

                <div className="inputCon">
                    <label htmlFor="pass-word">Password</label>
                    <input
                        className='placeholder:text-stone-100 text-sm' 
                        type="password" 
                        id="pass-word" 
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long'
                            }
                        })} 
                        autoComplete='true' 
                    />
                    {errors?.password && <p style={{color: 'purple'}}>{errors?.password?.message}</p>}
                </div>

                <button className="bg-violet-500 text-stone-200 py-2 rounded-sm hover:bg-violet-700 transition-all duration-300 mt-2" disabled={isSubmitting} type="submit">{isSubmitting ? 'Submitting details' : "Submit"}</button>
            </form>
        </div>
    )
}

export default UseFormValidation