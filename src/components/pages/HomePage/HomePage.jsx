import React from 'react';
import HeaderSlider from '../../HeaderSlider/HeaderSlider';
import Categories from '../../categories/categories';
import Tasty from '../../tastypart/tasty';
import Services from '../../services/Services';
import Footer from '../../footer/Footer';
export default function HomePage() {
    return (
        <div>
            <HeaderSlider />
            <Categories />
            <Tasty/>
            <Services/>
            <Footer/>
        </div>
    )
}
