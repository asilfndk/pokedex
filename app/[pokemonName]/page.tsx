import { getPokemon } from "@/lib/pokemonAPI";
import Image from "next/image";
import styles from "@/styles/PokemonPage.module.css"; // Stil dosyanızı ekleyin

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemon(pokemonName);

  return (
    <div className={styles.container}>
      <div className="text-center">
        <h1 className={`${styles.title} text-4xl text-bold pt-4 capitalize`}>{pokemonName}</h1>
      </div>
      <div className={styles.imageContainer}>
      <Image
          src={pokemonObject.sprites.other['official-artwork'].front_default}
          alt={pokemonName}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoTitle}>Height:</h3>
          <p className={styles.infoValue}>{pokemonObject.height}</p>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoTitle}>Weight:</h3>
          <p className={styles.infoValue}>{pokemonObject.weight}</p>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoTitle}>Abilities:</h3>
          <p className={styles.infoValue}>{pokemonObject.abilities.map((ability: any) => ability.ability.name).join(', ')}</p>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoTitle}>Gender:</h3>
          <p className={styles.infoValue}>{pokemonObject.gender_rate ? 'Male/Female' : 'Genderless'}</p>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoTitle}>Type:</h3>
          <p className={styles.infoValue}>{pokemonObject.types.map((type: any) => type.type.name).join(', ')}</p>
        </div>
        <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Base Experience:</h3>
            <p className={styles.infoValue}>{pokemonObject.base_experience}</p>
        </div>
        </div>
      <h3 className={`${styles.title} mt-4`}>Stats:</h3>
      <div className={styles.statsContainer}>
        {pokemonObject.stats.map((statObject: any) => (
            <div className={styles.statBlock} key={statObject.stat.name}>
            <h3 className={styles.statName}>{statObject.stat.name}:</h3>
            <div className={styles.statBarContainer}>
                <div className={styles.statBar}>
                <div className={styles.fillerBar} style={{ width: `${statObject.base_stat}%` }} />
                </div>
                <p className={styles.statValue}>{statObject.base_stat}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}