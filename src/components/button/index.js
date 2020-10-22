import styled from 'styled-components';

const Button = styled.button`
    outline: none;
`;

const SubmitButton = styled.button `

    width: 30%;
    font-size: 18px;
    color: #3A5A9C;
    padding: 5px 20px;
    margin: 0 auto;
    border: 2px solid #3A5A9C;
    border-radius: 7px;
    width: fit-content;

    &:hover {
        cursor: pointer;
        color: #ffffff;
        background-color: #3A5A9C;
    };
`;

const LogoutButton = styled.button`
    
    font-size: 28px;
    color: #ffffff;
    background-color: #3A5A9C;
    border: none;
    margin-right: 15px;
    height: fit-content;
    align-self: center;

    &:hover {
        cursor: pointer;
        border-bottom: 1px solid #ffffff;
    };

`;

export default {SubmitButton , LogoutButton };