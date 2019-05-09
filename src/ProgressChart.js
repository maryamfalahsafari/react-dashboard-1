import React from 'react';
import './progressChart.css';

const ProgressChart = () => {
    return (<div class="div1">

        <div class="div2" ng-style="{'width': $ctrl.value + '%' }"></div>
    </div>);
}

export default ProgressChart;

