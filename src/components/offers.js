import React from 'react'

    const Offers = ({ datesOffers, editsOffers, namesOffers, locationsOffers, contactsOffers, detailsOffers, labelsOffers, updateOffers, statusOffers, targetLabelOffers, hideFulfilledOffers, newestFirstOffers }) => {

		var matchIndices = []
		var unfulfilledIndices = []
		var partialIndices = []

		var partialCount = 0
		var fulfilledCount = 0

		for (var i = 0; i < datesOffers.length; i++){
			const _status = statusOffers[i]
			var status_text = ''
			if (_status) {
				status_text = _status.toString();
			}
			if (status_text.includes("Partial")) partialCount++
			if (status_text.includes("Fulfilled")) fulfilledCount++
		}

		if (targetLabelOffers){
			for (var i = 0; i < labelsOffers.length; i++) {
				const label_text = labelsOffers[i].toString()
				const detailsOffers_text = detailsOffers[i].toString()
				const namesOffers_text = namesOffers[i].toString()
				if (label_text.toLowerCase().includes(targetLabelOffers.toLowerCase()) || detailsOffers_text.toLowerCase().includes(targetLabelOffers.toLowerCase()) || namesOffers_text.toLowerCase().includes(targetLabelOffers.toLowerCase())) matchIndices.push(i)
			}
		} else {
			matchIndices = [...Array(datesOffers.length).keys()];
		}

		if (newestFirstOffers) matchIndices.reverse()

		if (hideFulfilledOffers) {
			for (var j = 0; j < matchIndices.length; j++) {
				const _status = statusOffers[matchIndices[j]]
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
			<div class="container-offers">
				<br></br>
			<center><h2>offers</h2></center>
			<center>fulfilled: {fulfilledCount}, partial: {partialCount}, total: {datesOffers.length}</center><br></br>

				{matchIndices.map((index) => (
				<div class="card">
					<div class="card-header">{datesOffers[index]}, edited [{editsOffers[index]}], status: [{statusOffers[index]}] </div>
					<div class="card-body">
					<h5 class="card-title">{index+1}. {namesOffers[index]}</h5>
				<h6 class="card-subtitle mb-2 text-muted">location: {locationsOffers[index]}</h6>
				<h6 class="card-subtitle mb-2 text-muted">labels: {labelsOffers[index]}</h6>
					<p class="card-text">{contactsOffers[index]}</p>
					<p class="card-text">{detailsOffers[index]}</p>
					<p class="card-text text-muted"><b>updates:</b> {updateOffers[index]}</p><input type="text"></input>
					</div>
				</div>
				))}
			</div>
		)			
		

    };

    export default Offers