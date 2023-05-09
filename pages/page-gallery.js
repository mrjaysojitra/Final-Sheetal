import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import Gallery from '../components/slider/Gallery';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Gallery" />
                <Gallery />
            </Layout>
        </>
    )
}
