import { faFirstOrderAlt, faGratipay } from '@fortawesome/free-brands-svg-icons';
import { faCameraRetro, faGlobe, faHandsHelping, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Support from '../Support/Support';



const supports = [
    { 
        id:1,
        title: 'Diverse Destinations',
        des: " Habitasse. Nunc mollis erat dapibus in commodo eu nisi. Odio purus magnis ",
        icon: faGlobe,
    },
    {
        id:2,
        title: 'Value for Money',
        des: 'Eu molestie Purus ac. Facilisis hac in metus nunc parturient ornare consequat enim',
        icon: faMoneyBillWave
    },
    {
        id:3,
        title: 'Beautiful Places',
        des: 'We have picked 50 of the most beautiful places in the world to add to your travel .',
        icon: faCameraRetro
    },
    {
        id:4,
        title: 'Fast Booking',
        des: 'Torquent egestas. Per integer placerat ipsum quam adipiscing vehicula nisi.',
        icon: faFirstOrderAlt
    },
    {
        id:5,
        title: '	Support Team',
        des: 'Nulla imperdiet dictum laoreet netus. Habitant ullamcorper. Auctor auctor cras.',
        icon: faHandsHelping
    },
    {
        id:6,
        title: 'Passionate Travel',
        des: 'Metus cubilia aenean. Fusce, dapibus netus nullam interdum ut vehicula.',
        icon: faGratipay
    },


]

const ChooseUs = () => {
    return (
        <div className='bg-light py-5'>
            <div className="container">
                <h1 className='mb-5 text-center text-info '>Why Choose Us ?</h1>
                <div className="row">
                    {
                        supports.map(support => <Support key={support.id} support={support}></Support>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ChooseUs;