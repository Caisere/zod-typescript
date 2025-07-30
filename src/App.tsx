import UseformValZod from "./components/useformValZod";
import UseFormValidation from "./components/useformVal";
import Motion from "./components/motion";
import { existingUser } from "./constant/variables";



function App() {
    return (
        <>
            <div className="w-full h-screen flex flex-row items-center justify-center gap-4 bg-gray-100">
                <div className="w-[25%]">
                    <UseformValZod 
                        user={existingUser} 
                    />
                </div>
                <div className="w-[25%]">
                    <UseFormValidation />
                </div>
            </div>

            <div className="mx-auto flex justify-center mb-12">
                <Motion />
            </div>
        </>
    );
}

export default App;
