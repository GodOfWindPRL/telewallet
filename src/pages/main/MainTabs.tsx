import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import MainTokens from './MainTokens';

const MainTabs = () => {
    const { t } = useTranslation();
    const dataTabs = ["tokens", "nfts", "activity"];
    const [tab, setTab] = useState(0)

    return (
        <Wrap className="container">
            <div>
                {dataTabs.map((item, index) => <div className="mtab-item" key={index} onClick={() => {
                    setTab(index)
                }}>
                    <span className="size-0-2 color-blue">{t(item)}</span>
                </div>)}
                <div className={`mtab-bar mtb-${tab}`}></div>
            </div>
            <div className="tab-content">
                {tab === 0 ? <MainTokens />
                    : tab === 1 ? <MainTokens />
                        : <MainTokens />}
            </div>
        </Wrap>
    );
}

export default MainTabs;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    flex: 1;
    /* overflow: hidden; */
    > div {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 4px 0 8px 0;
        position: relative;
    }
    .mtab-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }
    .mtab-bar {
        width: calc(100% / 3);
        position: absolute;
        bottom: 0;
        transition: 0.3s;
        height: 2px;
        background: rgb(33, 112, 208);
    }
    .mtb-0 {
        left: 0;
    }
    .mtb-1 {
        left: calc(100% / 3);
    }
    .mtb-2 {
        left: calc(100% / 3 * 2);
    }
    .tab-content {
        width: 100%;
        display: flex;
        flex: 1;
        padding: 10px 0;
        /* overflow: hidden; */
    }
`