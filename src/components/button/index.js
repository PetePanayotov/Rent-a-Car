import styled from 'styled-components';

const Button = styled.button `

    width: 30%;
    font-size: 18px;
    color: #3A5A9C;
    padding: 5px 20px;
    margin: 0 auto;
    outline: none;
    border: 2px solid #3A5A9C;
    border-radius: 7px;
    width: fit-content;

    &:hover {
        cursor: pointer;
        color: #ffffff;
        background-color: #3A5A9C;
    };
`;

export default Button;