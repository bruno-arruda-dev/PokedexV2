import React, { useState, createContext } from "react";
import { getPokemonData } from "../API/GetPokemonsAPI";

export const GetPokemonDataContext = createContext();

export const GetPokemonDataProvider = ({ children }) => {

    const [pokemon, setPokemon] = useState(""); // Responsável por armazenar o nome do pokemon que é recebido da Searchbar
    const [mainImg, setMainImg] = useState("");
    const [secImg, setSecImg] = useState("");
    const [id, setId] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [hp, setHp] = useState("");
    const [atk, setAtk] = useState("");
    const [xAtk, setXAtk] = useState("");
    const [def, setDef] = useState("");
    const [xDef, setXDef] = useState("");
    const [spd, setSpd] = useState("");
    const [mainType, setMainType] = useState("normal");
    const [hide, setHide] = useState(true);
    const [erro, setErro] = useState("");

    const updatePokemonName = (name) => { // função invocada na Searchbar, responsável por receber o nome do pokemon e invocar o fetchPokemon
        fetchPokemon(name.toLowerCase());
        console.log(`Recebido para busca ${name}`);
    };

    const fetchPokemon = async (pokemon) => {
        setErro("");

        const currentPokemon = await getPokemonData(pokemon);

        if (currentPokemon === undefined) { //Tratativa de erro para pokemon não encontrado. A API retorna undefined nesses casos
            console.log("Pokemon não encontrado");
            setErro("Pokemon não encontrado");

        } else if (pokemon !== "") {
            console.log(`Exibindo pokemon: ${pokemon}`)

            //Recebe dados básicos
            setPokemon(currentPokemon.name);
            setMainImg(currentPokemon.sprites?.other?.dream_world.front_default);
            setSecImg(currentPokemon.sprites?.front_default);
            setId(currentPokemon.id);

            // Recebe a altura do pokemon e faz o devido tratamento
            const convertPokemonHeight = (currentPokemon.height / 10).toFixed(2);
            const adjustPokemonHeight = convertPokemonHeight < 1 ? (convertPokemonHeight * 100) + " cm" : convertPokemonHeight + " m";
            setHeight(adjustPokemonHeight);

            // Recebe o peso do pokemon e faz o devido tratamento
            const convertPokemonWeight = (currentPokemon.weight / 10);
            const adjustPokemonWeight = convertPokemonWeight < 1 ? (convertPokemonWeight * 1000) + " g" : convertPokemonWeight + " kg";
            setWeight(adjustPokemonWeight);

            // Recebe dados de batalha dos pokemons
            setHp(currentPokemon.stats[0].base_stat);
            setAtk(currentPokemon.stats[1].base_stat);
            setXAtk(currentPokemon.stats[2].base_stat);
            setDef(currentPokemon.stats[3].base_stat);
            setXDef(currentPokemon.stats[4].base_stat);
            setSpd(currentPokemon.stats[5].base_stat);

            // Recebe o tipo principal do pokemon
            if (currentPokemon.types && currentPokemon.types.length > 0) {
                setMainType(currentPokemon.types[0].type.name);
            }
            setHide(false);

            window.scrollTo({ top: 0, behavior: 'smooth' });

            // const myPokemon = document.getElementById('myPokemon');
            // setTimeout(() => {
            //     myPokemon.scrollIntoView({ behavior: 'smooth', block: "start" });
            // }, 5000); // Espera 500ms antes de chamar scrollIntoView
        }
    };

    return <GetPokemonDataContext.Provider value={{ updatePokemonName, pokemon, mainImg, secImg, id, height, weight, hp, atk, xAtk, def, xDef, spd, mainType, hide, erro }}>
        {children}
    </GetPokemonDataContext.Provider>;
}