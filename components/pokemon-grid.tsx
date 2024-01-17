"use client"
import { PokemonCard } from "./pokemon-card";
import { useState } from "react"
import { Label } from "./ui/label";
import { Input } from "./ui/input";


interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({pokemonList} : PokemonGridProps) { 
    const [searchText, setSearchText] = useState("");

    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter((pokemon: any) => 
            pokemon.name.toLowerCase().includes(searchText.toLowerCase()))        
    }

    const filteredPokemonList = searchFilter(pokemonList);

    return (
        <>  
        <div>   
            <h3 className="text-4xl py-10 text-center">Pokemon Ara!</h3>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="pokemonName" className="text-2xl">Pokemon Adı</Label>
                <Input 
                    type="text" 
                    value={searchText} 
                    autoComplete="off"
                    id="pokemonName" 
                    placeholder ="Pikachu, Ginger, Onix.." 
                    onChange={(e) => setSearchText(e.target.value)}
                    />
            </div>
            <h3 className="text-6xl pt-12 pb-6 text-center">Pokemonlar</h3>
        </div>
        
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
            {filteredPokemonList.map((pokemon: any) => {
                return (
                    <PokemonCard 
                    name={pokemon.name}
                    key={pokemon.name + "Card"}
                    id={pokemon.url.split('/').filter(Boolean).pop()}
                    />
                )
            })}
        </div>
        </>
    )
}