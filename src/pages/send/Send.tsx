import styled from 'styled-components'
import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { FaRegAddressBook } from "react-icons/fa6";
import { subStringAddress } from 'helpers/subAddress';
import numeral from 'numeral';
import iconBTC from 'assets/images/icon-btc.png'
import iconETH from 'assets/images/icon-eth.png'
import { FaCaretDown } from "react-icons/fa";
import Button from 'components/core/Button';
import PickToken from 'pages/import/PickToken';

interface ISettings {
    onSetPage: (e: string) => void
}

const Send = ({ onSetPage }: ISettings) => {
    const { t } = useTranslation();

    const dataToken = [
        {
            icon: iconETH,
            name: "ETH",
            value: 3134.34544
        },
        {
            icon: iconBTC,
            name: "BTC",
            value: 234.43534
        }
    ]

    const [token, setToken] = useState(0);
    const onSetToken = (e: number) => {
        setToken(e)
    }



    return (
        <Wrap>
            <div className="container setting-back" onClick={() => {
                onSetPage("")
            }}>
                <FaArrowLeft />
                <span className="size-2-2">{t("send")}</span>
            </div>
            <div className="container setting-wrap">
                <div className="setting-group">
                    <div className="sg-item">
                        <span className="size-0-2">{t("from")}</span>
                        <div className="sgi-add">
                            <FaRegAddressBook />
                            <div className="sgia-text">
                                <span className="size-0-2">QuyenKec</span>
                                <span className="size-0">{subStringAddress({ text: "0x4tgxcbTGH$%RHBFGcg45gdffdsf" })}</span>
                            </div>
                            <span className="size-0-2">{numeral(0.34234).format("0,0.[00]")}$</span>
                        </div>
                    </div>
                    <div className="sg-item">
                        <span className="size-0-2">{t("to")}</span>
                        <div className="sgi-add-2">
                            <input type="text" placeholder={t("enterAddressOrSearch") || ""} />
                        </div>
                    </div>
                </div>
                <div className="setting-group">
                    <div className="sg-item">
                        <span className="size-0-2">{t("asset")}</span>
                        <div className="sgi-add-3">
                            {/* <img src={iconETH} />
                            <div className="sgia-text">
                                <span className="size-0-2">ETH</span>
                                <span className="size-0">{t("balance")}: {numeral(0.34234).format("0,0.[00]")} ETH</span>
                            </div>
                            <FaCaretDown /> */}
                            <PickToken data={dataToken} picked={token} onPick={onSetToken} />
                        </div>
                    </div>
                    <div className="sg-item">
                        <span className="size-0-2">{t("amount")}</span>
                        <div className="sgi-add-2">
                            <input type="text" placeholder={t("amount") || ""} />
                            <div className="size-0-2 color-blue">{t("max")}</div>
                        </div>
                    </div>
                </div>
                <Button variant='fill' text='send' />
            </div>
            {/* <div className={`app-page ${tab === "importSeed" && "app-page-active"}`}>
                <ImportSeed onSetTab={onSetTab} />
            </div>
            <div className={`app-page ${tab === "addAccount" && "app-page-active"}`}>
                <AddAccount onSetTab={onSetTab} />
            </div>
            <div className={`app-page ${tab === "importAccount" && "app-page-active"}`}>
                <ImportAccount onSetTab={onSetTab} />
            </div> */}
        </Wrap>
    );
}

export default Send;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #f6f8f9;
    height: 100%;
    overflow: auto;
    position: relative;
    .setting-back {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        overflow: auto;
        background: #FFF;
        align-items: center;
        position: absolute;
        top: 0;
        > span {
            margin-left: auto;
            margin-right: auto;
            transform: translateX(-8px);
        }
    }
    .setting-wrap {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        .setting-group {
            background-color: #FFF;
            border-radius: 8px;
            padding: 0 16px 6px 16px;
            display: flex;
            flex-direction: column;
            width: 100%;
            .sg-item {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 10px 0;
                .sgi-add {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    border-radius: 6px;
                    background-color: #F1F2FF;
                    padding: 6px 10px;
                    gap: 10px;
                    .sgia-text {
                        display: flex;
                        flex-direction: column;
                        margin-right: auto;
                    }
                }
                .sgi-add-2 {
                    width: 100%;
                    padding: 6px 10px;
                    background-color: #F5F6FA;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    > div {
                        background-color: #c9e2f6;
                        padding: 6px 8px;
                        border-radius: 4px;
                    }
                }
                .sgi-add-3 {
                    width: 100%;
                    padding: 6px 0;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    background-color: #F1F2FF;
                    > div {
                        width: 100%;
                    }
                }
                input,
                input:hover,
                input:focus,
                input:active {
                    width: 100%;
                    background-color: unset;
                    border: none !important;
                    outline: none;
                    padding: 0;
                    height: 32px;
                }
            }
        }
    }
`