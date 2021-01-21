import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
        <Button>Aulas</Button>
        <Button>Consultoria</Button>
        <Button>Design</Button>
      </ButtonGroup>
    </div>
  );
}