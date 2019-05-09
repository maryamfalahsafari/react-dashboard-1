import React from 'react';
import './anatomy.css';
const Anatomy = () => {
    return (
        <div className="container-fluid" style={{ paddingTop: '10px' }}>
            <div className="row">
                <div className="anatomy col-md-5 col-sm-5 col-xs-5">
                    <div style={{width:'145px'}}></div>
                    <img src={require('./imgs/Anatomy.svg')}  />
                    <span className="info-1">48</span>
                    <span className="info-2">16</span>
                    <span className="info-3">4</span>
                    <span className="info-4">2</span>
                    <span className="info-5">4</span>
                </div>
                <div className="anatomy-info col-md-7 col-sm-7 col-xs-7">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6" >
                                <p className="lbl">Age</p>
                                <p className="txt">39</p>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6" >
                                <p className="lbl">Gender</p>
                                <p className="txt">Femail</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6" >
                                <p className="lbl">Height</p>
                                <p className="txt">178cm</p>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6" >
                                <p className="lbl">Weight</p>
                                <p className="txt">88kg</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6" >
                                <p className="lbl">BMI</p>
                                <p className="txt">26.2</p>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6" >
                                <p className="lbl">Blood Type</p>
                                <p className="txt">O</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="lbl">Health Profile</p>
                                <p className="danger">High Risk</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" >
                                <p className="lbl_">Other information</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" style={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
                                <div style={{
                                    display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                                    flexBasis: '100%',paddingLeft:'10px',paddingTop:'5px'
                                }}>
                                    <div style={{ flexBasis: '50%' }}>
                                        <p className="lbl" style={{ marginBottom: '2px',whiteSpace:'nowrap' }}>Gravid</p>
                                        <input type="text" style={{ width: '90%', borderRadius: '10px', border: '1px #dddddd solid' }} />
                                    </div>
                                    <div style={{ flexBasis: '50%' }}>
                                        <p className="lbl" style={{ marginBottom: '2px',whiteSpace:'nowrap' }}>Para</p>
                                        <input type="text" style={{ width: '90%', borderRadius: '10px', border: '1px #dddddd solid' }} />
                                    </div>
                                </div>

                                <div style={{
                                    display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                                    flexBasis: '100%',paddingLeft:'10px',paddingTop:'5px'
                                }}>
                                    <div style={{ flexBasis: '50%' }}>
                                        <p className="lbl" style={{ marginBottom: '2px',whiteSpace:'nowrap' }}>Previous CSD</p>
                                        <input type="text" style={{ width: '90%', borderRadius: '10px', border: '1px #dddddd solid' }} />
                                    </div>
                                    <div style={{ flexBasis: '50%' }}>
                                        <p className="lbl" style={{ marginBottom: '2px',whiteSpace:'nowrap' }}>Previous Abortion</p>
                                        <input type="text" style={{ width: '90%', borderRadius: '10px', border: '1px #dddddd solid' }} />
                                    </div>
                                </div>

                                <div style={{
                                    display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                                    flexBasis: '100%',paddingLeft:'10px',paddingTop:'5px'
                                }}>
                                    <div style={{ flexBasis: '100%' }}>
                                        <p className="lbl" style={{ marginBottom: '2px',whiteSpace:'nowrap' }}>GP (Maternity)</p>
                                        <input type="text" style={{ width: '96%', borderRadius: '10px', border: '1px #dddddd solid' }} />
                                    </div>
                                </div>

                                <div style={{
                                    display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                                    flexBasis: '100%',paddingLeft:'10px',paddingTop:'5px'
                                }}>
                                    <div style={{ flexBasis: '100%' }}>
                                        <input type="checkbox"/>
                                        <span className="lbl_" style={{ marginBottom: '2px',whiteSpace:'nowrap' }}>Declare Condition from PA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Anatomy;