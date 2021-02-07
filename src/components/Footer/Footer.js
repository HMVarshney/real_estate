import { Heart, Heart2 } from "react-iconly"

const Footer = () => {
    return (
        <div style={{ marginTop: '6em' }}>
            <hr style={{ background: 'black' }} />
            <h1 className='text-center mt-4' style={{ fontFamily: 'Beauty-Mountain' }}>Zameen Kosh</h1>

            <h6 className='text-center pb-5'>
                Made with <Heart2 set='bold' primaryColor='red' /> in India
            </h6>
        </div>
    );
}

export default Footer;