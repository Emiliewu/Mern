import { useState, useEffect } from 'react';
import './Tabs.css';

export function Tabs({ list }) {
  const [tabs, setTabs] = useState(list); 
  const [count, setCount] = useState(list.length);
  const [active, setActive] = useState(null);
  const setStates = {setTabs, setActive};

  const addTab = () => {
    setTabs([...tabs, { label: count+1, content: 'content' }]);
    setCount(count+1);
  };

  return (
    <>
      <div className="tabs">
        { tabs.map(({label}) => <Tab key={label} active={active} label={label} {...setStates} />) }
        <span id="add" onClick={addTab}>...</span>
      </div>
      <div id="contents">
        { tabs.filter(tab => tab.label === active).map(tab => <Content key={tab.label} {...tab} />) }
      </div>
    </>
  );
}

export function Tab({active, label, setTabs, setActive}) {
  const handleClick = () => {
    setActive(label);
  };
  const deleteTab = (evt) => {
    evt.stopPropagation();
    setTabs(tabs => tabs.filter(t => t.label !== label));
    if (active === label) {
      setActive(null);
    }
  };
  const className = active === label ? 'active' : '';

  return (
    <div className="wrapper">
      <div className={`tab ${className}`} onClick={handleClick}>
        Tab {label}
        <span className="del" onClick={deleteTab}>&#10008;</span>
      </div>
      <p className="bar"></p>
    </div>
  );
}

export function Content({label, content}) {
  const [opacity, setOpacity] = useState(0.3);
  const [transform, setTransform] = useState('translateX(-50%)');

  useEffect(() => {
    setOpacity(1);
    setTransform('translateX(0)');
  }, [opacity, transform]);

  return (
    <div className="content" style={{opacity, transform}}>
      {`Tab ${label} ${content} is showing here.`}
    </div>
  );
}