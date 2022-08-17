import React from 'react';
import { Typography } from '@mui/material';

import Layout from '../../components/layout/Layout';
import ItemTitle from '../../components/item-title/ItemTitle';

import CSS from './Dashboard.module.css';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: null,
    };
  }

  getCurrentItem = ({ id }) => {
    const { items } = this.state;
    const currentItem = items.filter(item => item.id === id);
    return currentItem;
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
        const currentItem = this.getCurrentItem({ id: '1' });
        this.setState({
          currentItem: currentItem[0]
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
        <Typography className={CSS["page-title"]} variant="h1" gutterBottom component="div">Dashboard</Typography>
        {this.state.currentItem && <ItemTitle title={this.state.currentItem.title} />}
      </Layout >
    );
  }
}

export default Dashboard;
