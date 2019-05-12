import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">

            <div className="title-row">
                <span className="title">Ahmed Mohammed Hafiz</span>
            </div>

            <div className="row-subtitle">
                <span className="sub-title">16197055</span>
                <span className="vip">vip</span>
                <span className="ambassador">AMBASSADOR</span>
            </div>

            <div className="row">
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <p className="label">Contract No.</p>
                    <p className="text">10090000</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                    <p className="label">Subscriber</p>
                    <p className="text" >Ismail Ali AbuDawood Trading Co. Ltd.</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <p className="label">Class ID</p>
                    <p className="text">10/Silver+</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <p className="label">Type</p>
                    <p className="text">Employee</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <input className="btn" type="button" value="View ToB" />
                </div>

            </div>

            <div className="row">
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <p className="label">Status</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <p className="text">Active</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12" >
                    <p className="label">ID No.</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <p className="text">2193583784</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <p className="label">IP Claims</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <p className="label">OP Claims</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <p className="label">Effective Date</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <p className="text">01/07/2018</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12" >
                    <p className="label">Passport No.</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12" >
                    <p className="label">-</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12" >
                    <p className="bold-value">14</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12" >
                    <p className="bold-value">178</p>
                </div>

            </div>

            <div className="row">
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <p className="label">Terminate Date</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12">
                    <p className="text">01/07/2018</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12" >
                    <p className="label">Border Entry No.</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12" >
                    <p className="label">-</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12" >
                    <p className="label">-</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 col-xs-12" >
                    <p className="label">-</p>
                </div>

            </div>


            <div className="row memberships-border"
                style={{ 'padding-top': '20px', 'padding-bottom': '20px', display: 'flex', 'padding-left': '15px' }}>

                <span className="label">Memberships</span>
                <span className="memberships-all">ALL</span>
                <span className="grey">16197055 Bupa Gold 2018-07</span>
                <span className="grey">17584913 Bupa Silver 2018-11</span>
                <span className="grey">19381839 Bupa Silver+ 2019-01</span>
            </div>

        </div>
    );

}

export default Header;