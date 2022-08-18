import * as React from 'react';
import Slider from '@mui/material/Slider';

import CSS from './ItemsSlider.module.css';

class DiscreteSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleSliderChange = (event, newItem) => {
    this.props.changeCurrentItem(newItem);
  };

  render() {
    const { items } = this.props;
    return (
      <Slider
        className={CSS["items-slider"]}
        aria-label="Items Slider"
        defaultValue={0}
        valueLabelDisplay="on"
        step={1}
        marks
        min={1}
        max={items.length}
        onChange={this.handleSliderChange}
      />
    );
  }
}

export default DiscreteSlider;