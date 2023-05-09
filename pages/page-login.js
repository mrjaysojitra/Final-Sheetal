import React from 'react';
import Layout from "../components/layout/Layout"; 
import LoginPage from '../components/layout/loginpage';
import PageTitle from '../components/sections/PageTitle';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="login" />
                <LoginPage />
            </Layout>
        </>
    )
}
