import React from 'react'

class Offers extends React.Component {
	
	render() {

		var matchIndices = []
		var unfulfilledIndices = []
		var partialIndices = []

		var partialCount = 0
		var fulfilledCount = 0

		for (var i = 0; i < this.props.datesOffers.length; i++){
			const _status = this.props.statusOffers[i]
			var status_text = ''
			if (_status) {
				status_text = _status.toString();
			}
			if (status_text.includes("Partial")) partialCount++
			if (status_text.includes("Fulfilled")) fulfilledCount++
		}

		if (this.props.targetLabelOffers){
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
					<div class="card-header">{this.props.datesOffers[index]}, edited [{this.props.editsOffers[index]}], status [{this.props.statusOffers[index]}] </div>
					<div class="card-body">
					<h5 class="card-title">{index+1}. {this.props.namesOffers[index]}</h5>
				<h6 class="card-subtitle mb-2 text-muted">location: {this.props.locationsOffers[index]}</h6>
				<h6 class="card-subtitle mb-2 text-muted">labels: {this.props.labelsOffers[index]}</h6>
					<p class="card-text">{this.props.contactsOffers[index]}</p>
					<p class="card-text">{this.props.detailsOffers[index]}</p>
					<p class="card-text text-muted"><b>updates:</b> </p>
					<textarea rows="2" style={{width:"90%"}} value={this.props.updateOffers[index]}></textarea>
					<input type="submit" value="submit changes"></input>
					{/* <form action="/action_page.php">
					<label for="fname">First name:</label><br></br>
					<input type="text" id="fname" name="fname" value="John"></input><br></br>
					<label for="lname">Last name:</label><br></br>
					<input type="text" id="lname" name="lname" value="Doe"><br></br></input>
					<input type="submit" value="Submit"></input>
					</form>  */}
					</div>
				</div>
				))}
			</div>
		)			
		

    };

}
    

export default Offers