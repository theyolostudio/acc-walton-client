
import Footer from "./@asstes/Footer"
import NavBar from "./@asstes/NavBar"


const LandingLayout = (props) => {
    return (
        <div className='min-h-screen'>
            
            <NavBar />
            <div>
                {props.children}
            </div>
            <div className="sticky top-[100vh]">
                <Footer />
            </div>

        </div>
    )
}

export default LandingLayout