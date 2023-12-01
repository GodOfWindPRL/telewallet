import styled from 'styled-components'
import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";
import { GrShieldSecurity } from "react-icons/gr";
import { SlWallet } from "react-icons/sl";
import { HiOutlineInformationCircle } from "react-icons/hi"
import Language from './Language';

interface ISettings {
    onSetPage: (e: string) => void
}

const Settings = ({ onSetPage }: ISettings) => {
    const { t } = useTranslation()
    const [tab, setTab] = useState("");
    const onSetTab = (e: string) => {
        setTab(e)
    }

    return (
        <Wrap>
            <div className="container setting-back" onClick={() => {
                onSetPage("")
            }}>
                <FaArrowLeft />
                <span className="size-2-2">{t("settings")}</span>
            </div>
            <div className="container setting-wrap">
                <div className="setting-group">
                    <div className="sg-item" onClick={() => { onSetTab("language") }}>
                        <span className="size-1-2"><MdLanguage />{t("language")}</span>
                        <div className="sgi-bt">
                            <span className="size-1 color-gray">{t("english")}</span>
                            <FaChevronRight />
                        </div>
                    </div>
                    <div className="sg-item">
                        <span className="size-1-2"><FaShareNodes />{t("nodeSettings")}</span>
                        <div className="sgi-bt">
                            <FaChevronRight />
                        </div>
                    </div>
                </div>
                <div className="setting-group">
                    <div className="sg-item">
                        <span className="size-1-2"><GrShieldSecurity />{t("security")}</span>
                        <div className="sgi-bt">
                            <FaChevronRight />
                        </div>
                    </div>
                    <div className="sg-item">
                        <span className="size-1-2"><SlWallet />{t("userManual")}</span>
                        <div className="sgi-bt">
                            <FaChevronRight />
                        </div>
                    </div>
                    <div className="sg-item">
                        <span className="size-1-2"><HiOutlineInformationCircle />{t("aboutUs")}</span>
                        <div className="sgi-bt">
                            <FaChevronRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`app-page ${tab === "language" && "app-page-active"}`}>
                <Language onSetTab={onSetTab} />
            </div>
        </Wrap>
    );
}

export default Settings;

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