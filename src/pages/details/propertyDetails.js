import styles from "./PropertyDetails.module.css";
import Avatar from '@bit/mui-org.material-ui.avatar';
import propertyData from '../../data/property_data.json';

const PropertyDetails = (props) => {

    const propertyToShow = propertyData.filter((item) => item.id === props.match.params.pid)[0];

    if (propertyToShow) {
        return (
            <div>
                <div>
                    <div className={styles['page-image']} style={{ backgroundImage: `url(/assets/images/${propertyToShow.image}.jpg)` }} />
                </div>
                <div className={styles['main-container']}>
                    <div className='row no-gutters justify-content-between mt-5'>
                        <div className='col-8'>
                            <h2 style={{ fontWeight: 'bold' }}>{propertyToShow.title}</h2>
                            <div>

                            </div>
                        </div>
                        <div className='col-3'>
                            <div className={styles['contact-info-box']}>
                                <div>
                                    <Avatar style={{ width: '70px', height: '70px' }} />
                                </div>
                                <div style={{ width: '100%' }} className='mt-4'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <h6 className='text-muted'> Name: </h6>
                                        <h6> {propertyToShow.owner_contact_info.full_name} </h6>
                                    </div>
                                    <hr />
                                    {propertyToShow.owner_contact_info.contact_number &&
                                        <>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <h6 className='text-muted'> Contact Number: </h6>
                                                <h6> {propertyToShow.owner_contact_info.contact_number} </h6>
                                            </div>
                                            <hr />
                                        </>
                                    }
                                    {propertyToShow.owner_contact_info.email &&
                                        <>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <h6 className='text-muted'> Email: </h6>
                                                <h6> {propertyToShow.owner_contact_info.email} </h6>
                                            </div>
                                            <hr />
                                        </>
                                    }
                                    {propertyToShow.owner_contact_info.address &&
                                        <>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <h6 className='text-muted'> Contact Address: </h6>
                                                <h6> {propertyToShow.owner_contact_info.address} </h6>
                                            </div>
                                            <hr />
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>Invalid ID</div>
        )
    }
}

export default PropertyDetails;