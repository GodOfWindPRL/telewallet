import styled from 'styled-components'
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Button from 'components/core/Button';

interface ISettings {
    onSetTab: (e: string) => void
}

const ImportAccount = ({ onSetTab }: ISettings) => {
    const { t } = useTranslation();

    return (
        <Wrap>
            <div className="container setting-back" onClick={() => {
                onSetTab("")
            }}>
                <FaArrowLeft />
                <span className="size-2-2">{t("importAccount")}</span>
            </div>
            <div className="container setting-wrap">
                <div className="aa-group">
                    <span className="size-0 aag-desc">{t("descImportAccount")}<a href='/'>{t("here")}</a></span>
                    <span className="size-1-2">{t("enterYourPrivateKey")}:</span>
                    <input type="text" />
                    <div className="sg-bt">
                        <Button variant='border' text='cancel' />
                        <Button variant='fill' text='import' />
                    </div>
                </div>
            </div>
        </Wrap >
    );
}

export default ImportAccount;

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
            .aag-desc {
                
            }
            .sg-bt {
                display: flex;
                width: 100%;
                align-items: center;
                gap: 20px;
                margin-top: 6px;
                margin-bottom: 6px;
            }
        }
    }
`