import React, { useEffect, useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '500px',
    border: '1px black solid',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  equals: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '200px',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 'xxx-large',
    paddingTop: '58px',
    '&:hover': {
      color: '#929292',
      borderColor: 'white',
    },
  },
  number: {
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 'xx-large',
    '&:hover': {
      color: '#929292',
      borderColor: 'white',
    },
  },
  heightEquals: {
    height: '200px',
  },
}));

const App = () => {
  const [operand, setOperand] = useState('');
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState('');
  const [secondDisplay, setSecondDisplay] = useState('0');
  const classes = useStyles();

  const prevFirstState = operand;

  const resetAll = () => {
    setOperand('');
    setOperator(null);
    setResult('');
    setSecondDisplay('');
  };

  const handleClick = e => {
    e.preventDefault();
    setOperand(prevFirstState + e.target.innerText)
    setSecondDisplay(e.target.innerText);
  };

  const handleOperator = e => {
    e.preventDefault();
    setSecondDisplay('');
    setOperator(e.target.innerText);
    const arrayTemp = prevFirstState.split('');
    const getLast = arrayTemp[arrayTemp.length - 1];
    if (!['-','+','*','/'].includes(getLast)) {
      setOperand(prevFirstState + e.target.innerText);
      setOperator(null);
      setSecondDisplay('');
      setSecondDisplay(e.target.innerText);
    }
  };

  const handleResult = () => {
    const arrayTemp = prevFirstState.split('');
    const getLast = arrayTemp[arrayTemp.length - 1];
    if (!['-','+','*','/'].includes(getLast)) {
      const getResult = eval(operand);
      setResult(getResult);
      setOperand(prevFirstState + '=' + getResult);
    };
  };

  const handleDelete = () => {
    resetAll();
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} direction="column">
          <Grid item xs>
            <Paper className={classes.number+ ' number-top'} id="display">{operand}</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.number+ ' number-bottom'} id="display">{secondDisplay}</Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Paper onClick={() => handleDelete()} className={classes.number+ ' delete'} id="clear">AC</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper onClick={(e) => handleOperator(e)} className={classes.number+ ' operator'} id="divide">/</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper onClick={(e) => handleOperator(e)} className={classes.number+ ' operator'} id="multiply">x</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <Paper onClick={(e) => handleClick(e)} className={classes.number+' number'} id="seven">7</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper onClick={(e) => handleClick(e)} className={classes.number+' number'} id="eight">8</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper onClick={(e) => handleClick(e)} className={classes.number+' number'} id="nine">9</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper onClick={(e) => handleOperator(e)} className={classes.number+ ' operator'} id="substract">-</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper onClick={(e) => handleClick(e)} className={classes.number+' number'} id="four">4</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper onClick={(e) => handleClick(e)} className={classes.number+' number'} id="five">5</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper onClick={(e) => handleClick(e)} className={classes.number+' number'} id="six">6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper onClick={(e) => handleOperator(e)} className={classes.number+ ' operator'} id="add">+</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={9} container >
          <Grid container>
            <Grid item xs={4}>
              <Paper onClick={(e) => handleClick(e)} className={classes.number+' number'} id="one">1</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper onClick={(e) => handleClick(e)} className={classes.number+' number'} id="two">2</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper onClick={(e) => handleClick(e)} className={classes.number+' number'} id="three">3</Paper>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={8}>
              <Paper onClick={(e) => handleClick(e)} className={classes.number+' number'} id="zero">0</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper onClick={(e) => handleClick(e)} className={classes.number+ ' number'} id="decimal">.</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.heightEquals} item xs={3} direction="column">
          <Grid item xs>
            <Paper onClick={() => handleResult()} className={classes.equals+ ' equals'}>=</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
