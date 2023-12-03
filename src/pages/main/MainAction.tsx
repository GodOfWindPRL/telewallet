import styled from 'styled-components'
import { BsCashCoin, BsCurrencyExchange, BsFillArrowUpCircleFill } from "react-icons/bs"
import { useTranslation } from 'react-i18next';

interface IMainTop {
    onSetPage: (e: string) => void,
}

const MainAction = ({ onSetPage }: IMainTop) => {
    const { t } = useTranslation()

    return (
        <Wrap className="container">
            <div className="ma-item">
                <BsFillArrowUpCircleFill size={20} color='#709CD8' />
                <span className="size-1-2 color-black" onClick={() => { onSetPage("send") }}>{t("send")}</span>
            </div>
            <div className="ma-item">
                <BsCurrencyExchange size={20} color='#709CD8' />
                <span className="size-1-2 color-black">{t("swap")}</span>
            </div>
            <div className="ma-item">
                <BsCashCoin size={20} color='#709CD8' />
                <span className="size-1-2 color-black">{t("receive")}</span>
            </div>
        </Wrap>
    );
}

export default MainAction;

const Wrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    .ma-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }
`