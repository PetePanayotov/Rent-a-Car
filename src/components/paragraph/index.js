import styled from 'styled-components';

const Paragraph = styled.p`

    font-family: Helvetica,sans-serif;
    font-size: 22px;
    line-height: 1.5;
    width: 70%;
    margin: 0 auto; 
`;

const DescrParagraph = styled(Paragraph)`

    text-align: left;

`;

const FormParagraph = styled(Paragraph)`
    text-align: center;
`;

export default {DescrParagraph  , FormParagraph};