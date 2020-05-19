import React from 'react'
import UpdateForm from './updateForm';

class Needs extends React.Component {

	constructor(props) {
		super(props);

		this.getRowNumber = this.getRowNumber.bind(this)
	}

	getRowNumber(name, date, contact, details, namesNeeds, datesNeeds, contactsNeeds, detailsNeeds) {

		var namesNeeds_text = '';
		var datesNeeds_text = '';
		var contactsNeeds_text = '';
		var detailsNeeds_text = '';

		for (var i = 0; i < datesNeeds.length; i++) {
			if (typeof(namesNeeds[i]) != "undefined") namesNeeds_text = namesNeeds[i].toString();
			if (typeof(datesNeeds[i]) != "undefined") datesNeeds_text = datesNeeds[i].toString();
			if (typeof(contactsNeeds[i]) != "undefined") contactsNeeds_text = contactsNeeds[i].toString();
			if (typeof(detailsNeeds[i]) != "undefined") detailsNeeds_text = detailsNeeds[i].toString();

			if (
				namesNeeds_text.includes(name) &&
				datesNeeds_text.includes(date) &&
				contactsNeeds_text.includes(contact) &&
				detailsNeeds_text.includes(details)
			) {
				const rowNumber = i + 4;
				return rowNumber;
			}
		}
	}
	
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
				var updateNeeds_text = ''
				if (this.props.updateNeeds[i]) updateNeeds_text = this.props.updateNeeds[i].toString().toLowerCase()
				var assistedBy_text = ''
				if (this.props.assistedBy[i]) assistedBy_text = this.props.assistedBy[i].toString().toLowerCase()

				if (label_text.includes(this.props.targetLabelNeeds.toLowerCase()) || detailsNeeds_text.includes(this.props.targetLabelNeeds.toLowerCase()) || namesNeeds_text.includes(this.props.targetLabelNeeds.toLowerCase()) || updateNeeds_text.includes(this.props.targetLabelNeeds) || assistedBy_text.includes(this.props.targetLabelNeeds)) matchIndices.push(i)
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
					<div class="card-header">{this.props.datesNeeds[index]}, 
					needed by [{this.props.byWhen[index]}],
					edited [{this.props.editsNeeds[index]}], status [{this.props.statusNeeds[index]}]</div>
					<div class="card-body">
						<h5 class="card-title">{index+1}. {this.props.namesNeeds[index]}</h5>
						<h6 class="card-subtitle mb-2 text-muted">location: {this.props.locationsNeeds[index]}</h6>
						<h6 class="card-subtitle mb-2 text-muted">labels: {this.props.labelsNeeds[index]}</h6>
						<p class="card-text">{this.props.contactsNeeds[index]}</p>
						<p class="card-text">{this.props.detailsNeeds[index]}</p>
						<UpdateForm index = {index}
						updates = {this.props.updateNeeds}
						formText = {"updates"}
						sheetName = {"Needs"}
						column = {"H"}
						row={this.getRowNumber(
							this.props.namesNeeds[index],
							this.props.datesNeeds[index],
							this.props.contactsNeeds[index],
							this.props.detailsNeeds[index],
							this.props.namesNeeds,
							this.props.datesNeeds,
							this.props.contactsNeeds,
							this.props.detailsNeeds
						)}
						gid = {"1282909433"}
                        ></UpdateForm>
						<UpdateForm index = {index}
						updates = {this.props.assistedBy}
						formText = {"assisted by"}
						sheetName = {"Needs"}
						column = {"I"}
						row={this.getRowNumber(
							this.props.namesNeeds[index],
							this.props.datesNeeds[index],
							this.props.contactsNeeds[index],
							this.props.detailsNeeds[index],
							this.props.namesNeeds,
							this.props.datesNeeds,
							this.props.contactsNeeds,
							this.props.detailsNeeds
						)}
						gid = {"1282909433"}

						></UpdateForm>
					</div>
				</div>
				))}
				
			</div>

		)			
    };

}



export default Needs