import React from 'react';
import './benefitConsumptions.css';
import BenefitConsumption from './BenefitConsumption';

const BenefitConsumptions = () => {

    return (<div className="benefitConsumptions">
        <div className="left-arrow">
            <img src={require('./imgs/ic-dropdown-left.svg')} onClick={() => {
                console.log(document.getElementById('b').scrollLeft);
                document.getElementById('b').scrollLeft += 100;
            }} />
        </div>

        <div id="a" className="a">
            <div id="b" className="b">
                <div className="c">
                    <div style={{ flexBasis: '20%' }}>
                        <BenefitConsumption />
                    </div>
                    <div style={{ flexBasis: '20%' }}>
                        <BenefitConsumption />
                    </div>
                    <div style={{ flexBasis: '20%' }}>
                        <BenefitConsumption />
                    </div>
                    <div style={{ flexBasis: '20%' }}>
                        <BenefitConsumption />
                    </div>
                    <div style={{ flexBasis: '20%' }}>
                        <BenefitConsumption />
                    </div>
                    <div style={{ flexBasis: '20%' }}>
                        <BenefitConsumption />
                    </div>
                    <div style={{ flexBasis: '20%' }}>
                        <BenefitConsumption />
                    </div>
                </div>
            </div>
        </div>

        <div className="right-arrow">
            <img src={require('./imgs/ic-dropdown-right.svg')} onClick={() => {
                console.log(document.getElementById('b').scrollLeft);
                document.getElementById('b').scrollLeft -= 100;
            }} />
        </div>
    </div>);

}

export default BenefitConsumptions;