import styled from 'styled-components';

export const Container = styled.div`
    max-width: calc(100% - 6rem);
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    margin: 165px 160px;
`;

export const Title = styled.h1`
    color: white;
    font-size: 3rem;
    font-weight: 900;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    color: white;
    font-size: 26px;
    font-weight: normal;
    margin: 16px auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;
