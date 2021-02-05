import styles from './SearchFilter.module.css';


const SearchFilter = ({ propertyData, filterFunction }) => {

    const landTypes = [];

    propertyData.forEach((item) => {
        if (!landTypes.includes(item.land_type)) {
            landTypes.push(item.land_type);
        }
    });

    return (
        <div className={styles.container}>
            <h4 className='text-center mb-4'>
                Refine Your Search
            </h4>
            <div>
                <h6 style={{ fontWeight: 'bold' }}>Land Type</h6>
                <div className='d-flex flex-wrap'>
                    {landTypes.map((item, index) => (
                        <div key={index}>
                            <button onClick={() => filterFunction({ landType: item })} className='btn btn-default btn-sm'>{item}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchFilter;