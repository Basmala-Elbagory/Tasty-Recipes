import about from "../images/about.jpg";

function About()
{
    return(
        <div className="Container">
             <h2>About us 🥰</h2>
            <div className="About" id="About">
           
            <div className="image2">
             <img src={about}></img>
            </div>
            <div className="text">
              <h2>Cooking Made With Love <i className="fa-solid fa-heart icon"></i></h2>
              <p>At Tasty Recipes, we believe that great food brings people together. Our goal is to make cooking simple, enjoyable, and inspiring by bringing delicious recipes to your kitchen. From comforting classics to sweet treats, every recipe is made to add a little more joy to your day.</p>
              <div className="notes">
                <div className="note">
                    
                    <h3> <i className="fa-solid fa-children icon"style={{ color: " rgb(97, 52, 52)" }}></i> 500+</h3>
                    <p>Happy Cooks</p>
                </div>
                <div className="note">
                    <h3><i className="fa-solid fa-book-open icon"style={{ color: " rgb(97, 52, 52)" }}></i> 100+</h3>
                    <p>Delecious Recipes</p>
                </div>
                <div className="note">
                    <h3><i className="fa-solid fa-heart icon"style={{ color: " rgb(97, 52, 52)" }}></i>  10K+</h3>
                    <p>Meals Shared</p>
                </div>
              </div>
            </div>
        </div>
        </div>
        

    );
}
export default About;