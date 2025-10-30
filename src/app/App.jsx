import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router'

import Loader from '../features/Loader/Loader'
import Header from '../layouts/Header/Header'
import './App.scss'
import Footer from '../layouts/Footer/Footer'

const Home = React.lazy(() => import('../pages/Home/Home'))
const Works = React.lazy(() => import('../pages/Works/Works'))
const AboutMe = React.lazy(() => import('../pages/AboutMe/AboutMe'))
const Contacts = React.lazy(() => import('../pages/Contacts/Contacts'))

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='works' element={<Works />} />
                        <Route path='about-me' element={<AboutMe />} />
                        <Route path='contacts' element={<Contacts />} />
                        <Route path='*' element={<Home />} />
                    </Routes>
                </Suspense>
            </main>

            <Footer/>
        </>
    )
}

export default App
