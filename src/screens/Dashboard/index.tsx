import React, { useEffect, useState } from 'react'
import {
    Container,
    List
} from './style';
import { 
    useDispatch, 
    useSelector 
} from 'react-redux';
import { Card } from '../../components';
import { getDigimons} from '../../function';
import { RootState } from '../../store';
import { LIST_DIGIMON } from '../../store/actions';

const Dashboard: React.FC = () => {
    const dispatch = useDispatch();
    const { digimons } = useSelector((state: RootState) => state.clickState);
    const [ name, setName ] = useState('');

    useEffect(() => {
        getDigimons().then((resp) => {
            dispatch({type: LIST_DIGIMON, digimons: resp})
        })
    }, [])

    return ( 
        <Container>
            <h1>Lista de digimons</h1>
            <fieldset>
                <label htmlFor="search">Pesquisar digimon:</label>
                <input
                    id="search" 
                    placeholder="Pesquisar Digimon"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
            </fieldset>
            <List>
                {digimons?.filter((post) => {
                        if(name == ''){
                            return post
                        } else if (post.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())){
                            return post
                        }
                    }).map((id: any, index: number) => {
                        return (
                            <Card
                                key={index}
                                image={id?.img}
                                level={id?.level}
                                name={id?.name}
                            />
                        )
                })} 
            </List>
        </Container>
    )
};

export default Dashboard;