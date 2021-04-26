import React, { ReactElement } from 'react'
import Head from 'next/head'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
interface Props {

}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function index({ }: Props): ReactElement {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Stock workshop</title>
        
      </Head>
      <h1>Home</h1>
      <div className={classes.root}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
      </Button>
        <Button variant="contained" color="secondary">
          Secondary
      </Button>
        <Button variant="contained" disabled>
          Disabled
      </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
      </Button>
      </div>
    </div>
  )
}
