import React from 'react'

    const Needs = ({ datesNeeds, editsNeeds, namesNeeds, locationsNeeds, contactsNeeds, detailsNeeds, labelsNeeds, updateNeeds, statusNeeds, assistedBy, targetLabelNeeds, hideFulfilledNeeds, newestFirstNeeds }) => {

		var matchIndices = []
		var unfulfilledIndices = []
		var partialIndices = []

		if (targetLabelNeeds){
			for (var i = 0; i < labelsNeeds.length; i++) {
				const label_text = labelsNeeds[i].toString()
				const detailsNeeds_text = detailsNeeds[i].toString()
				if (label_text.toLowerCase().includes(targetLabelNeeds.toLowerCase()) || detailsNeeds_text.toLowerCase().includes(targetLabelNeeds.toLowerCase())) matchIndices.push(i)
			}
		} else {
			matchIndices = [...Array(datesNeeds.length).keys()];
		}

		if (newestFirstNeeds) matchIndices.reverse()

		if (hideFulfilledNeeds) {
			for (var j = 0; j < matchIndices.length; j++) {
				const _status = statusNeeds[matchIndices[j]]
				var status_text = ''
				if (_status) {
					status_text = _status.toString();
				}
				if (status_text.includes("Partial")) partialIndices.push(j)
				if (!status_text.includes("Fulfilled")) unfulfilledIndices.push(j)
			}
			matchIndices = unfulfilledIndices.map(j => matchIndices[j])
		}

		return (
			<div class="container-needs">
				<br></br>
				<center><h2>needs</h2></center>
				<center>fulfilled: {datesNeeds.length - unfulfilledIndices.length}, partial: {partialIndices.length}, total: {datesNeeds.length}</center><br></br>
				{matchIndices.map((index) => (
				<div class="card">
					<div class="card-header">{datesNeeds[index]}, edited [{editsNeeds[index]}], status: [{statusNeeds[index]}]</div>
					<div class="card-body">
						<h5 class="card-title">{index+1}. {namesNeeds[index]}</h5>
						<h6 class="card-subtitle mb-2 text-muted">location: {locationsNeeds[index]}</h6>
						<h6 class="card-subtitle mb-2 text-muted">labels: {labelsNeeds[index]}</h6>
						<p class="card-text">{contactsNeeds[index]}</p>
						<p class="card-text">{detailsNeeds[index]}</p>
						<p class="card-text text-muted"><b>updates:</b> {updateNeeds[index]}</p>
						<p class="card-text text-muted"><b>assisted by:</b> {assistedBy[index]}</p>
					</div>
				</div>
				))}
				
			</div>

		)			
    };

    export default Needs