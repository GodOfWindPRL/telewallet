import styled from 'styled-components'
import iconBSC from 'assets/images/icon-network.svg'
import { FiChevronDown } from 'react-icons/fi';

const MainChains = () => {
    return (
        <Wrap className="">
            <img src={iconBSC} alt="" />
            <span className='size-0-2 color-black'>Binance Smart Chain Mainnet</span>
            <FiChevronDown size={20} />
        </Wrap>
    );
}

export default MainChains;

const Wrap = styled.div`
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 0 6px;
    height: 30px;
    background: #FFF;
    box-shadow: -2px 2px 2px #bab7b753;
    gap: 6px;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    > img {
        width: 20px;
        height: auto;
    }
    > span {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    > svg {
        margin-left: auto;
    }
`