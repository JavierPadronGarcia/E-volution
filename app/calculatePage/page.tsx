import BackArrow from "@/components/backArrow";
import YellowButton from "@/components/YellowButton";
import { SubmitButton } from "../login/submit-button";
import { Poppins } from "next/font/google";


const CalculatePage = () => {
    return (
        <div className="h-full font-poppins">

{/**content bg- p1 m0 and h-full */}
            <div className="block"><BackArrow/></div>
                <div className=" flex flex-col items-center justify-center gap-3">
                    <p className="mt-[140px]"> Your renewable energies</p>
                    <div className="bg-notWhite w-[148px] h-[148px] rounded-xl"></div>
                    </div>
                        <div className="justify-center items-center m-14"> 
                            <p className="font-bold text-[20px] text-center pt-5">Calculate your renewable energy</p>
                        </div>


            
        {/*here's the input for Total energy consumption*/}
            <div className="justify-center items-center ">

            <form className="animate-in flex-1 flex flex-col w-full justify-center items-center  text-foreground gap-9">
                <label className="text-md w-[259px]" htmlFor="text">
                <input className="rounded-xl px-4 py-2 bg-inherit border-2 border-darkGreen w-full"
                    name="energy consumption"
                    placeholder="Total energy consumption"
                    required/></label>

                {/* Here's the input for Renewable energy*/ }
                <label className="text-md w-[259px]" htmlFor="text">
                <input
                    className="rounded-xl px-4 py-2 bg-inherit border-2  border-darkGreen  w-full"
                    name="renewable"
                    placeholder="Renewable energy"
                    required/>
                    </label>

                <SubmitButton 
                    pendingText="Calculating...">
                    Calculate
                </SubmitButton>
            </form>
          </div>
          </div>
      
    );
};

export default CalculatePage;