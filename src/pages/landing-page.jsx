import "./landing-page.css"

const LandingPage = () => {
    const ControlDisplay = () => {
        return (
            <div id="Controle">
                <p>Movement</p>
                <img src="https://placecats.com/300/200" />

            </div>
        )
    }

    return (
        <div id="main">
            <div style={{height:"10px"}}>
                <h1>Whelcome to My portfolio</h1>
                <ControlDisplay />
            </div>
        </div>
    )
}
export default LandingPage