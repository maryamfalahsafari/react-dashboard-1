import React from 'react';
import './medical.css';

const Medical = () => {
    return (
        <div className="parent scrollbar-light-blue">
            <div className="left">
                <div className="container-fluid">
                    <div>
                        <span className="head">Diabetes Melitus</span>
                        <span className="chk"><input type="checkbox"/></span>
                    </div>
                    <div>
                        <span className="lbl">Confirmed Date</span>
                        <span className="txt">11/05/2014</span>
                    </div>
                    <div>
                        <span className="lbl">Last Request</span>
                        <span className="txt">23/12/2018</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="container-fluid">
                    <div>
                        <span className="lbl">Cost Approved</span>
                        <span className="approve">SAR 48,490.00</span>
                    </div>
                    <div>
                        <span className="lbl">Qty Approved</span>
                        <span className="approve">360</span>
                    </div>
                    <div>
                        <span className="lbl">Cost Rejected</span>
                        <span className="reject">SAR 167.40</span>
                    </div>
                    <div>
                        <span className="lbl">Qty Rejected</span>
                        <span className="reject">20</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Medical;