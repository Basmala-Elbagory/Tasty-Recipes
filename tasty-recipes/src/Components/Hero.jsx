import heroImage from "../images/background.jpg";
function Hero()
{
    return (
        <div className="Hero" id="H">
              <img src={heroImage} alt="Delicious food" />
            <div className="HeroContent">
                <h2>Discover</h2> 
                <h2>Delicious Recipes</h2>
                <p>Explore easy and tasty recipes for every occasion. Cook with love, eat with joy</p>
              <button> Explore Recipes  <i className="fa-solid fa-arrow-right-long" style={{ color: "white" }}></i></button>
              <div className="text">
                <div className="notes">
                <div className="note">
                    
                    <h3> <i className="fa-solid fa-kitchen-set icon"style={{ color: " rgb(97, 52, 52)" }}></i> Easy to cook</h3>
                    <p>simple ingredients and easy steps.</p>
                </div>
                <div className="note">
                    <h3><i className="fa-solid fa-heart icon"style={{ color: " rgb(97, 52, 52)" }}></i> Made with love</h3>
                    <p>Every recipe is made with love and passion.</p>
                </div>
                <div className="note">
                    <h3><i className="fa-brands fa-pagelines icon"style={{ color: " rgb(97, 52, 52)" }}></i> Fresh ingredients</h3>
                    <p>We use the freshest ingredients</p>
                </div>
              </div>
              
                
              </div>
            </div>

          
        </div>
    );
}
export default Hero;