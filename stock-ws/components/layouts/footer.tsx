import React, { ReactElement, StyleHTMLAttributes } from 'react'

interface Props {
    style?: React.CSSProperties

}

export default function Footer({ style }: Props): ReactElement {
    return (
        <div style={style}>
            <span style={{ paddingLeft: 240 }}>Copy 2020 All Right</span>
        </div>
    )
}
