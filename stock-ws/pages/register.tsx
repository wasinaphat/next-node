import { createStyles, makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Input, TextField } from '@material-ui/core';
import loginStyle from '../styles/login.style'
import loginCSS from '../public/static/css/login.module.css'
import Router from 'next/router'
interface Props {

}
const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
        // paddingTop: 50

    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
});


export default function Login({ }: Props): ReactElement {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.container}>
                <Card className={classes.root}>
                    <>
                        <CardMedia
                            className={classes.media}
                            image="/static/img/next-icon.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>

                            <Typography variant="body2" color="textSecondary" component="p">
                                <form className={classes.root} noValidate autoComplete="off">

                                    <TextField id="filled-basic" label="Username" variant="filled" />
                                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                                </form>
                            </Typography>
                        </CardContent>
                    </>
                    <>
                        <Button fullWidth size="small" color="primary" type="button" variant="contained"
                            onClick={() => alert("hi")}>
                            Register
        </Button>
                        <Button fullWidth size="small" variant="contained"
                            color="default" onClick={() => Router.push('/login')}>
                            Cancel
        </Button>
                    </>
                </Card>
                <style jsx global>
                    {`body{
                min-height:100vh;
                position:relative;
                margin:0;
                background-size:cover;
                background-image:url("/static/img/bg4.jpeg");
                text-align:center;
            }`}
                </style>
            </div>
        </React.Fragment>
    )
}
