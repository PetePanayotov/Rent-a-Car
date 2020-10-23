import styled from 'styled-components';

const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: ${props => props.page === 'add' ? 'flex-start' : 'center'};
    width: 30vw;
    height: 60vh;
    align-self: center;
    border: 1px solid #282C34;
    background-color: #EEEEEE;
    padding: 10px 20px;

`;

export default Form;
