import React from 'react';
import Medicals from './Medicals';
import Anatomy from './Anatomy';
import './app.css';
import MedicalConst from './MedicalConst';
import Header from './Header';
import MedicalConstsByICD from './MedicalConstsByICD';
import MedicalConstsByProvider from './MedicalConstsByProvider';
import MedicalConstsByCategory from './MedicalConstsByCategory';
import ClaimServiceTypeConsumptions from './ClaimServiceTypeConsumptions';
import Bottom from './Bottom';
import BenefitConsumptions from './BenefitConsumptions';

function App() {
  return (
    <div className="container-fluid" style={{ 'height': '100%', paddingLeft: '20px', paddingRight: '20px' }}>
      <div className="row">
        <div className="col-md-12">
          <Header />
        </div>
      </div>
      
      <div className="row">
        <div className="m col-md-5 col-sm-12 col-xs-12" style={{ 'padding': '0' }}>
          <Medicals />
        </div>
        <div className="m col-md-7 col-sm-12 col-xs-12" style={{ 'padding': '0' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 col-sm-12 col-xs-12" style={{ backgroundColor: '#fff', 'padding': '0' }}>
                <Anatomy />
              </div>
              <div className=" col-md-5 col-sm-12 col-xs-12" style={{ backgroundColor: '#fff', 'padding': '0' }}>
                <MedicalConst />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
        <BenefitConsumptions />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12">
          <MedicalConstsByICD />
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12">
          <MedicalConstsByProvider />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 col-sm-12 col-xs-12">
          <MedicalConstsByCategory />
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          <ClaimServiceTypeConsumptions />
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          <ClaimServiceTypeConsumptions />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <Bottom />
        </div>
      </div>
    
    </div>
  );
}

export default App;
