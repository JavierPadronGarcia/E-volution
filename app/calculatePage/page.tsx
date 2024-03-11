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
            <div> 
                <p className="font-bold text-[20px]">Calculate your renewable energy</p>
            </div>
            <div className="justify-center flex pt-[150px]">
     
<div className="justify-center items-center">
{/*here's the input for Total energy consumption*/}
            <form className="animate-in flex-1 flex flex-col w-full justify-center  text-foreground">
            <label className="text-md" htmlFor="text"></label>
          <input
            className="rounded-xl px-4 py-2 bg-inherit border-2 border-darkGreen mb-8"
            name="energy consumption"
            placeholder="Total energy consumption"
            required/></form>

          {/* Here's the input for Renewable energy
          prufa komment*/ }
          <form className="animate-in flex-1 flex flex-col w-full justify-center  text-foreground">
            <label className="text-md" htmlFor="text"></label>
          <input
            className="rounded-xl px-4 py-2 bg-inherit border-2 border-darkGreen mb-8 w-[259px]"
            name="renewable"
            placeholder="Renewable energy"
            required/>

            <SubmitButton 
            pendingText="Calculating...">
              Calculate
            </SubmitButton>
            </form>
          </div>
          </div>
        </div>
    );
};

export default CalculatePage;