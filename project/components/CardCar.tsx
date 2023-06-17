"use client";

import {calculateCarRent} from "@/utils";
import Image from "next/image";
import {CustomButton} from "@/components/CustomButton";
import {useState} from "react";
import {CarDetails} from "@/components/CarDetails";

export interface CarProps {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}
interface CardCarProps {
    car: CarProps
}

export const CardCar = ({car}: CardCarProps) => {

    const {city_mpg, year, make, model, transmission, drive} = car;

    const carRent = calculateCarRent(city_mpg, year);

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className="car-card group">
                <div className="car-card__content">
                    <h2 className="car-card__content-title">{make} {model}</h2>
                </div>
                <p className="flex mt-6 text-[32px] font-extrabold">
                    <span className="self-start text-[14px] font-semibold">
                        €
                    </span>
                    {carRent}
                    <span className="self-start text-[14px] font-semibold">
                        /day
                    </span>
                </p>
                <div className="relative w-full h-40 my-3 object-contain">
                    <Image src="/hero.png" alt="hero" fill priority className="object-contain"/>
                </div>
                <div className="relative flex w-full mt-2">
                    <div className='flex group-hover:invisible w-full justify-between text-grey'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                            <p className='text-[14px] leading-[17px]'>
                                {transmission === "a" ? "Automatic" : "Manual"}
                            </p>
                        </div>
                        <div className="car-card__icon">
                            <Image src="/tire.svg" width={20} height={20} alt="seat" />
                            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
                        </div>
                        <div className="car-card__icon">
                            <Image src="/gas.svg" width={20} height={20} alt="seat" />
                            <p className="car-card__icon-text">{city_mpg} MPG</p>
                        </div>
                    </div>
                    <div className="car-card__btn-container">
                        <CustomButton
                            title='View More'
                            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                            textStyles='text-white text-[14px] leading-[17px] font-bold'
                            rightIcon='/right-arrow.svg'
                            handleClick={() => setIsOpen(true)}
                        />
                    </div>
                </div>
                <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
            </div>
        </>
    );
};
