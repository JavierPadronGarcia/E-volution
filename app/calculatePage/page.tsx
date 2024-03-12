"use client"
import React, { useState } from "react";
import BackArrow from "@/components/backArrow";
import YellowButton from "@/components/YellowButton";
import { SubmitButton } from "../login/submit-button";
import { Poppins } from "next/font/google";


const CalculatePage = () => {

    const [percentage, setPercentage] = useState<number | null>(null);
    const [totalEnergy, setTotalEnergy] = useState<number | undefined>();
    const [renewableEnergy, setRenewableEnergy] = useState<number | undefined>();

    const calculatePercentage = () => {
        if (totalEnergy && renewableEnergy && totalEnergy !== 0) {
            const finalEnergy = (renewableEnergy / totalEnergy) * 100;
            setPercentage(finalEnergy);
        }
    };

    const handleCalculate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        calculatePercentage();
    };

    return (
        <div className="h-full font-poppins">
            <div className="block"><BackArrow /></div>
            <div className="flex flex-col items-center justify-center gap-3">
                <p className="mt-[140px]"> Your renewable energies</p>
                <div className="bg-notWhite w-[148px] h-[148px] rounded-xl flex justify-center items-center">{percentage !== null ? `${percentage.toFixed(2)}%` : ""}</div>
            </div>
            <div className="justify-center items-center m-14">
                <p className="font-bold text-[20px] text-center pt-5">Calculate your renewable energy</p>
            </div>
            <div className="justify-center items-center ">
                <form onSubmit={handleCalculate} className="animate-in flex-1 flex flex-col w-full justify-center items-center text-foreground gap-9">
                    <label className="text-md w-[259px]" htmlFor="totalEnergy">
                        Total energy consumption
                        <input
                            id="totalEnergy"
                            className="rounded-xl px-4 py-2 bg-inherit border-2 border-darkGreen w-full"
                            type="number"
                            value={totalEnergy}
                            onChange={(e) => setTotalEnergy(parseInt(e.target.value))}
                            placeholder="Enter total energy consumption"
                            required
                        />
                    </label>
                    <label className="text-md w-[259px]" htmlFor="renewableEnergy">
                        Renewable energy
                        <input
                            id="renewableEnergy"
                            className="rounded-xl px-4 py-2 bg-inherit border-2 border-darkGreen w-full"
                            type="number"
                            value={renewableEnergy}
                            onChange={(e) => setRenewableEnergy(parseInt(e.target.value))}
                            placeholder="Enter renewable energy"
                            required
                        />
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