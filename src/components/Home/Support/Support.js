import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Support = ({support}) => {
    const {title,des,icon} = support;
    return (
        <div className='col-md-4'>
            <div className="card my-2">
                <div className="card-body text-center">
                   <p className=''><FontAwesomeIcon style={{color:'#6dcff6'}} icon={icon} size="3x"></FontAwesomeIcon></p>
                   <h4>{title}</h4>
                   <p className='text-secondary'>{des}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Support;