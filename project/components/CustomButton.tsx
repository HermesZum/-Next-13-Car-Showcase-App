"use client";
import Image from 'next/image';
import {MouseEventHandler} from "react";

interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    handleClick: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit",
    textStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean
}

export const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
    return (
        <>
            <button
                disabled={false}
                type={btnType || "button"}
                className={`custom-btn ${containerStyles}`}
                onClick={handleClick}
            >
                <span className={`flex-1 ${textStyles}`}>
                    {title}
                </span>
                {rightIcon && (
                    <div className="relative w-6 h-6">
                        <Image src={rightIcon} alt="right icon" width={20} height={20} />
                    </div>
                )}
            </button>
        </>
    );
};
