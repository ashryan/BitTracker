import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}




export default function BasicTable(props) {
  const classes = useStyles();

  const pos1 = props.coins[0]
  const pos2 = props.coins[1]
  const pos3 = props.coins[2]
  const pos4 = props.coins[3]
  const pos5 = props.coins[4]
console.log(pos2)

  const rows = [
    createData(pos1.name, `${pos1.price_change_percentage_24h}%`, `£${pos1.current_price}`, `£${pos1.ath}`,pos1.market_cap_rank),
    createData(pos2.name, `${pos2.price_change_percentage_24h}%`, `£${pos2.current_price}`,`£${pos1.ath}`,pos2.market_cap_rank),
    createData(pos3.name, `${pos3.price_change_percentage_24h}%`, `£${pos3.current_price}`,`£${pos1.ath}`, pos3.market_cap_rank),
    createData(pos4.name, `${pos4.price_change_percentage_24h}%`, `£${pos4.current_price}`,`£${pos1.ath}`, pos4.market_cap_rank),
    createData(pos5.name, `${pos5.price_change_percentage_24h}%`, `£${pos5.current_price}`,`£${pos1.ath}`, pos5.market_cap_rank),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Top 5 Biggest Increases (24hr)</TableCell>
            <TableCell align="right">Price Increase (24hr)</TableCell>
            <TableCell align="right">Current Price</TableCell>
            <TableCell align="right">ATH</TableCell>
            <TableCell align="right">Market Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}