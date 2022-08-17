import React from 'react';

import Layout from '../../components/layout/Layout';

class Dashboard extends React.Component {


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
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  }

  componentDidMount() {
    console.log('Dashboard mounted');
    this.getData();
  }

  render() {
    return (
      <Layout>
        <h1>Dashboard</h1>
      </Layout>
    );
  }
}

export default Dashboard;
