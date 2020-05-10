import React from 'react'

    const Offers = ({ dates1, edits1, names1, locations1, contacts1, details1, labels1, updates1, status1, targetLabel1 }) => {

		var matchIndices = []
		if (targetLabel1){
			console.log('hi ', targetLabel1)
			for (var i = 0; i < labels1.length; i++) {
				const label_text = labels1[i].toString()
				const details_text = details1[i].toString()
				if (label_text.toLowerCase().includes(targetLabel1.toLowerCase()) || details_text.toLowerCase().includes(targetLabel1.toLowerCase())) matchIndices.push(i)
			}
		} else {
			matchIndices = [...Array(dates1.length).keys()];
		}

		return (
			<div class="container-offers">
				<br></br>
			<center><h2>offers</h2></center>
				{matchIndices.map((index) => (
				<div class="card">
					<div class="card-header">{dates1[index]}, edited [{edits1[index]}], status: [{status1[index]}] </div>
					<div class="card-body">
					<h5 class="card-title">{index+1}. {names1[index]}</h5>
				<h6 class="card-subtitle mb-2 text-muted">location: {locations1[index]}</h6>
				<h6 class="card-subtitle mb-2 text-muted">labels: {labels1[index]}</h6>
					<p class="card-text">{contacts1[index]}</p>
					<p class="card-text">{details1[index]}</p>
					<p class="card-text text-muted"><b>updates:</b> {updates1[index]}</p>
					</div>
				</div>
				))}
			</div>
		)			
		

    };

    export default Offers