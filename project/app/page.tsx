import {Hero} from "@/components/Hero";
import {SearchBar} from "@/components/SearchBar";
import {CustomFilter} from "@/components/CustomFilter";
import {CardCar} from "@/components/CardCar";
import {fetchCars, FilterProps} from "@/utils";

export interface HomeProps {
    searchParams: FilterProps;
}

export default async function Home({ searchParams }) {

    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || 10,
        model: searchParams.model || "",
    });
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main className="overflow-hidden">
            <Hero/>
            <div id="discover" className="mt-12 padding-x padding-y max-width">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                    <p>Explore the cars you might like</p>
                </div>
                <div className="home__filters">
                    <SearchBar/>
                    <div className="home__filter-container">
                        <CustomFilter title="fuel"/>
                        <CustomFilter title="year"/>
                    </div>
                </div>
                {!isDataEmpty
                    ?
                    (
                        <section>
                            <div className="home__cars-wrapper">
                                {allCars.map((car) =>
                                    <CardCar
                                        car={car}
                                    />)
                                }
                            </div>
                        </section>
                    )
                    :
                    (
                        <div className="home__error-container">
                            <h2 className="text-black text-xl font-bold">No results...</h2>
                        </div>
                    )
                }
            </div>
        </main>
    )
}
