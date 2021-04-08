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

function createData(name, up24h, price, ath, marketCap) {
  return { name, up24h, price, ath, marketCap };
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
    createData(pos2.name, `${pos2.price_change_percentage_24h}%`, `£${pos2.current_price}`,`£${pos2.ath}`,pos2.market_cap_rank),
    createData(pos3.name, `${pos3.price_change_percentage_24h}%`, `£${pos3.current_price}`,`£${pos3.ath}`, pos3.market_cap_rank),
    createData(pos4.name, `${pos4.price_change_percentage_24h}%`, `£${pos4.current_price}`,`£${pos4.ath}`, pos4.market_cap_rank),
    createData(pos5.name, `${pos5.price_change_percentage_24h}%`, `£${pos5.current_price}`,`£${pos5.ath}`, pos5.market_cap_rank),
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
            <TableCell align="right">Market Cap Pos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.up24h}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.ath}</TableCell>
              <TableCell align="right">{row.marketCap}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}