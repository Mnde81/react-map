import style from './Pokemon.module.css';


export function Pokemon(params) {
    return (

        <section className={style.pokemonList}>
            {params.data.map((item, index) => (
                <div key={index} className={style.pokemon}>

                    <img className={style.pokemonImg} src={item.img} alt={item.number}></img>
                    <p>Number: {item.number}</p>
                    <a href={item.link} target="_blank">Link to site</a>
                    <p>Name: {item.name}</p>
                    <p>Color: {item.color}</p>
                    <p>Form: {item.form}</p>
                    <p>Type: {item.type}</p>  

        
                </div>
            ))}
        </section>
    );
}

