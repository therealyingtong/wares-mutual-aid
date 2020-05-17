import React from 'react'
import UpdateForm from './updateForm';

class Needs extends React.Component {
	
	render() {

		var matchIndices = []
		var unfulfilledIndices = []
		var partialIndices = []

		var partialCount = 0
		var fulfilledCount = 0

		for (var i = 0; i < this.props.datesNeeds.length; i++){
			const _status = this.props.statusNeeds[i]
			var status_text = ''
			if (_status) {
				status_text = _status.toString();
			}
			if (status_text.includes("Partial")) partialCount++
			if (status_text.includes("Fulfilled")) fulfilledCount++
		}

		if (this.props.targetLabelNeeds){
			for (var i = 0; i < this.props.labelsNeeds.length; i++) {
				const label_text = this.props.labelsNeeds[i].toString().toLowerCase()
				const detailsNeeds_text = this.props.detailsNeeds[i].toString().toLowerCase()
				const namesNeeds_text = this.props.namesNeeds[i].toString().toLowerCase()

				if (label_text.includes(this.props.targetLabelNeeds.toLowerCase()) || detailsNeeds_text.includes(this.props.targetLabelNeeds.toLowerCase()) || namesNeeds_text.includes(this.props.targetLabelNeeds.toLowerCase())) matchIndices.push(i)
			}
		} else {
			matchIndices = [...Array(this.props.datesNeeds.length).keys()];
		}

		if (this.props.newestFirstNeeds) matchIndices.reverse()

		if (this.props.hideFulfilledNeeds) {
			for (var j = 0; j < matchIndices.length; j++) {
				const _status = this.props.statusNeeds[matchIndices[j]]
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
				<center>fulfilled: {fulfilledCount}, partial: {partialCount}, total: {this.props.datesNeeds.length}</center><br></br>
				{matchIndices.map((index) => (
				<div class="card">
					<div class="card-header">{this.props.datesNeeds[index]}, edited [{this.props.editsNeeds[index]}], status [{this.props.statusNeeds[index]}]</div>
					<div class="card-body">
						<h5 class="card-title">{index+1}. {this.props.namesNeeds[index]}</h5>
						<h6 class="card-subtitle mb-2 text-muted">location: {this.props.locationsNeeds[index]}</h6>
						<h6 class="card-subtitle mb-2 text-muted">labels: {this.props.labelsNeeds[index]}</h6>
						<p class="card-text">{this.props.contactsNeeds[index]}</p>
						<p class="card-text">{this.props.detailsNeeds[index]}</p>
						<UpdateForm index = {index}
						updateOffers = {this.props.updateNeeds}
						formText = {"updates"}
						sheetName = {"Needs"}
                        ></UpdateForm>
						<UpdateForm index = {index}
						updateOffers = {this.props.assistedBy}
						formText = {"assisted by"}
						sheetName = {"Needs"}
						></UpdateForm>
					</div>
				</div>
				))}
				
			</div>

		)			
    };

}



export default Needs