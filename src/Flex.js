import React from 'react';
import './flex.css';

const Flex = () => {

    return (
        <div className="parent">
            <div className="child">
                <p className="lbl">Contract No.</p>
                <p className="txt">10090000</p>
            </div>
            <div className="child--featured">
                <p className="lbl">Subscriber</p>
                <p className="txt">Ismail Ali AbuDawood Trading Co. Ltd.</p>
            </div>
            <div className="child">
                <p className="lbl">Class ID</p>
                <p className="txt">10/Silver+</p>
            </div>
            <div className="child">
                <p className="lbl">Type</p>
                <p className="txt">Employee</p>
            </div>

        </div>
    );
}
export default Flex;