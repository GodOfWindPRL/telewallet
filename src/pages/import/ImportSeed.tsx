import styled from 'styled-components'
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Button from 'components/core/Button';
import { GrClearOption } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import PickSeedCount from './PickSeedCount';

interface ISettings {
    onSetTab: (e: string) => void
}

const dataCount = [12, 15, 18, 21, 24]

const ImportSeed = ({ onSetTab }: ISettings) => {
    const { t } = useTranslation();
    const [dataPhrase, setDataPhrase] = useState(["", "", "", "", "", "", "", "", "", "", "", "",])
    const [focusItem, setFocusItem] = useState<null | number>(null);
    const [countSeed, setCountSeed] = useState(0)

    const onSetPhrase = (e: string, idx: number) => {
        let newData = [...dataPhrase];
        newData[idx] = e
        setDataPhrase(newData)
    }

    const onClear = () => {
        setDataPhrase(["", "", "", "", "", "", "", "", "", "", "", "",])
    }

    const onPickCount = (e: number) => {
        setCountSeed(e)
    }

    useEffect(() => {
        let newData = Array.from({ length: dataCount[countSeed] }, (v, i) => "")
        setDataPhrase(newData)
    }, [countSeed])

    return (
        <Wrap>
            <div className="container setting-back" onClick={() => {
                onSetTab("")
            }}>
                <FaArrowLeft />
                <span className="size-2-2">{t("importSeedPhrase")}</span>
            </div>
            <div className="container setting-wrap">
                <div className="aa-group">
                    <div className="isp-row">
                        <div className="ispr-pick">
                            {/* <span className="size-0">{t("pick12phrase")}</span>
                            <FaCaretDown /> */}
                            <PickSeedCount data={dataCount} onPick={onPickCount} picked={countSeed} />
                        </div>
                        <div className="pointer ispr-clear" onClick={onClear}>
                            <GrClearOption />
                            <span className="size-0">{t("clearAll")}</span>
                        </div>
                    </div>
                    <div className="isp-table">
                        {dataPhrase.map((item, index) => <div key={index} className={focusItem === index ? "ispt-active" : ""}>
                            <span className="size-0-2 color-gray">{index + 1}.</span>
                            <div>
                                <input
                                    type="text"
                                    value={item}
                                    onChange={(e: any) => { onSetPhrase(e.target.value, index) }}
                                    className='size-0-2'
                                    onFocus={() => { console.log("focus"); setFocusItem(index) }}
                                    onBlur={() => { setFocusItem(null) }}
                                />
                            </div>
                        </div>)}
                    </div>
                    <div className="aa-content">
                        <span className="size-0-2">{t("whatPhrase")}</span>
                        <span className="size-0">{t("descPhrase")}</span>
                        <span className="size-0-2">{t("whatPhrase2")}</span>
                        <span className="size-0">{t("descPhrase2")}</span>
                        <Button text='confirm' variant='fill' />
                    </div>
                </div>
            </div>
        </Wrap >
    );
}

export default ImportSeed;

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
        .aa-group {
            background-color: #FFF;
            border-radius: 8px;
            padding: 10px 16px;
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 16px;
            .sg-bt {
                display: flex;
                width: 100%;
                align-items: center;
                gap: 20px;
                margin-top: 6px;
                margin-bottom: 6px;
            }
            .isp-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                > div {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
            }
            .isp-table {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                padding: 1px;
                background-color: #EEF0F5;
                border-radius: 7px;
                overflow: hidden;
                gap: 1px;
                > div {
                    background-color: #F7FAFC;
                    width: calc((100% - 2px) / 3);
                    display: flex;
                    align-items: center;
                    padding: 0 4px;
                    height: 40px;
                    &:nth-child(1) {
                        border-radius: 6px 0 0 0;
                    }
                    &:nth-child(3) {
                        border-radius: 0 6px 0 0;
                    }
                    &:nth-last-child(-n + 3) {
                        border-radius: 0 0 0 6px;
                    }
                    &:last-child {
                        border-radius: 0 0 6px 0;
                    }
                    > div {
                        flex: 1;
                        > input {
                            background-color: #F7FAFC;
                            width: 100%;
                            border: none;
                            padding: 4px;
                            height: fit-content;
                            &:hover,
                            &:focus,
                            &:active {
                                border: none !important;
                                outline: none;
                            }
                        }
                    }
                }
                .ispt-active {
                    box-sizing: border-box;
                    background-color: #FFF;
                    box-shadow: -2px 2px 2px #bab7b753;
                    z-index: 1;
                    border: 2px solid rgba(11, 103, 215, 0.676);
                    border-style: inset !important;
                    border-radius: 6px !important;
                    > span {
                        color: black;
                    }
                    > div {
                        flex: 1;
                        > input {
                            background-color: #FFF;
                        }
                    }
                }
            }
            .aa-content {
                display: flex;
                flex-direction: column;
                gap: 10px;
                > button {
                    max-width: 150px;
                    margin: 10px auto;
                }
            }
        }
    }
`