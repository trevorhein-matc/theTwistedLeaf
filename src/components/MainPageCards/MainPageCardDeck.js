import React from "react"
import GridLayout from '../GridLayout/GridLayout'
import Grid from '@material-ui/core/Grid'
import MainCard from '../MainPageCards/MainCard'

const cardData = [
    {   title: "Products", desc: "We offer a wide variety of products.", link: '/products', img: 'https://www.rollingstone.com/wp-content/uploads/2018/07/oregon-has-too-much-weed.jpg?crop=900:600&width=440' },
    {   title: "Process", desc: "Explore how we create our products.", link: '/products', img: 'https://media.wired.com/photos/5be0db79ec3a5f54b04d33b2/master/pass/marijuana-1036610200.jpg' },
    {   title: "Q & A", desc: "Explore how we create our products.", link: '/products', img: 'https://www.denverpost.com/wp-content/uploads/2018/12/Marijuana007.jpg' }
];

class MainPageCardDeck extends React.Component {
    render() {
        return (
            <div>
                <GridLayout>
                    {cardData.map((data, index)=> (
                        <Grid item xs={12} sm={6} md={4} key={data.title}>
                            <MainCard data={data}>
                            </MainCard>
                        </Grid>
                    ))}
                </GridLayout>
            </div>
        )
    }
}

export default MainPageCardDeck;