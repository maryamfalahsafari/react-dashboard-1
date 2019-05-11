import React from 'react';
import './progressChart.css';

const ProgressChart = () => {
    return (<div className="div1">

        <div className="div2" ng-style="{'width': $ctrl.value + '%' }"></div>
    </div>);
}

export default ProgressChart;

