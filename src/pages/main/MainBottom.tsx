import styled from 'styled-components'
import { AiFillSetting } from 'react-icons/ai'
import { MdGeneratingTokens } from "react-icons/md";
import { RiNftFill } from "react-icons/ri";
import { MdHistoryToggleOff } from "react-icons/md";

interface IMainBottom {
    onSetTab: (e: number) => void,
    onSetPage: (e: string) => void,
    tab: number
}

const MainBottom = ({ onSetTab, tab, onSetPage }: IMainBottom) => {

    return (
        <Wrap className="container">
            <div className={`mbot-item ${tab === 0 && "mbot-item-active"}`} onClick={() => { onSetTab(0) }}>
                <MdGeneratingTokens color='gray' size={24} />
                <span className='size-0 color-gray'>Tokens</span>
            </div>
            <div className={`mbot-item ${tab === 1 && "mbot-item-active"}`} onClick={() => { onSetTab(1) }}>
                <RiNftFill color='gray' size={24} />
                <span className='size-0 color-gray'>NFTs</span>
            </div>
            <div className={`mbot-item ${tab === 2 && "mbot-item-active"}`} onClick={() => { onSetTab(2) }}>
                <MdHistoryToggleOff color='gray' size={24} />
                <span className='size-0 color-gray'>Activity</span>
            </div>
            <div className={`mbot-item ${tab === 3 && "mbot-item-active"}`} onClick={() => { onSetPage("setting") }}>
                <AiFillSetting color='gray' size={24} />
                <span className='size-0 color-gray'>Settings</span>
            </div>
        </Wrap>
    );
}

export default MainBottom;

const Wrap = styled.div`
    background: #FFF;
    margin-top: auto;
    padding-top: 6px;
    padding-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 16px;
    position: sticky;
    bottom: 0;
    justify-content: space-between;
    .mbot-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .mbot-item-active {
        > svg {
            fill: rgb(33, 112, 208);
        }
        > span {
            color: rgb(33, 112, 208);
        }
    }
`