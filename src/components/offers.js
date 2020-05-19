import React from 'react'
import UpdateForm from './updateForm';

class Offers extends React.Component {

	constructor(props) {
		super(props);

		this.getRowNumber = this.getRowNumber.bind(this)
	}

	getRowNumber(name, date, contact, details, namesOffers, datesOffers, contactsOffers, detailsOffers) {

		var namesOffers_text = '';
		var datesOffers_text = '';
		var contactsOffers_text = '';
		var detailsOffers_text = '';

		for (var i = 0; i < datesOffers.length; i++) {
			if (typeof(namesOffers[i]) != "undefined") namesOffers_text = namesOffers[i].toString();
			if (typeof(datesOffers[i]) != "undefined") datesOffers_text = datesOffers[i].toString();
			if (typeof(contactsOffers[i]) != "undefined") contactsOffers_text = contactsOffers[i].toString();
			if (typeof(detailsOffers[i]) != "undefined") detailsOffers_text = detailsOffers[i].toString();

			if (
				namesOffers_text.includes(name) &&
				datesOffers_text.includes(date) &&
				contactsOffers_text.includes(contact) &&
				detailsOffers_text.includes(details)
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

		for (var i = 0; i < this.props.datesOffers.length; i++) {
			const _status = this.props.statusOffers[i]
			var status_text = ''
			if (_status) {
				status_text = _status.toString();
			}
			if (status_text.includes("Partial")) partialCount++
			if (status_text.includes("Fulfilled")) fulfilledCount++
		}

		if (this.props.targetLabelOffers) {
			for (var i = 0; i < this.props.labelsOffers.length; i++) {
				const label_text = this.props.labelsOffers[i].toString()
				const detailsOffers_text = this.props.detailsOffers[i].toString()
				const namesOffers_text = this.props.namesOffers[i].toString()
				if (label_text.toLowerCase().includes(this.props.targetLabelOffers.toLowerCase()) || detailsOffers_text.toLowerCase().includes(this.props.targetLabelOffers.toLowerCase()) || namesOffers_text.toLowerCase().includes(this.props.targetLabelOffers.toLowerCase())) matchIndices.push(i)
			}
		} else {
			matchIndices = [...Array(this.props.datesOffers.length).keys()];
		}

		if (this.props.newestFirstOffers) matchIndices.reverse()

		if (this.props.hideFulfilledOffers) {
			for (var j = 0; j < matchIndices.length; j++) {
				const _status = this.props.statusOffers[matchIndices[j]]
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
				<center>fulfilled: {fulfilledCount}, partial: {partialCount}, total: {this.props.datesOffers.length}</center><br></br>

				{matchIndices.map((index) => (
					<div class="card">
						<div class="card-header">{this.props.datesOffers[index]}, until [{this.props.untilWhen[index]}], edited [{this.props.editsOffers[index]}], status [{this.props.statusOffers[index]}] </div>
						<div class="card-body">
							<h5 class="card-title">{index + 1}. {this.props.namesOffers[index]}</h5>
							<h6 class="card-subtitle mb-2 text-muted">location: {this.props.locationsOffers[index]}</h6>
							<h6 class="card-subtitle mb-2 text-muted">labels: {this.props.labelsOffers[index]}</h6>
							<p class="card-text">{this.props.contactsOffers[index]}</p>
							<p class="card-text">{this.props.detailsOffers[index]}</p>
							<UpdateForm index={index}
								updates={this.props.updateOffers}
								gid={"1773210002"}
								formText={"updates"}
								sheetName={"Offers"}
								column={"I"}
								row={this.getRowNumber(
									this.props.namesOffers[index],
									this.props.datesOffers[index],
									this.props.contactsOffers[index],
									this.props.detailsOffers[index],
									this.props.namesOffers,
									this.props.datesOffers,
									this.props.contactsOffers,
									this.props.detailsOffers
								)}
							></UpdateForm>
						</div>
					</div>
				))}
			</div>
		)


	};

}


export default Offers