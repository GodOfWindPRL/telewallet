import styled from 'styled-components'
import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from "react-icons/fa";
import IconWallet from 'components/core/IconWallet';
import { subStringAddress } from 'helpers/subAddress';
import Button from 'components/core/Button';
import AccountItem from './AccountItem';

interface ISettings {
    onSetPage: (e: string) => void
}

export type AccItem = {
    name: string,
    address: string,
    value: number,
    privateKey: string,
    phrase: string[]
}

const AccountList = ({ onSetPage }: ISettings) => {
    const { t } = useTranslation()
    const [currentAccount, setCurrentAccount] = useState<null | number>(null);
    const onSetAccount = (e: number | null) => {
        setCurrentAccount(e)
    }


    const arr = [
        {
            name: "QuyenKac",
            address: "0x0fg546Btg72KL7LKGT0GF5R99",
            value: 353454.57657,
            privateKey: "5435435345345345345345345",
            phrase: ["keckec", "cacac", "keckec", "cacac", "keckec", "cacac", "keckec", "cacac", "keckec", "cacac", "keckec", "cacac"]
        },
        {
            name: "QuyenKec",
            address: "0x0fg546Btg72KL7LKGT0688FGJGHK",
            value: 353454.57657,
            privateKey: "5435435345345345345345345",
            phrase: ["keckec", "cacac", "keckec", "cacac", "keckec", "cacac", "keckec", "cacac", "keckec", "cacac", "keckec", "cacac"]
        }
    ] as AccItem[]
    const listAccount = [...arr, ...arr, ...arr, ...arr, ...arr, ...arr, ...arr, ...arr, ...arr, ...arr]

    return (
        <Wrap>
            <div className="container setting-back" onClick={() => {
                onSetPage("")
            }}>
                <FaArrowLeft />
                <span className="size-2-2">{t("account")}</span>
            </div>
            <div className="wrap-page">
                <div className="container setting-wrap">
                    {listAccount.map((item, index) => <div className="setting-group">
                        <div className="sg-item" onClick={() => { onSetAccount(index) }}>
                            <IconWallet idItem={index} />
                            <div className="sgi-text">
                                <span className="size-0-2">{item.name}</span>
                                <span className="size-1">{subStringAddress({ text: item.address, length: 8 })}</span>
                            </div>
                            <div className="sgi-bt">
                                {/* <span className="size-1 color-gray">{t("english")}</span> */}
                                <FaChevronRight />
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className='container setting-bt'>
                <Button variant='border' className='color-blue' text='+ Add new account' />
            </div>
            <div className={`app-page ${currentAccount !== null && "app-page-active"}`}>
                <AccountItem onSetAccount={onSetAccount} data={currentAccount ? listAccount[currentAccount] : null} />
            </div>
        </Wrap>
    );
}

export default AccountList;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #f6f8f9;
    height: 100%;
    overflow: hidden;
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
        z-index: 1;
        box-shadow: -2px 2px 2px #bab7b753;
        > span {
            margin-left: auto;
            margin-right: auto;
            transform: translateX(-8px);
        }
    }
    .setting-bt {
        position: absolute;
        bottom: 0;
        z-index: 1;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #FFF;
        box-shadow: 0 -2px 2px 2px #bab7b753;
    }
    .wrap-page {
        overflow: auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-height: 100%;
    }
    .setting-wrap {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-bottom: 80px;
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
                gap: 20px;
                padding: 10px 0;
                .sgi-text {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    margin-right: auto;
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