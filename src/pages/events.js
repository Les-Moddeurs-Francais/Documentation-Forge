import React from 'react';
import Layout from '@theme/Layout';
import data from "./data/events.json"

function Table({title, description, side}) {
    return (
        <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td>{side}</td>
        </tr>
    );
}

export default function Events() {
    return (
        <Layout title="Events" description="Liste des events disponibles sous Forge 1.17.1">
            <center>
                <div style={{
                    overflowX: 'auto'
                }}>
                    <table style={{
                        padding:'5vh',
                    }}>
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Side</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((props, idx) => (
                            <Table key={idx} {...props} />
                        ))}
                        </tbody>
                    </table>
                </div>
            </center>
        </Layout>
    );
}