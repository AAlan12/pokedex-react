import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import axios from "axios";

export const Home = () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        getPokemons();
    }, []);
    const getPokemons = () => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    };
  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container>
            {pokemons.map((pokemon) =>(
                <Grid item xs={3}>
                    <PokemonCard />
                </Grid>
            ))}           
        </Grid>
      </Container>
    </div>
  );
};
