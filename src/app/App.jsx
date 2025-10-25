import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router'

import Header from '../layouts/Header/Header'
import './App.scss'

const Home = React.lazy(() => import('../pages/Home/Home'))
const Works = React.lazy(() => import('../pages/Works/Works'))
const AboutMe = React.lazy(() => import('../pages/AboutMe/AboutMe'))
const Contacts = React.lazy(() => import('../pages/Contacts/Contacts'))

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='works' element={<Works />} />
                        <Route path='about-me' element={<AboutMe />} />
                        <Route path='contacts' element={<Contacts />} />
                        <Route path='*' element={<Home />} />
                    </Routes>
                </Suspense>
            </main>
        </>
    )
}

export default App
