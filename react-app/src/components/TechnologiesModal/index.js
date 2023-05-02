import "./TechnologiesModal.css"

const TechnologiesModal = () => {

    return (
        <div id="tech-modal-container">
            <h2 id="tech-modal-prompt">Technologies</h2>
            <h3>Here are the technologies used in this project:</h3>
            <div id="tech-info-container">
                <div className="single-tech-container">
                    <p className="single-tech-name">React</p>
                    <img className="single-tech-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt="react" />
                </div>
                <div className="single-tech-container">
                    <p className="single-tech-name">Javascript</p>
                    <img className="single-tech-img" src="https://forkpoint.com/wp-content/uploads/js-logo.png" alt="javascript" />
                </div>
                <div className="single-tech-container">
                    <p className="single-tech-name">Python</p>
                    <img className="single-tech-img" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" alt="Python" />
                </div>
                <div className="single-tech-container">
                    <p className="single-tech-name">HTML</p>
                    <img className="single-tech-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png" alt="HTML" />
                </div>
                <div className="single-tech-container">
                    <p className="single-tech-name">CSS</p>
                    <img className="single-tech-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png?20160530175649" alt="CSS" />
                </div>
                <div className="single-tech-container">
                    <p className="single-tech-name">Flask</p>
                    <img className="single-tech-img" src="https://cdn.icon-icons.com/icons2/2389/PNG/512/flask_logo_icon_145276.png" alt="Flask" />
                </div>
            </div>
        </div>
    )
}

export default TechnologiesModal
