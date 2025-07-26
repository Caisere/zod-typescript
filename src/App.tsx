import UseformValZod from "./components/useformValZod";
import UseFormValidation from "./components/useformVal";

function App() {
    return (
        <div className="w-full h-screen flex flex-row items-center justify-center gap-4 bg-gray-100">
            <div className="w-[25%]">
                <UseformValZod />
            </div>
            <div className="w-[25%]">
                <UseFormValidation />
            </div>
        </div>
    );
}

export default App;
