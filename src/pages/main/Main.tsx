import styled from 'styled-components'
import MainBalance from './MainBalance';
import MainAction from './MainAction';
import MainTop from './MainTop';
import MainBottom from './MainBottom';
import MainTokens from './MainTokens';
import { useState } from 'react';

interface IMain {
    onSetPage: (e: string) => void
}

const Main = ({ onSetPage }: IMain) => {
    const [tab, setTab] = useState(0);
    const onSetTab = (e: number) => {
        setTab(e)
    }

    return (
        <Wrap className="App">
            <MainTop onSetPage={onSetPage}/>
            <MainBalance />
            <MainAction onSetPage={onSetPage}/>
            {tab === 0 ? <MainTokens />
                : tab === 1 ? <MainTokens />
                    : <MainTokens />}
            <MainBottom onSetTab={onSetTab} tab={tab} onSetPage={onSetPage} />
        </Wrap>
    );
}

export default Main;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #f6f8f9;
    height: 100%;
    overflow: auto;
    position: relative;
`