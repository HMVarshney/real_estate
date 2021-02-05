import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <h2>Logo</h2>
                </div>
                <div style={{ flexGrow: 1 }} />
                <div className='d-flex align-items-center'>
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='ml-5'>
                        <Link to='/listings'>Listings</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;