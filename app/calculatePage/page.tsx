import BackArrow from "@/components/backArrow";


const CalculatePage = () => {
    return (
        <div>
            <div className="block"><BackArrow/></div>
            <div className=" flex flex-col items-center justify-center gap-3">
                <p className="mt-[140px]"> Your renewable energies</p>
                <div className="bg-notWhite w-[148px] h-[148px] rounded-xl"></div>
            </div>
            <div> 
                <p className="">Calculate your renewable energy</p>
            </div>
        </div>
    )
}

export default CalculatePage;