import Head from "next/head"
import Header from '../header'
import { useState } from 'react'

export default function Layout() {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto+Slab:wght@400;500&family=Roboto:wght@400;500&display=swap" rel="stylesheet"></link>
            </Head>
            <Header></Header>
        </div>
    )
}