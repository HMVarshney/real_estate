import { useEffect, useState } from "react";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
// import SearchFilter from "../../components/SearchFilter/SearchFilter";
import propertyData from '../../data/property_data.json';

const Listings = () => {

    // const [dataToShow, setDataToShow] = useState(propertyData);
    // const [refineFilters, setRefineFilters] = useState({
    //     landTypes: []
    // });

    // const filter = (filters) => {
    //     setDataToShow(filterFunction(propertyData, filters));
    //     setRefineFilters(filters);
    // }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div style={{ width: '85vw', margin: '0 auto' }} className='mt-5'>
            <div className='row no-gutters justify-content-around'>
                {/* <div className='col-2'>
                    <SearchFilter propertyData={propertyData} filterFunction={filter} />
                </div> */}
                <div className='col-8'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h1 className='styled-heading'>Listings</h1>
                        <div>
                            Sort
                        </div>
                    </div>
                    <div className='mt-4'>
                        {propertyData.map((item, index) => (
                            <div className={index !== 0 ? 'mt-4' : ''} key={item.id}>
                                <PropertyCard data={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Listings;

// const filterFunction = (rawData, filters) => {
//     let tempData = rawData;

//     console.log(filters)

//     if (filters.landType) {
//         tempData = tempData.filter((item) => item.land_type === filters.landType)
//     }

//     return tempData;
// }