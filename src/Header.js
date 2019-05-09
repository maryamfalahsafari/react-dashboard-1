import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div>
            <div className="row1">
                <span className="title">Ahmed Mohammed Hafiz</span>
                <span className="close">CLOSE</span>
            </div>

            <div className="row2">
                <span className="sub-title">
                    16197055
        </span>
                <span className="vip">
                    vip
        </span>
                <span className="ambassador">
                    AMBASSADOR
        </span>
            </div>

            <div className="row" style={{ 'padding-top': '20px' }}>
                <div className="col-md-1 col-sm-2 col-xs-1">
                    <p className="label">Contract No.</p>
                    <p className="text">10090000</p>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-3">
                    <p className="label">Subscriber</p>
                    <p className="text">Ismail Ali AbuDawood Trading Co. Ltd.</p>
                </div>
                <div className="col-md-1 col-sm-2 col-xs-1">
                    <p className="label">Class ID</p>
                    <p className="text">10/Silver+</p>
                </div>
                <div className="col-md-1 col-sm-2 col-xs-1">
                    <p className="label">Type</p>
                    <p className="text">Employee</p>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-1">
                    <input className="btn" type="button" value="View ToB" />
                </div>

            </div>



            <div className="row" style={{ overflow: 'hidden', 'white-space': 'nowrap' }}>
                <div className="col-md-1 col-sm-2">
                    <span className="label">Status</span>
                </div>
                <div className="col-md-1 col-sm-2">
                    <span className="text">Active</span>
                </div>
                <div className="col-md-1 col-sm-2" >
                    <span className="label">ID No.</span>
                </div>
                <div className="col-md-1 col-sm-2">
                    <span className="text">2193583784</span>
                </div>
                <div className="col-md-1 col-sm-2">
                    <span className="label">IP Claims</span>
                </div>
                <div className="col-md-1 col-sm-2">
                    <span className="label">OP Claims</span>
                </div>
            </div>

            <div className="row" style={{ overflow: 'hidden', 'white-space': 'nowrap' }}>
                <div className="col-md-1 col-sm-2">
                    <span className="label">Effective Date</span>
                </div>
                <div className="col-md-1 col-sm-2">
                    <span className="text">01/07/2018</span>
                </div>
                <div className="col-md-1 col-sm-2" >
                    <span className="label">Passport No.</span>
                </div>
                <div className="col-md-1 col-sm-2" >
                    <span className="label">-</span>
                </div>
                <div className="col-md-1 col-sm-2" >
                    <span className="bold-value">14</span>
                </div>
                <div className="col-md-1 col-sm-2" >
                    <span className="bold-value">178</span>
                </div>

            </div>

            <div className="row bottom-border"
                style={{ overflow: 'hidden', 'white-space': 'nowrap', 'padding-bottom': '40px' }}>
                <div className="col-md-1 col-sm-2">
                    <span className="label">Terminate Date</span>
                </div>
                <div className="col-md-1 col-sm-2">
                    <span className="text">01/07/2018</span>
                </div>
                <div className="col-md-1 col-sm-2" >
                    <span className="label">Border Entry No.</span>
                </div>
                <div className="col-md-1 col-sm-2" >
                    <span className="label">-</span>
                </div>
                <div className="col-md-1 col-sm-2" >
                    <span className="label">-</span>
                </div>
                <div className="col-md-1 col-sm-2" >
                    <span className="label">-</span>
                </div>

            </div>


            <div className="row bottom-border"
                style={{ 'padding-top': '20px', 'padding-bottom': '20px', display: 'flex', 'padding-left': '15px' }}>

                <span className="label">Memberships</span>
                <span className="memberships-all">
                    ALL
        </span>
                <span className="grey">
                    16197055 Bupa Gold 2018-07
        </span>
                <span className="grey">
                    17584913 Bupa Silver 2018-11
        </span>
                <span className="grey">
                    19381839 Bupa Silver+ 2019-01
        </span>
            </div>

        </div>
    );

}

export default Header;