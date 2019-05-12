import React from 'react';
import MedicalConstByICD from './MedicalConstByICD';
import './medicalConstsByICD.css'

const MedicalConstsByICD = () => {
    return (<div className="medicalConstsByICD" >
        <div className="header-part">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="title">Medical Cost by ICD</div>
                <div>More Details</div>
            </div>
        </div>
        <MedicalConstByICD />
        <MedicalConstByICD />
        <MedicalConstByICD />
        <MedicalConstByICD />
        <MedicalConstByICD />
    </div>);
}

export default MedicalConstsByICD;