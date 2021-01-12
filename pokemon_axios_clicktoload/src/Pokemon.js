import './Pokemon.css';

export default function Pokemon(props) {
  const id = ('000'+props.id).slice(-3);
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

  const handleClick = () => {
    props.setDetail(props);
  };

  return (
    <div className="pokemon">
      <div className="sprite" onClick={handleClick}>
        <img src={spriteUrl} alt={id} />
      </div>
      <small>#{id}</small>
      <p id={props.id}>{props.name}</p>
    </div>
  )
}

