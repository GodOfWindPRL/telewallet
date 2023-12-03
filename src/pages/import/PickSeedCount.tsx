import styled from 'styled-components'
import configColor from 'constants/configColor'
import { FaCaretDown } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import ClickOutSideComp from 'components/core/clickOutside'
import { useState } from 'react'

interface IPickSeedCount {
    data: number[],
    onPick: (e: number) => void,
    picked: number
}

const PickSeedCount = ({ data, onPick, picked }: IPickSeedCount) => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false)

    return (
        <ClickOutSideComp handleClickOutSide={() => { setShow(false) }}>
            <Wrap>
                <div className="picked" onClick={() => { setShow(!show) }}>
                    <span className="size-0">{t("pick")}
                        <span className="color-blue">{data[picked]}</span>
                        {t("seed")}
                    </span>
                    <FaCaretDown />
                </div>
                {show && <div className="pick-list">
                    {data.map((item, index) => <div key={index} className='pl-item' onClick={() => {
                        onPick(index);
                        setShow(false)
                    }}>
                        <span className="size-0">{t("pick")}
                            <span className="color-blue">{item}</span>
                            {t("seed")}
                        </span>
                    </div>)}
                </div>}
            </Wrap>
        </ClickOutSideComp>
    )
}
export default PickSeedCount

const Wrap = styled.div`
    display: flex;
    width: fit-content;
    position: relative;
    .picked {
        display: flex;
        align-items: center;
        gap: 6px;
        > span {
            display: flex;
            gap: 4px;
        }
    }
    .pick-list {
        position: absolute;
        top: 30px;
        box-shadow: -3px 3px 3px #bab7b753;
        border-radius: 6px;
        background: #FFF;
        display: flex;
        flex-direction: column;
        width: 150px;
        overflow: hidden;
        .pl-item {
            width: 100%;
            padding: 6px 10px;
            &:hover {
                background: #a39f9f40;
            }
            > span {
                display: flex;
                gap: 4px;
            }
        }
    }
`