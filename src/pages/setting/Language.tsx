import styled from 'styled-components'
import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { MdDone } from "react-icons/md";

interface ISettings {
    onSetTab: (e: string) => void
}

const Language = ({ onSetTab }: ISettings) => {
    const { t } = useTranslation();
    const [lang, setLang] = useState("en");

    const dataLang = ["en", "vi", "zh", "ru"]

    return (
        <Wrap>
            <div className="container setting-back" onClick={() => {
                onSetTab("")
            }}>
                <FaArrowLeft />
                <span className="size-2-2">{t("language")}</span>
            </div>
            <div className="container setting-wrap">
                <div className="setting-group">
                    {dataLang.map((item, index) => <div className="sg-item" key={index} onClick={() => { setLang(item) }}>
                        <span className="size-1-2">{t(item)}</span>
                        {lang === item && <div className="sgi-bt">
                            <MdDone />
                        </div>}
                    </div>)}

                </div>
            </div>
        </Wrap >
    );
}

export default Language;

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
            padding: 0 16px;
            display: flex;
            flex-direction: column;
            width: 100%;
            .sg-item {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                border-bottom: 1px solid #a5a1a14d;
                padding: 10px 0;
                &:last-child {
                    border-bottom: none;
                }
                > span {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .sgi-bt {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
            }
        }
    }
`