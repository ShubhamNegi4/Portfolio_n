
import ShowcaseSection from './components/ShowcaseSection.jsx';
import Hero from './sections/hero.jsx'
import NavBar from './components/NavBar.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx';
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
const App = () => {
    return (

        <>
        <NavBar></NavBar>
        <Hero></Hero>
        <ExperienceSection></ExperienceSection>
        <ShowcaseSection></ShowcaseSection>
        <Contact></Contact>
        <Footer></Footer>
        </>
    )
}
export default App;