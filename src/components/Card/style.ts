import styled from 'styled-components';

export const Container = styled.div`
    background: #FFF;
    width: 300px;
    height: 360px;
    border-radius: 10px;
    padding: 5px;
    border: 1px solid ${props => props.theme.color.tertiary};
    text-align: center;
    transition: 0.4s;
    cursor: pointer;
    
    > img {
        object-fit: contain;
        width: 100%;
        margin: 0 auto;
    }

    > h1 {
        font-weight: 700;
        font-size: 22px;
        margin-bottom: 8px;
        transition: 0.4s;
    }

    > p {
        font-size: 18px;
        transition: 0.4s;
    }

    :hover {
        box-shadow: 0px 8px 15px -4px ${props => props.theme.color.tertiary};
        transition: 0.4s;

        > h1, p {
            color: ${props => props.theme.color.secondary};
            transition: 0.4s;
        }
    }
`;