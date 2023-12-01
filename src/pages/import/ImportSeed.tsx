import styled from 'styled-components'
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Button from 'components/core/Button';
import { GrClearOption } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react';

interface ISettings {
    onSetTab: (e: string) => void
}

const ImportSeed = ({ onSetTab }: ISettings) => {
    const { t } = useTranslation();
    const [dataPhrase, setDataPhrase] = useState(["", "", "", "", "", "", "", "", "", "", "", "",])

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
                            <span className="size-0">{t("pick12phrase")}</span>
                            <FaCaretDown />
                        </div>
                        <div className="ispr-clear">
                            <GrClearOption />
                            <span className="size-0">{t("clearAll")}</span>
                        </div>
                    </div>
                    <div className="isp-table">
                        <table>
                            <tbody>
                                {[0, 1, 2, 3].map((item, index) => <tr key={index}>
                                    {[1, 2, 3].map((item2, index2) => <td key={index2}>
                                        {item * 3 + item2}
                                    </td>)}
                                </tr>)}
                            </tbody>
                        </table>
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
                td {
                    border: 1px solid black;
                    border-collapse: collapse;
                }
                table {
                    width: 100%;
                    tr:first-child {
                        td:first-child {
                            border-radius: 10px 0;
                        }
                    }
                }
            }
        }
    }
`