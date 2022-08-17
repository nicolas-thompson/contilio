import React from 'react';

import Layout from '../../components/layout/Layout';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      getCurrentItem: null,
    };
  }

  getCurrentItem = ({ id }) => {
    const { items } = this.state;
    const currentItem = items.filter(item => item.id === id);
    console.log("currentItem: ", currentItem)
  }

  getItems = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          items: json
        })
      })
      .then(() => {
        this.setState({
          currentItem: this.getCurrentItem({ id: '1' })
        })
      }
      );
  };

  componentDidMount() {
    this.getItems();
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
