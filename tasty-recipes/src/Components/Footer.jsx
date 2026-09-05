function Footer()
{
    return(
        <div className="Footer">
            <div className="container">
               <div className="left">
               <h2>🍝 Tasty Recipes</h2>
      <p>Made with love for food lovers 🤎</p>
      <div className="icons">
       <i className="fa-brands fa-facebook"style={{ color: "rgb(197, 168, 132)" }}></i>
       <i className="fa-brands fa-square-instagram"style={{ color: "rgb(197, 168, 132)" }}></i>
       <i className="fa-brands fa-youtube"style={{ color: "rgb(197, 168, 132)" }}></i>
            </div>
      </div>
      <div className="right">
        <div className="links">
            <h2>Quick Links</h2>
            <a href="#H">HOME</a>
            <a href="#R">RECIPES</a>
            <a href="#About">ABOUT</a>
            <a href="#Chef">CHEF’S CHOICE</a>


        </div>
         <div className="Categories">
            <h2>Categories</h2>
            <a href="#">MAIN DISH</a>
            <a href="#">DESSERTS</a>
            <a href="#">SALAD</a>
            <a href="#">APPETIZRES</a>


        </div>
      </div>
            </div>
           <hr></hr>
             <p>© 2026 Recipe Hub. All Rights Reserved.🤎</p>
      

        </div>
    );
}
export default Footer;