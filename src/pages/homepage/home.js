import './Home.css';
import propertyData from '../../data/property_data.json';
import Listings from '../listings/listings';
import { useState } from 'react';
import PropertyDetails from '../details/propertyDetails';

const Homepage = () => {

    const [componentToRender, setComponentToRender] = useState('listings');
    const [propertyToShow, setPropertyToShow] = useState(null);

    const showDetails = (propertyData) => {
        setComponentToRender('details');
        setPropertyToShow(propertyData);
    }

    return (
        <div>
            homepage
            {/* <div>
                {componentToRender === 'listings' &&
                    <Listings propertyData={propertyData} showDetailsFunction={showDetails} />
                }
                {componentToRender === 'details' &&
                    <PropertyDetails propertyToShow={propertyToShow} setComponentToRender={setComponentToRender} />
                }
            </div> */}
        </div>
    );
}

export default Homepage;