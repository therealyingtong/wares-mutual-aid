import React, { Component } from 'react';
import Needs from './components/needs';
import Offers from './components/offers';

class App extends Component {

	constructor(props){
		super(props)
		this.state = {
			dates: [],
			edits: [],
			names: [],
			locations: [],
			contacts: [],
			details: [],
			labels: [],
			updates: [],
			status: [],
			assistedBy: [],
			targetLabel: '',
			dates1: [],
			edits1: [],
			names1: [],
			locations1: [],
			contacts1: [],
			details1: [],
			labels1: [],
			updates1: [],
			status1: [],
			targetLabel1: ''
		};
		this.handleChange = this.handleChange.bind(this)
		this.handleChange1 = this.handleChange1.bind(this)
	}

	handleChange(event) {
		this.setState({ targetLabel: event.target.value })
	}

	handleChange1(event) {
		this.setState({ targetLabel1: event.target.value })
	}
  //get rest api

  async componentDidMount() {
	const sheetId = '1XzScy_hXVg7hVScZ_g6RBxq-ubkyvt601zD88w1IOo4';
	const APIKey = 'AIzaSyAifplI-xEZ993f7tup1u2OHkNonXmZV6o'
	const options = {
		method: 'GET',
		mode: 'cors'
	}

	const keys = ['dates', 'edits', 'names', 'locations', 'contacts', 'details', 'labels', 'status', 'assistedBy', 'updates']
	const rowStart = '4'
	const rowEnd = '200'
	const columns = ['A', 'K', 'B', 'H', 'I', 'F', 'E', 'J', 'L', 'M']

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

	const keys1 = ['dates1', 'edits1', 'names1', 'locations1', 'contacts1', 'details1', 'labels1', 'status1', 'updates1']
	const rowStart1 = '4'
	const rowEnd1 = '200'
	const columns1 = ['A', 'K', 'B', 'H', 'I', 'F', 'E', 'J', 'L']

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

	componentDidUpdate(prevProps) {
		// Typical usage (don't forget to compare props):
		if (this.props.targetLabel !== prevProps.targetLabel) {
		  this.fetchData(this.props.targetLabel);
		}
	  }

  
  //rendering component with data from rest api
  render() {
    return (
	<>
	<div style={{width: '45%', float: 'left', paddingLeft: '5%'}}>
	<form>
		<label><b>filter needs:</b> ‎</label>
        <input
          type="text"
          value={this.state.targetLabel}
          onChange={this.handleChange}
        />
		<h6>(try typing "funds", "$", "food", etc.)</h6>
    </form>
	</div>
	<div style={{width: '45%', float: 'right', paddingRight: '5%'}}>
	<form>
		<label><b>filter offers: ‎‎‎‎‎‎‎‎</b> </label>
        <input 
		  onChange={this.handleChange1}
        />
		<h6>(try typing "funds", "$", "labour", etc.)</h6>
    </form>
	</div>
	< Needs dates = {this.state.dates}
	edits = {this.state.edits}
	names = {this.state.names}
	locations={this.state.locations}
	contacts={this.state.contacts}
	details={this.state.details} 
	labels={this.state.labels}
	status={this.state.status}
	updates={this.state.updates}
	assistedBy={this.state.assistedBy}
	targetLabel={this.state.targetLabel}
	/>
	< Offers dates1 = {this.state.dates1}
	edits1 = {this.state.edits1}
	names1 = {this.state.names1}
	locations1={this.state.locations1}
	contacts1={this.state.contacts1}
	details1={this.state.details1} 
	labels1={this.state.labels1}
	status1={this.state.status1}
	updates1={this.state.updates1}
	targetLabel1={this.state.targetLabel1}
	/>
	
	</>
	);
  }
}

export default App;
