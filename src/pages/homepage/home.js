import { ArrowRight } from 'react-iconly';
import { Link } from 'react-router-dom';
import './Home.css';

const Homepage = () => {
    return (
        <div>
            <div style={{ backgroundImage: "url(/assets/images/home_banner.jpg)" }} className='banner'>
                <div className='d-flex align-items-center banner-content pl-5' style={{ height: '100%' }}>
                    <div>
                        <h1 className='banner-text-content banner-heading text-capitalize'>
                            Get started on developing your own city, <br />
                            we'll provide you the land
                        </h1>
                        <h5>
                            <i>Why move to different cities to work when you can make your own city Marvellous?</i>
                        </h5>
                    </div>
                </div>
            </div>
            <div className='container mt-5 pb-5'>
                <div>
                    <u><h1 className='text-center banner-text-content'>About</h1></u>
                    <p id='about' style={{ lineHeight: '30px', fontFamily: 'Titillium-Web', fontSize: '18px' }}>It’s almost a year now since the ongoing pandemic changed our lives. Lots of households had their livelihoods affected. For the most part, institutions and companies that depended made the digital transformation - moved their processes and services online - were largely unaffected. There was the initial shock of having your productivity disrupted, but now, workplaces have stabilized to adapt to their employees working from the comfort of their homes - and this is not just the IT sector. Teachers, Doctors, Bank employees - even ministers in the government - can stay at home and through computers and the internet, carry out their daily activities.
                    While earlier, employees were restricted to living in the vicinity of their office, they are no longer bound by these geographical restrictions and now have the freedom to work from anywhere, thanks to electronic devices that can now be monitored and worked with through the internet. They are now digital nomads - unrestricted to any boundaries of stay and can travel freely the length and breadth of the country, while still earning.
                    This presents a unique opportunity to the city, state, and country’s administration - while before, citizens had to migrate from different parts of the country to cities or towns to look for a job and for a place to stay, putting stress on the infrastructure and public services, citizens can now stay where they are most comfortable or keep travelling, while still working - thereby freeing up overloaded assets to work efficiently. Vice Versa, the administration now has to account for their citizens no longer feeling the need to migrate to popular cities and using the services and infrastructure in their hometowns to improve their quality of life.
                </p>
                </div>
            </div>
            <div className='explore-section mt-5 mb-5'>
                <i>
                    <h1 className='text-banner-content text-capitalize text-danger' style={{ fontSize: '40px' }}>
                        Explore our listings spanned all over India
                    </h1>
                </i>
                <Link to='/listings'>
                    <button className='btn btn-primary bt-xl mt-3'>
                        Check Out
                        <ArrowRight set='light' />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Homepage;