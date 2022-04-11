import React from 'react'
import Header from './header'
import Slider from './slider'
import FeatureItem from '../../components/featureItems'
import { featureData } from "../../constants/featureData"
function LandingPage() {
    return (
        <div>
            <Header />
            <Slider />
            {
                featureData.map((item) =>
                    <FeatureItem data= {  item} />
                )
            }


        </div>
    )
}

export default LandingPage