"use client";
import {SearchManufacturer} from "@/components/SearchManufacturer";
import {useState} from "react";

export const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState("");
    const handleSearch = () => {}

    return (
        <>
            <form action="" className="searchbar" onSubmit={handleSearch}>
                <div className="searchbar__item">
                    <SearchManufacturer
                        manufacturer={manufacturer}
                        setManufacturer={setManufacturer}
                    />
                </div>
            </form>
        </>
    );
};
