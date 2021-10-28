import React from 'react'
import Card from './Card.js'
import Charts from './Charts.js'
import Sidebar from './Sidebar.js'


export default function Dashboard() {
    return (
        <div className="container-fluid row d-flex flex-nowrap d-sm-flex flex-sm-wrap">
            <Sidebar/>
            <Card />
            <Charts/>
        </div>
    )
}
