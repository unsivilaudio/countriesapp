import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import CountryItem from './CountryItem';

const Countries = ({ selected, resetHandler }: any) => {
    const selectedCountries = useSelector(
        (state: any) => state.countries.selectedIds
    ) as string[];
    const countryData = useSelector<any>(state => state.countries.data) as {
        [key: string]: any;
    }[];

    const countries = useMemo(() => {
        return (
            <>
                <button onClick={resetHandler}>Go back</button>
                <h2>{selected}</h2>
                {countryData
                    .filter(x => x.region === selected)
                    .map(country => (
                        <CountryItem
                            key={country.name.common}
                            country={country}
                            isSelected={selectedCountries.includes(
                                country.name.common
                            )}
                        />
                    ))}
            </>
        );
    }, [countryData, resetHandler, selected, selectedCountries]);

    // console.log('RE RENDER');

    return (
        <>
            {countryData.length > 0 ? (
                <div>{countries}</div>
            ) : (
                <p> Nothing to show!</p>
            )}
        </>
    );
};

export default Countries;
