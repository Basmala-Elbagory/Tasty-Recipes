function RecipeCard(props) {
    const {name, category, time, image, description, isPopular} = props;
    

    let state;

    if (isPopular) {
        state = "Popular";
    }

    function Click() {
        alert(`You Selected ${name}`);
    }

    return (
        <div className="card">
            <div className="image-container">
                 <img src={image} alt={name} />
                 <p> {isPopular && <span><i
  className="fa-solid fa-star"
  style={{ color: "white" }}
></i>  Popular</span>}</p>
            </div>
          
            <p>{category}</p>

            <h2>{name}</h2>

            <p><i className="fa-solid fa-stopwatch"style={{ color: " rgb(103, 65, 65)" }}></i>  {time}</p>

            <p>{description}</p>

           

            <button onClick={Click}>
                View Recipe  <i className="fa-solid fa-arrow-right-long" style={{ color:" rgb(97, 52, 52) "}}></i>
            </button>
        </div>
    );
}

export default RecipeCard;