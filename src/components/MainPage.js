import React from "react";
import ReactTable from "react-table";

import Modal from './Modal';
import Result from './Result';

import generateNumber from '../helpers/generateNumber';
import { Phone  } from '../assets';

import '../styles/MainPage.scss';

class MainPage extends React.Component {
  state = {
    data: [],
    error: true,
    number: null,
    show: false,
  };

  _handleChange = (event) => {
    const { value } = event.target;
    const disable = Number(value) < 1 || Number(value) > 10000 || !value;
    this.setState({
      number: Number(event.target.value),
      error: disable ? true : false,
    })
  };

  _generateNumbers = () => {
    const { number } = this.state;
    const generatedNumber = generateNumber(number);
    this.setState({
      data: generatedNumber,
      show: true,
    })
  };

  _closeModal = () => {
    this.setState({
      show: false,
    })
  };
  _openModal = () => {
    this.setState({
      show: true,
    })
  };

  render() {
    const { data, error, show, number } = this.state;
    return (
      <>
        <Modal>
          <Result
            show={show}
            _closeModal={this._closeModal}
            data={data}
            number={number}
          />
        </Modal>
        <div className="w-100 vh-100 bg-light-gray flex justify-center items-center">
          <div className="main_wrapper">
            <div className="w-100 h4 pa3 flex flex-column justify-center items-center bb b--light-gray">
              <Phone className="w3 h3 logo"/>
              <span className="f3 b black-80 mt2">Phone Number Generator</span>
            </div>
            <div className="main_container w-100">
              <div className="w-100 pv3 control flex justify-center item-center">
                <input
                  className="error input-number outline-0 w4 bw1 ba b--gray"
                  type="number"
                  min="1"
                  max="10000"
                  placeholder="Eg: 15"
                  name="number"
                  onChange={this._handleChange}
                />
                <button
                  className="generate bn outline-0 pointer ml1 white ph2 ttu fw3 f6"
                  onClick={this._generateNumbers}
                  disabled={error}
                >Generate</button>
                <button
                  className={`${!!data.length ? 'db' : 'dn'} outline-0 pointer ml1 ph2 ttu fw3 f6 ba bw2 b--blue`}
                  onClick={this._generateNumbers}
                >View Result</button>
              </div>
              <div className="table flex justify-center">
                <ReactTable
                  data={data}
                  defaultPageSize={10}
                  columns={[{
                    Header: 'ID',
                    accessor: 'id',
                    className: 'flex justify-start fw1',
                    headerClassName: 'flex justify-start b outline-0'
                  },
                  {
                    Header: 'Phone Numbers',
                    accessor: 'phoneNumber',
                    className: 'flex justify-end',
                    headerClassName: 'flex justify-end b outline-0'
                  }]}
                  noDataText={'Numbers Not Generated'}
                  className="-striped -highlight w-50 outline-0"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  };
};

export default MainPage;
