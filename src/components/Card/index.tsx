import React from 'react';
import { 
    Container
} from './style';

interface IProps {
    name: string,
    level: string,
    image: string
}

const Card: React.FC <IProps> = (props) => {
    return (
        <Container>
            <img src={props.image} alt="" />
            <h1>{props.name}</h1>
            <p>{props.level}</p>
        </Container>
    );
};

export default Card;