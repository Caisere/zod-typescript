import UseformValZod from "./components/useformValZod";
import UseFormValidation from "./components/useformVal";
import { existingUser } from "./constant/variables";



function App() {
    return (
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
    );
}

export default App;
