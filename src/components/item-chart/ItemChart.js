import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";


/**
 * Item chart
 * @returns {JSX.Element}
 * @constructor
 * @component
 * return (
 * <ItemChart />
 * )
 */
class ItemChart extends React.Component {

  render() {
    const { attributes } = this.props;

    const chartAttributes = attributes.map((attribute) => {
      return {
        name: attribute.name + ` (${attribute.unit})`,
        value: attribute.value,
      };
    });

    return (
      <BarChart
        width={500}
        height={300}
        data={chartAttributes}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    );
  }
}

export default ItemChart;