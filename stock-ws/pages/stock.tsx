import React, { ReactElement } from 'react'
import Header from '../components/layouts/header'
import Layout from '../components/layouts/layout'
import Menu from '../components/layouts/menu'
import MaterialTable, { Action } from 'material-table'
import { products } from './api/dummy'
import { Typography } from '@material-ui/core'
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import { DeleteOutline, Edit } from '@material-ui/icons'
interface Props {

}

export default function Stock({ }: Props): ReactElement {
    const columns = [
        {
            title: "ID",
            render: (item) => <Typography variant="body1" style={{ color: 'yellowgreen' }}>{item.id}</Typography>
        },
        {
            title: "IMAGE",
            cellStyle: { padding: 5 },
            render: (item) => (
                <img
                    src="http://www.codemobiles.com/biz/images/cm_logo.png?ref=10"
                    style={{ width: 50, height: 50, borderRadius: "5%" }}
                />
            ),
        },
        {
            title: "NAME",
            cellStyle: { minWidth: 500 },
            render: (item) => <Typography variant="body1" style={{ color: 'yellowgreen' }} >{item.name}</Typography>
        },
        {
            title: "PRICE",
            render: (item) => <Typography variant="body1" >
                <NumberFormat value={item.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    prefix={"$"}
                />
            </Typography>
        },
        {
            title: "STOCK",
            render: (item) => <Typography variant="body1" >
                <NumberFormat value={item.stock}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    suffix={" pcs"}
                />
            </Typography>
        },
        {
            title: "CREATED",
            render: (item) => <Typography variant="body1"  >
                <Moment format="DD/MM/YYYY">{item.createdAt}</Moment>
            </Typography>
        },
    ];

    const actions: Action<any>[] = [

        {
            icon: () => <Edit />,
            iconProps: { color: 'secondary' },
            tooltip: "Edit",
            onClick: () => {

            }
        },

        {
            icon: () => <DeleteOutline />,
            iconProps: { color: 'action' },
            tooltip: "Delete",
            onClick: () => {

            }
        }
    ];


    return (

        <Layout>
            <h1>Stock</h1>
            <MaterialTable
                columns={columns}
                data={products}
                title="Demo Title"
                actions={actions}
            />
        </Layout>


    )
}
