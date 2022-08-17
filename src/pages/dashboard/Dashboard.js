import React from 'react';

import Layout from '../../components/layout/Layout';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);

        this.setState({
          data: myJson
        })
      }.bind(this));
  };

  componentDidMount() {
    console.log('Dashboard mounted');
    this.getData();
  }

  render() {
    return (
      <Layout>
        <h1>Dashboard</h1>
        {
          this.state.data && this.state.data.length > 0 && this.state.data.map((item) => <p>{item.title}</p>)
        }
      </Layout>
    );
  }
}

export default Dashboard;
