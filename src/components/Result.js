import React from "react";
import saveAs from 'file-saver';


import '../styles//Result.scss';

class Result extends React.Component {
  _savePhoneNumbers = () => {
    const data = JSON.stringify(this.props.data, null, 2);

    saveAs(
      new Blob([data], {
        type: 'application/json;charset=utf-8'
      }),
      'database.json'
    );
  };

  render() {
    const { show, _closeModal, data, number } = this.props;

    const min = data.map(d => d.phoneNumber)
      .reduce((prev, next) => (next < prev ? next : prev ), data[0] && data[0].phoneNumber);

    const max = data.map(d => d.phoneNumber)
      .reduce((prev, next) => (next > prev ? next : prev ), '');

    return(
      <div className={`modal ${show && 'show'}`}>
        <div className="modal-content ba b--light-gray">
          <span
            className="close"
            onClick={_closeModal}
          >&times;</span>
          <div className="overview w-100 flex flex-column justify-start items-center">
            <span className="min w-50 tc pa2 mb1 bg-black-10"><span className="b">min number:</span> {min}</span>
            <span className="max w-50 tc pa2 mb1 bg-black-10"><span className="b">max number:</span> {max}</span>
            <span className="total w-50 tc pa2 mb2 bg-black-10"><span className="b">Amount Generated:</span> <span className="black">{number}</span></span>
            <button
              className="outline-0 w-30 mt2 pointer b pa2 ttu bw2 ba b--gray fw1 f6"
              onClick={this._savePhoneNumbers}
            >Save Results</button>
          </div>
        </div>
      </div> 
    )
  }
};

export default Result;
