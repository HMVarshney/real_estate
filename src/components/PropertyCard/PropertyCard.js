import { Link } from 'react-router-dom';
import styles from './PropertyCard.module.css';

const PropertyCard = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className='row no-gutters'>
                <div className='col-4'>
                    <div style={{ backgroundImage: `url(/assets/images/${data.image}.jpg)` }} className={styles['card-image']} />
                </div>
                <div className='col-6 pl-4'>
                    <div style={{ height: '100%' }} className='d-flex flex-column justify-content-between'>
                        <div>
                            <h3 className={styles['card-heading']}>
                                {`${data.city}, ${data.state}, ${data.country}`.slice(0, 34)}
                                {`${data.city}, ${data.state}, ${data.country}`.length > 34 ? "..." : ''}
                            </h3>
                            <div>
                                {/* <img className={styles['area-icon']} src='/assets/icons/area.svg' alt='area' /> */}
                                <h6>{data.size}</h6>
                            </div>
                            <p className='text-danger'> {data.land_type} </p>
                            <div className='d-flex align-items-center mt-3'>
                                <h6 className='text-muted'> Land Ideal For: </h6>
                                <h6> {data.land_ideal_for} </h6>
                            </div>
                        </div>
                        <div>
                            <Link to={`/details/${data.id}`}>
                                <button className='btn btn-primary btn-sm'>View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className={styles['price-section']}>
                        <div>
                            Starting At
                            <h5 style={{ padding: 0, margin: 0, fontWeight: 'bold' }}>{data.starting_price}cr</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;