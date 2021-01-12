import './Detail.css';

export default function Detail(props) {
  const id = ('000'+props.id).slice(-3);

  return (
    <div id="detail">
      <h2>{props.name} &nbsp;<span>#{id}</span></h2>
      <img src={props.imgUrl} alt={props.name} />
      <div id="stats">
        <ul>
          <li>
            <h4>Height</h4>
            <p>{props.height}</p>
          </li>  
          <li>
            <h4>Weight</h4>
            <p>{props.weight}</p>
          </li> 
        </ul>
        <ul> 
          <li>
            <h4>HP</h4>
            <p>{props.hp}</p>
          </li>  
          <li>
            <h4>Attack</h4>
            <p>{props.attack}</p>
          </li>  
          <li>
            <h4>Defence</h4>
            <p>{props.defense}</p>
          </li> 
          <li>
            <h4>Sp-Atk</h4>
            <p>{props['special-attack']}</p>
            </li> 
          <li>
            <h4>Sp-Def</h4>
            <p>{props['special-defense']}</p>
          </li> 
          <li>
            <h4>Speed</h4>
            <p>{props.speed}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}