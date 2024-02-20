import ListMovie from './sections/ListMovie'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CarouselComponent from './Components/Carousel'

export default function Home() {
    return (
        <>
            <Header />
            <CarouselComponent />
            <ListMovie />
            <Footer />
        </>
    )
}