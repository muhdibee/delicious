import { useEffect, useState } from "react";

function Popular() {

  const [popular, setPopular,] = useState([]);

  useEffect(()=>{
    getPopular();
  }, []);

  const getPopular = async () => {
    const api=await  fetch(`https://api.spoonacular.com/recipes/random?apiKey=e43fa5857cbe4e37af330001efec3000&number=9`);
    const data=await api.json();
    console.log(data);
    setPopular(data.recipes);

  }
  return (
    <div>Popular Receipes: {console.log(popular)}
        {popular.map((recipe)=> {
          return(
            <div>
              <p>{recipe.title}</p>
            </div>
          )
        })
        }
    </div>
  )
}

export default Popular