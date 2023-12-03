import styled from 'styled-components'
import configColor from 'constants/configColor'
import { FaCaretDown } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import ClickOutSideComp from 'components/core/clickOutside'
import { useState } from 'react'
import numeral from 'numeral'

interface IPickSeedCount {
    data: TokenBalance[],
    onPick: (e: number) => void,
    picked: number
}

type TokenBalance = {
    icon: string,
    name: string,
    value: number
}

const PickToken = ({ data, onPick, picked }: IPickSeedCount) => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false)

    return (
        <ClickOutSideComp handleClickOutSide={() => { setShow(false) }}>
            <Wrap>
                <div className="picked" onClick={() => { setShow(!show) }}>
                    <img src={data[picked].icon} />
                    <div className="sgia-text">
                        <span className="size-0-2">{data[picked].name}</span>
                        <span className="size-0">{t("balance")}: {numeral(data[picked].value).format("0,0.[00]")} ETH</span>
                    </div>
                    <FaCaretDown />
                </div>
                {show && <div className="pick-list">
                    {data.map((item, index) => <div key={index} className='pl-item' onClick={() => {
                        onPick(index);
                        setShow(false)
                    }}>
                        <img src={item.icon} />
                        <div className="sgia-text">
                            <span className="size-0-2">{item.name}</span>
                            <span className="size-0">{t("balance")}: {numeral(item.value).format("0,0.[00]")} ETH</span>
                        </div>
                    </div>)}
                </div>}
            </Wrap>
        </ClickOutSideComp>
    )
}
export default PickToken

const Wrap = styled.div`
    display: flex;
    width: fit-content;
    position: relative;
    width: 100%;
    .picked {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 10px;
        > div {
            display: flex;
            flex-direction: column;
            margin-right: auto;
        }
    }
    .pick-list {
        position: absolute;
        top: 46px;
        box-shadow: -3px 3px 3px #bab7b753;
        border-radius: 6px;
        background: #FFF;
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: auto;
        max-height: 140px;
        .pl-item {
            width: 100%;
            padding: 6px 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            > div {
                display: flex;
                flex-direction: column;
                margin-right: auto;
            }
            &:hover {
                background: #a39f9f40;
            }
        }
    }
`