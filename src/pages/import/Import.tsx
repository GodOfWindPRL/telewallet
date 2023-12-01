import styled from 'styled-components'
import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { LuImport } from "react-icons/lu";
import AddAccount from './AddAccount';
import { MdOutlineAdd } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import ImportAccount from './ImportAccount';
import ImportSeed from './ImportSeed';

interface ISettings {
    onSetPage: (e: string) => void
}

const Import = ({ onSetPage }: ISettings) => {
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
                <span className="size-2-2">{t("wallet")}</span>
            </div>
            <div className="container setting-wrap">
                <div className="setting-group">
                    <div className="sg-item" onClick={() => { setTab("importSeed") }}>
                        <span className="size-1-2"><MdAddCard />{t("importSeedPhrase")}</span>
                    </div>
                    <div className="sg-item" onClick={() => { setTab("addAccount") }}>
                        <span className="size-1-2"><MdOutlineAdd />{t("addNewAccount")}</span>
                    </div>
                    <div className="sg-item" onClick={() => { setTab("importAccount") }}>
                        <span className="size-1-2"><LuImport />{t("importPrivateKey")}</span>
                    </div>
                </div>
            </div>
            <div className={`app-page ${tab === "importSeed" && "app-page-active"}`}>
                <ImportSeed onSetTab={onSetTab} />
            </div>
            <div className={`app-page ${tab === "addAccount" && "app-page-active"}`}>
                <AddAccount onSetTab={onSetTab} />
            </div>
            <div className={`app-page ${tab === "importAccount" && "app-page-active"}`}>
                <ImportAccount onSetTab={onSetTab} />
            </div>
        </Wrap>
    );
}

export default Import;

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