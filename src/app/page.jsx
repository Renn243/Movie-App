import ListMovie from './sections/ListMovie'
import Header from './Components/Header'
import Footer from './Components/Footer'

export default function Home() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <ListMovie />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}