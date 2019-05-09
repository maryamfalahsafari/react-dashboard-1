import React from 'react';
import MedicalConstByCategory from './MedicalConstByCategory';
import './medicalConstsByCategory.css'

const MedicalConstsByCategory = () => {
    return (<div className="medicalConstsByCategory" >
        <div className="header">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="title">Medical Cost by Category</div>
                <div>More Details</div>
            </div>
        </div>
        <MedicalConstByCategory />
        <MedicalConstByCategory />
        <MedicalConstByCategory />
        <MedicalConstByCategory />
        <MedicalConstByCategory />
    </div>);
}

export default MedicalConstsByCategory;