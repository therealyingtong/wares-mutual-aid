import React from 'react'

    const Needs = ({ dates, edits, names, locations, contacts, details, labels, updates, status, assistedBy, targetLabel }) => {

		var matchIndices = []
		if (targetLabel){
			for (var i = 0; i < labels.length; i++) {
				const label_text = labels[i].toString()
				const details_text = details[i].toString()
				if (label_text.toLowerCase().includes(targetLabel.toLowerCase()) || details_text.toLowerCase().includes(targetLabel.toLowerCase())) matchIndices.push(i)
			}
		} else {
			matchIndices = [...Array(dates.length).keys()];
		}

		return (
			<div class="container-needs">
				<br></br>
				<center><h2>needs</h2></center>
				{matchIndices.map((index) => (
				<div class="card">
					<div class="card-header">{dates[index]}, edited [{edits[index]}], status: [{status[index]}]</div>
					<div class="card-body">
						<h5 class="card-title">{index+1}. {names[index]}</h5>
						<h6 class="card-subtitle mb-2 text-muted">location: {locations[index]}</h6>
						<h6 class="card-subtitle mb-2 text-muted">labels: {labels[index]}</h6>
						<p class="card-text">{contacts[index]}</p>
						<p class="card-text">{details[index]}</p>
						<p class="card-text text-muted"><b>updates:</b> {updates[index]}</p>
						<p class="card-text text-muted"><b>assisted by:</b> {assistedBy[index]}</p>
					</div>
				</div>
				))}
				
			</div>

		)			
    };

    export default Needs