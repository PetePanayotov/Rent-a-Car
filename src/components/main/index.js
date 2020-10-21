import styled from 'styled-components';

const Main = styled.main `

    width: 100%;
    height: 100%;
    min-height: 82vh;
    display: flex;
    flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
    justify-content: ${props => props.direction === 'column' ? 'space-evenly' : 'center'};

    @media only screen and (max-width: 768px) {
        min-height: 84vh;
    };

`;

export default Main;