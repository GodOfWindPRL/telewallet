import styled from 'styled-components'
import { useState } from 'react';
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { MdDone } from "react-icons/md";
import { AccItem } from './AccountList';
import { CiEdit } from "react-icons/ci";
import { LuCopy } from "react-icons/lu";

interface ISettings {
    onSetAccount: (e: number | null) => void,
    data: AccItem | null
}

const AccountItem = ({ onSetAccount, data }: ISettings) => {
    const { t } = useTranslation();
    console.log(data)

    return (
        <Wrap>
            <div className="container setting-back" onClick={() => {
                onSetAccount(null)
            }}>
                <FaArrowLeft />
                <span className="size-2-2">{t("accountDetail")}</span>
            </div>
            <div className="container setting-wrap">
                <div className="setting-group">
                    <div className="sg-item sg-item-2" onClick={() => { }}>
                        <span className="size-1-2">{t("name")}</span>
                        <span className="sgi-bt size-1">{data ? data.name : "--"}<CiEdit /></span>
                    </div>
                    <div className="sg-item sg-item-2" onClick={() => { }}>
                        <span className="size-1-2">{t("address")}</span>
                        <span className="sgi-bt size-1">{data ? data.address : "--"}<LuCopy /></span>
                    </div>
                    <div className="sg-item" onClick={() => { }}>
                        <span className="size-1-2">{t("asset")}</span>
                        <div className="sgi-bt size-1">
                            ${data ? data.value : "--"}
                        </div>
                    </div>
                    <div className="sg-item" onClick={() => { }}>
                        <span className="size-1-2">{t("backupSeed")}</span>
                        <div className="sgi-bt">
                            <FaChevronRight />
                        </div>
                    </div>
                    <div className="sg-item" onClick={() => { }}>
                        <span className="size-1-2">{t("backupKey")}</span>
                        <div className="sgi-bt">
                            <FaChevronRight />
                        </div>
                    </div>
                </div>
                <div className="setting-group">
                    <div className="sg-item" onClick={() => { }}>
                        <span className="size-1-2 color-red">{t("deleteAccount")}</span>
                        {/* <div className="sgi-bt">
                            <MdDone />
                        </div> */}
                    </div>
                </div>
            </div>
        </Wrap >
    );
}

export default AccountItem;

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
            .sg-item-2 {
                flex-direction: column;
                align-items: flex-start !important;
                gap: 4px;
            }
        }
    }
`