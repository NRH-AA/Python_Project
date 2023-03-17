import "./AboutModal.css"

const AboutModal = () => {

    return (
        <div id="about-modal-container">
            <h2 id="about-modal-prompt">About us</h2>
            <h3>Scrollr is a Tumblr clone. Get in touch with the creators:</h3>
            <div id="contact-info-container">
                <div id="nathan-contact-container">
                    <p className="contact-name">Nathan Heinz</p>
                    <div className="contact-links-container">
                        <a className="link-button" href="https://github.com/NRH-AA" target="_blank"><i class="fa-brands fa-github fa-xl link-icon" /></a>
                        <a className="link-button" href="https://www.linkedin.com/in/nathan-heinz-5b3718231/" target="_blank"><i class="fa-brands fa-linkedin fa-xl link-icon" /></a>
                    </div>
                </div>
                <div id="patrick-contact-container">
                    <p className="contact-name">Patrick McKinney</p>
                    <div className="contact-links-container">
                        <a className="link-button" href="https://github.com/PatrickMck34" target="_blank"><i class="fa-brands fa-github fa-xl link-icon" /></a>
                        <a className="link-button" href="https://www.linkedin.com/in/patrick-mckinney-97aab0245" target="_blank"><i class="fa-brands fa-linkedin fa-xl link-icon" /></a>
                    </div>
                </div>
                <div id="james-contact-container">
                    <p className="contact-name">James Zhou</p>
                    <div className="contact-links-container">
                        <a className="link-button" href="https://github.com/James7z" target="_blank"><i class="fa-brands fa-github fa-xl link-icon" /></a>
                    </div>
                </div>
                <div id="john-contact-container">
                    <p className="contact-name">John Cruz</p>
                    <div className="contact-links-container">
                        <a className="link-button" href="https://github.com/JohnTimothyCruz" target="_blank"><i class="fa-brands fa-github fa-xl link-icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutModal
