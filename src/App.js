import React, { Component } from 'react';
import Needs from './components/needs';
import Offers from './components/offers';

class App extends Component {

	constructor(props){
		super(props)
		this.state = {
			datesNeeds: [],
			byWhen: [],
			editsNeeds: [],
			namesNeeds: [],
			locationsNeeds: [],
			contactsNeeds: [],
			detailsNeeds: [],
			labelsNeeds: [],
			updateNeeds: [],
			statusNeeds: [],
			assistedBy: [],
			datesOffers: [],
			untilWhen: [],
			editsOffers: [],
			namesOffers: [],
			locationsOffers: [],
			contactsOffers: [],
			detailsOffers: [],
			labelsOffers: [],
			updateOffers: [],
			statusOffers: [],
			targetLabelNeeds: '',
			targetLabelOffers: '',
			hideFulfilledNeeds: true,
			hideFulfilledOffers: true,
			newestFirstNeeds: true,
			newestFirstOffers: true
		};
		this.handleFilterNeeds = this.handleFilterNeeds.bind(this)
		this.handleFilterOffers = this.handleFilterOffers.bind(this)
		this.handleNewestNeeds = this.handleNewestNeeds.bind(this)
		this.handleNewestOffers = this.handleNewestOffers.bind(this)
		this.handleFulfilledNeeds = this.handleFulfilledNeeds.bind(this)
		this.handleFulfilledOffers = this.handleFulfilledOffers.bind(this)
	}


	handleFilterNeeds(event) {
		this.setState({ targetLabelNeeds: event.target.value })
	}

	handleFilterOffers(event) {
		this.setState({ targetLabelOffers: event.target.value })
	}

	handleNewestNeeds(event) {
		const target = event.target;
		const value = target.name === 'newestFirstNeeds' ? target.checked : target.value;
		const name = target.name;
		this.setState({
		  [name]: value    });	
	}

	handleNewestOffers(event) {
		const target = event.target;
		const value = target.name === 'newestFirstOffers' ? target.checked : target.value;
		const name = target.name;
		this.setState({
		  [name]: value    });	
	}

	handleFulfilledNeeds(event) {
		const target = event.target;
		const value = target.name === 'hideFulfilledNeeds' ? target.checked : target.value;
		const name = target.name;
		this.setState({
		  [name]: value    });
	}

	handleFulfilledOffers(event) {
		const target = event.target;
		const value = target.name === 'hideFulfilledOffers' ? target.checked : target.value;
		const name = target.name;
		this.setState({
		  [name]: value    });
	}

  //get rest api

  async componentDidMount() {
	const sheetId = '1XzScy_hXVg7hVScZ_g6RBxq-ubkyvt601zD88w1IOo4';
	const APIKey = 'AIzaSyAifplI-xEZ993f7tup1u2OHkNonXmZV6o'
	const options = {
		method: 'GET',
		mode: 'cors'
	}

	const keys = ['datesNeeds', 'byWhen', 'editsNeeds', 'namesNeeds', 'locationsNeeds', 'contactsNeeds', 'detailsNeeds', 'labelsNeeds', 'statusNeeds', 'assistedBy', 'updateNeeds']
	const rowStart = '4'
	const rowEnd = '200'
	const columns = ['A', 'G', 'K', 'B', 'H', 'I', 'F', 'E', 'J', 'L', 'M']

	for (var i = 0; i < keys.length; i++){
		const range = columns[i] + rowStart + ':' + columns[i] + rowEnd
		const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetId + '/values/Needs!' + range + '?key=' + APIKey
		const res = await fetch(url, options)
		const data = await res.json()
		var key = keys[i]
		var val = data["values"]
		var obj = {}
		obj[key] = val
		this.setState(obj)
	}

	const keys1 = ['datesOffers', 'untilWhen', 'editsOffers', 'namesOffers', 'locationsOffers', 'contactsOffers', 'detailsOffers', 'labelsOffers', 'statusOffers', 'updateOffers']
	const rowStart1 = '4'
	const rowEnd1 = '200'
	const columns1 = ['A', 'G', 'K', 'B', 'H', 'I', 'F', 'E', 'J', 'L']

	for (var i = 0; i < keys1.length; i++){
		const range = columns1[i] + rowStart1 + ':' + columns1[i] + rowEnd1
		const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetId + '/values/Offers!' + range + '?key=' + APIKey

		const res = await fetch(url, options)
		const data = await res.json()
		var key = keys1[i]
		var val = data["values"]
		var obj = {}
		obj[key] = val
		this.setState(obj)
	}
}
  
  //rendering component with data from rest api
  render() {
    return (
	<>
	<div style={{width: '45%', float: 'left', paddingLeft: '5%'}}>
	<form>
		<label><b>filter needs:</b></label>
        <input 
          type="text"
          value={this.state.targetLabelNeeds}
          onChange={this.handleFilterNeeds}
        />
		<h6>(try "funds", "food", "urgent", etc.)</h6>
		<br></br>
    </form>
	<input type="checkbox" name="hideFulfilledNeeds" checked={this.state.hideFulfilledNeeds} onChange={this.handleFulfilledNeeds}></input>
	<label for="hideFulfilledNeeds"> hide fulfilled needs</label><br></br>
	<input type="checkbox" id="newestFirstNeeds" name="newestFirstNeeds" checked={this.state.newestFirstNeeds} value="newestFirstNeeds" onChange={this.handleNewestNeeds}></input>
	<label for="newestFirstNeeds"> show newest first</label><br></br>
	</div>
	
	<div style={{width: '45%', float: 'right', paddingRight: '5%'}}>
	<form>
		<label><b>filter offers: ‎‎‎‎‎‎‎‎</b></label>
        <input 
		  onChange={this.handleFilterOffers}
        />
		<h6>(try "$", "grocery", "labour", etc.)</h6>
		<br></br>
    </form>
	<input type="checkbox" name="hideFulfilledOffers" checked={this.state.hideFulfilledOffers} onChange={this.handleFulfilledOffers}></input>
	<label for="hideFulfilledOffers"> hide fulfilled offers</label><br></br>
	<input type="checkbox" id="newestFirstOffers" name="newestFirstOffers" checked={this.state.newestFirstOffers} value="newestFirstOffers" onChange={this.handleNewestOffers}></input>
	<label for="newestFirstOffers"> show newest first</label><br></br>
	</div>
	< Needs datesNeeds = {this.state.datesNeeds}
	byWhen = {this.state.byWhen}
	editsNeeds = {this.state.editsNeeds}
	namesNeeds = {this.state.namesNeeds}
	locationsNeeds={this.state.locationsNeeds}
	contactsNeeds={this.state.contactsNeeds}
	detailsNeeds={this.state.detailsNeeds} 
	labelsNeeds={this.state.labelsNeeds}
	statusNeeds={this.state.statusNeeds}
	updateNeeds={this.state.updateNeeds}
	assistedBy={this.state.assistedBy}
	targetLabelNeeds={this.state.targetLabelNeeds}
	hideFulfilledNeeds={this.state.hideFulfilledNeeds}
	newestFirstNeeds={this.state.newestFirstNeeds}
	/>
    < Offers datesOffers = {this.state.datesOffers}
	untilWhen = {this.state.untilWhen}
	editsOffers = {this.state.editsOffers}
	namesOffers = {this.state.namesOffers}
	locationsOffers={this.state.locationsOffers}
	contactsOffers={this.state.contactsOffers}
	detailsOffers={this.state.detailsOffers} 
	labelsOffers={this.state.labelsOffers}
	statusOffers={this.state.statusOffers}
	updateOffers={this.state.updateOffers}
	targetLabelOffers={this.state.targetLabelOffers}
	hideFulfilledOffers={this.state.hideFulfilledOffers}
	newestFirstOffers={this.state.newestFirstOffers}
	/>
	
	</>
	);
  }
}

export default App;
