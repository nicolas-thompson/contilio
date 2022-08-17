import { Typography } from '@mui/material';

import CSS from './ItemTitle.module.css';

const ItemTitle = ({ title }) => {
  return (
    <Typography variant="h3" gutterBottom component="div" className={CSS["item-title"]}>{title}</Typography>
  );
}

export default ItemTitle;