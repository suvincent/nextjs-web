import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/academic/web3';
import verify from '../../../ethereum/academic/verify';
import CryptoJS from 'crypto-js';

class UploadIndex extends Component {
  state = {
    selectedFile: null,
    hashValue: '',
    studentAddr: '',
    errorMessage: '',
    loading: false
  };

  onFileChange = event => {
    this.setState({
      selectedFile: event.target.files[0],
      errorMessage: ''
    });

    const curFile = event.target.files[0];
    const reader = new FileReader();
    var that = this;
    reader.readAsText(curFile);
    reader.onload = function (e) {
      //console.log('file:', e.target.result);
      let jsonData = JSON.parse(this.result);
      //console.log(jsonData.issuers[0].address);
      that.setState({
        studentAddr: jsonData.data[0].address
      });
      console.log("student's address: ", that.state.studentAddr);
    };
    // hash json
    const reader2 = new FileReader();
    reader2.readAsArrayBuffer(curFile);
    reader2.onload = function (e) {
      var wordArray = CryptoJS.lib.WordArray.create(reader2.result);
      var hash = CryptoJS.SHA256(wordArray).toString();
      that.setState({ hashValue: hash });
      console.log("hashing value: ", that.state.hashValue);
    };
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
        </div>
      );
    }
  };

  onClick = async () => {
    this.setState({ loading: true, errorMessage: '' });
    //console.log(this.state.hashValue);
    try {
      const accounts = await web3.eth.getAccounts();
      await verify.methods.upload(this.state.hashValue, this.state.studentAddr).send({
        from: accounts[0]
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Upload Certificates</h1>
        <Link route="/Academic/school/students">
          <a>
            <Button
              floated="right"
              content='View All Transcripts'
              primary={true}
              style={{ marginBottom: 20 }}
            />
          </a>
        </Link>
        <br />
        <Form error={!!this.state.errorMessage}>
          <h3>Choose a JSON file</h3>
          <input
            type="file"
            onChange={this.onFileChange}
            accept="application/json"
            style={{ marginBottom: 20 }}
          />
          {this.fileData()}
          <a>
            <Button
              onClick={this.onClick}
              loading={this.state.loading}
              content='Upload'
              icon='upload'
              primary={true}
              style={{ marginTop: 10, marginBottom: 20 }}
            />
          </a>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
      </Layout>
    );
  }
}

export default UploadIndex;