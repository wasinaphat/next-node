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

export default function Index({ }: Props): ReactElement {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Stock workshop</title>
      </Head>
    </div>
  )
}

Index.getInitialProps = ({ res, err }) => {
  res.writeHead(301, { Location: 'login' });
  res.end();
  return {}
}
