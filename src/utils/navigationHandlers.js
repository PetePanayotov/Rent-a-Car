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


export default {handleMouseOver , handleMouseOut};