import React from 'react';
import { Grid, Typography } from '@mui/material';

import Layout from '../../components/layout/Layout';
import ItemTitle from '../../components/item-title/ItemTitle';
import ItemAttributes from '../../components/item-attributes/ItemAttributes';
import ItemChart from '../../components/item-chart/ItemChart';
import ItemsSlider from '../../components/items-slider/ItemsSlider';

import CSS from './Dashboard.module.css';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: null,
      currentItemId: '1',
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
        const currentItem = this.getCurrentItem({ id: this.state.currentItemId });
        this.setState({
          currentItem: currentItem[0]
        })
      }
      );
  };

  componentDidMount() {
    this.getItems();
  }

  changeCurrentItem = (id) => {
    const currentItem = this.getCurrentItem({ id: id.toString() });
    this.setState({
      currentItem: currentItem[0]
    })
    this.setState({
      currentItemId: id.toString()
    });
  }

  render() {
    return (
      <Layout>
        <Typography className={CSS["page-title"]} variant="h1" gutterBottom component="div">Dashboard</Typography>
        <Grid container>
          <Grid item xs={12}>
            {this.state.currentItem && <ItemTitle title={this.state.currentItem.title} />}
          </Grid>
          <Grid item xs={6}>
            {this.state.currentItem && <ItemAttributes attributes={this.state.currentItem.attributes} />}
          </Grid>
          <Grid item xs={6}>
            {this.state.currentItem && <ItemChart attributes={this.state.currentItem.attributes} />}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            {this.state.items && <ItemsSlider items={this.state.items} changeCurrentItem={this.changeCurrentItem} />}
          </Grid>
        </Grid>
      </Layout >
    );
  }
}

export default Dashboard;
