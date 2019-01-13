import React, { Component } from 'react';
import deepAIResult from '../util/deepai';

class Compare extends Component {
    state = {
        compareResult: "",
        inputText: ""
    }
    handleSubmit = (inputText) => {
        console.log("comparing...");
        this.setState({ compareResult: deepAIResult(inputText) });
        console.log(this.state.compareResult);
    }
    handleChange = ({ value }) => {
        this.setState({ inputText: value });
    }
    render() {
        const infoBox = {
            borderWidth: "thin",
            borderRadius: "8px",
            borderColor: "black",
            background: "white",
            opacity: ".8",
            margin: "15px 450px 15px 450px",
            padding: "10px 0px 10px 0px"
        }
        return (
            <div
                style={{
                    textAlign: "center",
                    verticalAlign: "middle",
                    display: "table-cell",
                    margin: "0 0 100px 0"
                }}>
                <div style={infoBox}>
                    <h1>BITMOJI COMPARE</h1>
                    <h4>Upload image and press submit for similarity percentage!</h4>
                </div>
                <form className="form-inline">
                    <div style={{ margin: "0 auto" }}>
                        <div className="form-group mx-sm-2 mr-2" style={{ display: "inline-block" }}>
                            <label htmlFor="inputURL" />
                            <input style={{ opacity: ".8", width: "700px" }} type="text" onChange={() => this.handleChange} className="form-control" id="inputURL" placeholder="URL" />
                        </div>
                        <button style={{ display: "inline-block" }} type="submit" className="btn btn-primary" onClick={() => this.handleSubmit(this.state.inputText)}>Upload</button>
                    </div>
                </form>
                <div id="CompareResult">{this.state.compareResult.value}</div>
            </div >
        );
    }
}

export default Compare;