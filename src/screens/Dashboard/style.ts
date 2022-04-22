import styled from "styled-components";
import wallpaper from '../../assets/wallpaper.png';

export const Container = styled.div`

    > h1 {
        color: #fff;
        font-size: 28px;
        text-align: center;
        font-weight: 700;
        padding: 20px 0;
    }

    > fieldset {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > label {
            margin-bottom: 15px;
            color: #fff;
            font-weight: 500;
            font-size: 20px;
        }

        > input {
            width: 350px;
            border-radius: 3px;
            padding: 8px 10px;
            border: 1px solid ${props => props.theme.color.tertiary};
            font-weight: 500;
            font-size: 18px;
        }
    }
`;

export const List = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
    width: 1400px;
    margin: 0 auto;
    padding: 30px 0;

    @media (max-width: 575.98px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    @media (min-width: 576px) and (max-width: 1199.98px){
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        min-width: 576px;
        max-width: 767.98px;
    }
`;