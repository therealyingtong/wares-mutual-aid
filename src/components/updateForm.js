import React from 'react'

class UpdateForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {value: this.props.updates[this.props.index]}
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.handleChange = this.handleChange.bind(this);   
		this.replaceUndefWithEmptyString = this.replaceUndefWithEmptyString.bind(this)

    }
    
    async handleSubmit(event){
        // console.log(this.state.value)
        // var copyText = document.getElementById("updates");
        // copyText.select();
        // copyText.setSelectionRange(0,99999);
        // document.execCommand("copy");

        // alert("the following text has been copied to your clipboard:\n\n'" + this.state.value + "'\n\npaste it in the spreadsheet cell. redirecting...");

        const sheetId = '1XzScy_hXVg7hVScZ_g6RBxq-ubkyvt601zD88w1IOo4';
        const range = this.props.column + this.props.row
        const url = "https://docs.google.com/spreadsheets/d/" + sheetId + "/edit#gid=" + this.props.gid + "&range=" + range

        window.open(url, "_blank", "scrollbars=1");
        event.preventDefault()
    }

    handleChange(event){
        console.log(this.state.value)
        this.setState({value: event.target.value});
    }

	replaceUndefWithEmptyString(string){
        console.log(string)
		if (typeof(string) == "undefined") {
            return '' 
        } else {
            return string
        }
	}

    render(){

        return(
            <form onSubmit = {this.handleSubmit}>
                <p><b>{this.props.formText}:</b><br></br>
                <textarea disabled rows="2" style={{width:"90%"}} value={this.state.value} defaultValue={this.props.updates[this.props.index]} onChange={this.handleChange} id="updates"></textarea>
                <input type="submit" value="edit on spreadsheet"></input>
                </p> 
            </form> 
        )
    }
}

export default UpdateForm