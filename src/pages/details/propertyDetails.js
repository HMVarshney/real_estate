import styles from "./PropertyDetails.module.css";
import Avatar from '@bit/mui-org.material-ui.avatar';
import propertyData from '../../data/property_data.json';
import { ArrowUpSquare, Bookmark, Location } from 'react-iconly';
import { useState } from "react";
import AppointmentModal from "../../components/PropertyDetails/AppointmentModal/AppointmentModal";

const doesAppointmentExist = (pid) => {
    let exists = false;

    const currentAppointments = JSON.parse(localStorage.getItem('real-estate-appointment'));

    if (currentAppointments)
        exists = currentAppointments.some((item) => item.pid === pid);

    return exists;
}

const PropertyDetails = (props) => {

    const propertyToShow = propertyData.filter((item) => item.id === props.match.params.pid)[0];

    const [appointmentModalOpen, toggleAppointmentModal] = useState(false);

    if (propertyToShow) {
        return (
            <div className='pb-5'>
                <div>
                    <div className={styles['page-image']} style={{ backgroundImage: `url(/assets/images/${propertyToShow.image}.jpg)` }} />
                </div>
                <div className={styles['main-container']}>
                    <div className='row no-gutters justify-content-between mt-4'>
                        <div className='col-8'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h2 style={{ fontWeight: 'bold' }}>{propertyToShow.title}</h2>
                                <div>
                                    <div>
                                        <h3 style={{ fontWeight: 'bold' }}>₹{propertyToShow.starting_price}cr</h3>
                                    </div>
                                    {doesAppointmentExist(props.match.params.pid) ?
                                        <button className='btn btn-success btn-sm mt-2'>
                                            Appointment Booked
                                        <Bookmark set='light' />
                                        </button>
                                        :
                                        <button onClick={() => toggleAppointmentModal(true)} className='btn btn-danger btn-sm mt-2'>
                                            Take a visit
                                        <ArrowUpSquare className='ml-2' set='light' />
                                        </button>
                                    }
                                </div>
                            </div>
                            <div>
                                <span className='d-flex align-items-center'>
                                    <Location set='light' />
                                    <p>{`${propertyToShow.city}, ${propertyToShow.state}, ${propertyToShow.country}`}</p>
                                </span>
                                <span className='d-flex align-items-center'>
                                    <i><img src='/assets/icons/area.svg' alt='area-icon' style={{ width: '20px' }} /> </i>
                                    <p className='ml-1'>{propertyToShow.size}</p>
                                </span>
                                <div className='mt-4'>
                                    <h5 className='text-danger'>{propertyToShow.land_type} land</h5>

                                    <h6 style={{ display: 'inline-block' }} className='text-muted mt-3'> Land Ideal For: </h6>
                                    <h5 style={{ display: 'inline-block' }}> {propertyToShow.land_ideal_for} </h5>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit orci sapien,
                                        non finibus mi euismod nec. In vitae turpis vestibulum urna dictum mattis. Nam scelerisque
                                        orci tincidunt, varius purus sit amet, semper metus. Nullam bibendum gravida magna et c
                                        onvallis. Donec non purus ac lectus suscipit ultricies. Vivamus sit amet iaculis velit. V
                                        ivamus eget egestas leo. Proin mi purus, congue id tellus bibendum, hendrerit rutrum turp
                                        is. Aliquam ornare lectus orci, a molestie enim laoreet non. Nunc nec ornare purus. Donec at v
                                        olutpat turpis.Integer
                                    </p>
                                </div>
                                <div className='mt-4'>
                                    <h4>Location</h4>
                                    <iframe title='map' scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="700px" height="300px" frameBorder="0"></iframe>
                                </div>
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
                {appointmentModalOpen &&
                    <AppointmentModal modalOpen={appointmentModalOpen} toggleModal={toggleAppointmentModal} pid={props.match.params.pid} />
                }
            </div>
        );
    } else {
        return (
            <div>Invalid ID</div>
        )
    }
}

export default PropertyDetails;