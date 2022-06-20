import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {

  const [popular, setPopular,] = useState([]);

  useEffect(()=>{
    getPopular();
  }, []);

  const getPopular = async () => {
    const api=await  fetch(`https://api.spoonacular.com/recipes/random?apiKey=e43fa5857cbe4e37af330001efec3000&number=9`);
    const data=await api.json();
    setPopular(data.recipes);

  }
  return (
    <div>{
      popular.length !=0?
          <Wrapper>
            <h3>Popular Picks</h3>
            <Splide>
              {
                popular.map((recipe)=>{
                  return(
                    <SplideSlide key={recipe.id}>
                      <Card>
                        <p>{recipe.title}</p> {console.log(recipe.title)}
                        <img src={recipe.image} alt={recipe.title} />
                      </Card>
                    </SplideSlide>
                  )
                })
              }
            </Splide>
          </Wrapper>
      : <p> Loading...</p>
      }
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  background-color: # fffddd;

`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  background-color: #fffbbb;
  overflow: hidden;

  img{
    border-radius: 2rem;
    }
`;


export default Popular