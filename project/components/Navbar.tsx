"use client";
import Link from "next/link";
import Image from "next/image";
import {CustomButton} from "@/components/CustomButton";

export const Navbar = () => {
    return (
        <>
            <header className="w-full absolute z-10">
                <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-16 py-4 sm:px-16">
                <Link href="/" className="flex justify-center items-center" >
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>
                    <CustomButton
                        title="Sign In"
                        btnType="button"
                        containerStyles="txt-primary-blue rounded-full rounded-full bg-white min-w-[130px]"
                        handleClick={() => console.log("Sign In")}
                    />
                </nav>
            </header>
        </>
    );
};
