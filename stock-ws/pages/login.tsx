import { createStyles, makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface Props {

}
const styles = createStyles({
    section: {
        color: 'red',
        fontSize: '100px'
    }
});

const useStyles = makeStyles(styles);
export default function Login({ }: Props): ReactElement {
    const classes = useStyles();
    return (
        <div>
            <h1>Login</h1>
            <div className={classes.section}>test</div>
        </div>
    )
}
