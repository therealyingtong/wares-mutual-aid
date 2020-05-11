import React from 'react'

    const Offers = ({ datesOffers, editsOffers, namesOffers, locationsOffers, contactsOffers, detailsOffers, labelsOffers, updateOffers, statusOffers, targetLabelOffers, hideFulfilledOffers, newestFirstOffers }) => {

		var matchIndices = []
		if (targetLabelOffers){
			for (var i = 0; i < labelsOffers.length; i++) {
				const label_text = labelsOffers[i].toString()
				const detailsNeeds_text = detailsOffers[i].toString()
				if (label_text.toLowerCase().includes(targetLabelOffers.toLowerCase()) || detailsNeeds_text.toLowerCase().includes(targetLabelOffers.toLowerCase())) matchIndices.push(i)
			}
		} else {
			matchIndices = [...Array(datesOffers.length).keys()];
		}

		if (newestFirstOffers) matchIndices.reverse()

		if (hideFulfilledOffers) {
			var unfulfilledIndices = []
			for (var j = 0; j < matchIndices.length; j++) {
				const _status = statusOffers[matchIndices[j]]
				var status_text = ''
				if (_status) {
					status_text = _status.toString();
				}
				if (!status_text.includes("Fulfilled")) unfulfilledIndices.push(j)
			}
			matchIndices = unfulfilledIndices.map(j => matchIndices[j])
		}

		return (
			<div class="container-offers">
				<br></br>
			<center><h2>offers</h2></center>
				{matchIndices.map((index) => (
				<div class="card">
					<div class="card-header">{datesOffers[index]}, edited [{editsOffers[index]}], status: [{statusOffers[index]}] </div>
					<div class="card-body">
					<h5 class="card-title">{index+1}. {namesOffers[index]}</h5>
				<h6 class="card-subtitle mb-2 text-muted">location: {locationsOffers[index]}</h6>
				<h6 class="card-subtitle mb-2 text-muted">labels: {labelsOffers[index]}</h6>
					<p class="card-text">{contactsOffers[index]}</p>
					<p class="card-text">{detailsOffers[index]}</p>
					<p class="card-text text-muted"><b>updates:</b> {updateOffers[index]}</p>
					</div>
				</div>
				))}
			</div>
		)			
		

    };

    export default Offers