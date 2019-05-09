import React from 'react';
import './bottom.css';

const Bottom = () => {
    return (<div className="container-fluid bottom"
        style={{ borderTop: 'solid 1px #dddddd', minHeight: '250px', marginTop: '15px' }}>
        <div className="row" style={{paddingTop:'0'}}>
            <div className="col-md-2" style={{ borderRight: 'solid 1px #dddddd' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <img style={{ paddingTop: '20px' }} src={require('./imgs/Teptom.svg')} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <p className="title" style={{ paddingTop: '10px' }}>Tebtom</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <p className="lbl" style={{ paddingTop: '10px' }}>Tebtom Satisfactory</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div><span style={{ color: '#678004', paddingTop: '3px', fontSize: '15px', marginRight: '10px', display: 'inline-block', fontWeight: '300' }}>95</span></div>
                        <div className="excelent">EXCELENT</div>

                    </div>
                    <div style={{ display: 'flex', marginTop: '15px' }}>
                        <div style={{ flexBasis: '50%' }}>
                            <p className="lbl">Requests</p>
                            <p className="txt">56</p>
                        </div>
                        <div style={{ flexBasis: '50%' }}>
                            <p className="lbl">Completed</p>
                            <p className="txt">54</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-10"></div>
        </div>
    </div>
    )
}

export default Bottom;