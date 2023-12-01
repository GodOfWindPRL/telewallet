import styled from 'styled-components'
import iconExchange from 'assets/images/icon-exchange.png'
import iconWalletPlus from 'assets/images/icon-wallet-plus.png'
import iconScan from 'assets/images/icon-scan.png'
import MainChains from './MainChains'

interface IMainTop {
    onSetPage: (e: string) => void,
}

const MainTop = ({ onSetPage }: IMainTop) => {

    return (
        <Wrap className="container">
            <div className="mt-wallets">
                <span className="size-0 color-black">QuyenKac</span>
                <img src={iconExchange} alt="" />
            </div>
            <MainChains />
            <div className="mt-add" onClick={() => { onSetPage("import") }}>
                <img src={iconWalletPlus} alt="" />
            </div>
            <div className="mt-add">
                <img src={iconScan} alt="" />
            </div>
        </Wrap>
    );
}

export default MainTop;

const Wrap = styled.div`
    align-items: center;
    background: #f6f8f9;
    padding-top: 6px;
    padding-bottom: 6px;
    gap: 10px;
    position: sticky;
    top: 0;
    .mt-wallets {
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding: 4px;
        background: #FFF;
        box-shadow: -2px 2px 2px #bab7b753;
        margin-right: auto;
        > img {
            width: 20px;
        }
    }
    .mt-add {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        > img {
            width: 24px;
            height: auto;
        }
    }
`