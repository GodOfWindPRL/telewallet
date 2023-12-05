import styled from 'styled-components'
import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { FaRegAddressBook } from "react-icons/fa6";
import { subStringAddress } from 'helpers/subAddress';
import numeral from 'numeral';
import iconBTC from 'assets/images/icon-btc.png'
import iconETH from 'assets/images/icon-eth.png'
import { FaArrowCircleRight } from "react-icons/fa";
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
    const [stageConfirm, setStageConfirm] = useState(false)

    const onSetToken = (e: number) => {
        setToken(e)
    }

    const onSend = async () => {
        // check 
        setStageConfirm(true)
    }

    return (
        <Wrap>
            <div className="container setting-back" onClick={() => {
                setStageConfirm(false);
                onSetPage("")
            }}>
                <FaArrowLeft />
                <span className="size-2-2">{t("send")}</span>
            </div>
            {!stageConfirm ? <div className="container setting-wrap">
                <div className="setting-group">
                    <div className="sg-item">
                        <span className="size-0-2">{t("from")}</span>
                        <div className="sgi-add">
                            <FaRegAddressBook />
                            <div className="sgia-text">
                                <span className="size-0-2">QuyenKec</span>
                                <span className="size-0">{subStringAddress({ text: "0x4tgxcbTGH$%RHBFGcg45gdffdsf", length: 7 })}</span>
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
                <Button variant='fill' text='send' onClick={onSend} />
            </div>
                : <div className="container setting-wrap">
                    <div className="setting-group">
                        <div className="sg-transfer">
                            <div className="sgt-item">
                                <span className="size-0-2">{t("from")}</span>
                                <span className="size-0">{"0x4tgxcbTGH$%RHBFGcg45gdffdsf"}</span>
                                <span className="size-0-2 color-blue">QuyenKec</span>

                            </div>
                            <FaArrowCircleRight />
                            <div className="sgt-item">
                                <span className="size-0-2">{t("to")}</span>
                                <span className="size-0">{"0x4tgxcbTGH$%RHBFGcg45gdffdsf"}</span>
                                <span className="size-0-2 color-blue"></span>
                            </div>
                        </div>
                        <div className="sg-send">
                            <span className="size-1-2">{t("send")} <img src={dataToken[token].icon} alt="" /></span>
                            <span className="size-1">{numeral(464356.435345).format("0,0.[00000]")} {dataToken[token].name}</span>
                        </div>
                    </div>
                    <div className="setting-group">
                        <div className="sg-row">
                            <span className="size-0-2 color-blue">{t("gas")} <span className="size-0 color-gray">({t("estimated")})</span></span>
                            <div className="sgr-value">
                                <span className="size-0">${0.2343}   <span className="size-0-2">{0.004567} ETH</span></span>
                                <span className="size-0-2 color-gray">{t("maxFee")} <span className="size-0">{0.0056} ETH</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="st-bt">
                        <Button variant='border' text='reject' />
                        <Button variant='fill' text='confirm' />
                    </div>
                </div>}
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
        flex: 1;
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
            .sg-transfer {
                display: flex;
                align-items: center;
                margin-top: 10px;
                > svg {
                    scale: 1.5;
                }
                .sgt-item {
                    border-radius: 6px;
                    display: flex;
                    flex-direction: column;
                    padding: 6px 10px 10px 10px;
                    background-color: #F5F6FA;
                    flex: 1;
                    align-self: stretch;
                    gap: 10px;
                    > span {
                        word-wrap: break-word;
                        word-break: break-all;
                    }
                    > span:last-child {
                        margin-top: auto;
                    }
                }
            }
            .sg-send {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 6px;
                margin: 10px 0;
                > span {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
            }
            .sg-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 10px 0 4px 0;
                .sgr-value {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    > span {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }
                }
            }
        }
        .st-bt {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: auto;
            margin-bottom: 10px;
        }
        > button {
            margin-top: auto;
            margin-bottom: 10px;
        }
    }
`