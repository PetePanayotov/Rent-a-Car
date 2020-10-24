import styled from 'styled-components';

const Label = styled.label `

    font-size: 28px;
    text-align: center;
    margin-bottom: ${props => props.page === 'reserve' ? '30px' : ''};
`;

export default Label;