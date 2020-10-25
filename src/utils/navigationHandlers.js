const handleMouseOver = (event) => {

    const li = event.currentTarget;

    const [ , dropDownContent] = Array.from(li.children);

    dropDownContent.style.display = 'block';

};

const handleMouseOut = (event) => {
    
    const li = event.currentTarget;

    const [, dropDownContent] = Array.from(li.children);

    dropDownContent.style.display = 'none';
};

const handleClick = (e , history ,dispatch , changeQS) => {

    const category = e.target.textContent;

    const type = {
        'Car Fleet': 'all',
        'Economy': 'ec',
        'Estate': 'est',
        'Luxury': 'lux',
        'SUV': 'suv',
        'Cargo': 'crg'
    };

    history.push(`/fleet?cat=${type[category]}`);

    dispatch(changeQS(type[category]));

};


export default {handleMouseOver , handleMouseOut , handleClick};