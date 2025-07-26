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
        <>
            <h1>Use Form Validation</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
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

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
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

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
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

                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
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

                <button disabled={isSubmitting} type="submit">{isSubmitting ? 'Submitting details' : "Submit"}</button>
            </form>
        </>
    )
}

export default UseFormValidation