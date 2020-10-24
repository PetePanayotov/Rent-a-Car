import styled from 'styled-components';

const Main = styled.main `

    width: 100%;
    height: 100%;
    min-height: 82vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #E9EBEE;
    background-image: ${props => props.page === 'home' ? "url('https://image.freepik.com/free-photo/hands-holding-word-rent_53876-30907.jpg')" : ''};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    

    @media only screen and (max-width: 768px) {
        min-height: 84vh;
    };

`;

export default Main