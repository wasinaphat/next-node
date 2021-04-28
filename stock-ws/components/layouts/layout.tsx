import { Toolbar, Container } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import React, { ReactElement, ReactNode } from 'react'
import Footer from './footer'
import Header from './header'
import Menu from './menu'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(1),
            paddingLeft: 240
        },
    }),
);

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props): ReactElement {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Header />
            <Menu />
            <main className={classes.content}>
                <Toolbar />
                <Container maxWidth="lg" >
                    {children}
                </Container>
            </main>
            <Footer style={{

                position: 'fixed',
                left: 0,
                bottom: 0,
                width: "100%",
                backgroundColor: "#EEEEEE",
                color: 'black',
                fontSize: 13,
                height: 30,
                paddingLeft: 8,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                fontWeight: 300
            }} />
            <style jsx global>
                {`body{margin:0px;}`}
            </style>
        </React.Fragment>
    )
}
