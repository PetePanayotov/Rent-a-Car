import styled from 'styled-components';

const Button = styled.button`
    outline: none;
`;

const SubmitButton = styled(Button) `

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

const HeaderButton = styled(Button)`
    
    font-size: 28px;
    color: #ffffff;
    background-color: #3A5A9C;
    border: none;
    margin-right: 15px;
    height: fit-content;
    align-self: center;
    margin-top: 5px;

    &:hover {
        cursor: pointer;
        border-bottom: ${props => props.type === 'logout' ? '1px solid #ffffff' : 'none'};
    };

`;

const DropDownBtn = styled(Button)`

    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    text-align: center;
    color: #3A5A9C;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border: none;
    width: 100%;

    &:hover {
        cursor: pointer;
        color: #ffffff;
        background-color: #3A5A9C;
    };
`;

const DeclineBtn = styled(Button)`
    width: 100%;
    margin-top: 15px;
    font-size: 22px;
    background-color: #F73F3F;
    color: #ffffff;
    text-align: center;
    padding: 10px 0;
    border: 2px solid #F73F3F;

    &:hover {
        cursor: pointer;
    };

`;

export default {HeaderButton , SubmitButton , DropDownBtn , DeclineBtn};