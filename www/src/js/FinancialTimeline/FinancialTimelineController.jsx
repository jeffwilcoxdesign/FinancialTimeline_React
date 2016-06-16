/*
FinancialTimeline Component by Jeff Wilcox 3.26.2016
*/
require('../../css/FinancialTimeline/index.css');
import $ from "jquery";
import React from 'react';
import ReactDOM from 'react-dom';
import { financialTimeline } from './FinancialTimeline.jsx';
const FinancialTimeline = financialTimeline({ React });

// deductible object below can be omitted when displaying HSA max progress.
const configData = {
		threshold: {
			amount: 6350,
			label: 'Out-of-Pocket\nMaximum',
		},
		deductible: {
			amount: 1000,
			label: 'Annual Deductible\nSet by Insurer',
		},
		measure: 'Current Spend',
		title: 'You have $ to spend before you reach your Deductible.',
}

$.ajax({url:"data/rxClaims.txt", dataType:"script", success:function(){
	getRxClaims(function(userData){
		const dataObj = Object.assign({}, {configData}, {userData});
		ReactDOM.render(
			<FinancialTimeline {...dataObj} />,
			document.getElementById('React-FinancialTimeline')
		);
	});
}});
