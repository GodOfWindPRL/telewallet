import styled from 'styled-components'
import iconBTC from 'assets/images/icon-btc.png'
import iconETH from 'assets/images/icon-eth.png'
import numeral from "numeral";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";

const MainTokens = () => {
    const dataToken = [
        {
            name: "BitCoin",
            sign: "BTC",
            value: 0.5334,
            cost: 456566.56,
            icon: iconBTC
        },
        {
            name: "Ethereum",
            sign: "ETH",
            value: 3.234,
            cost: 2234.76,
            icon: iconETH
        },
        {
            name: "Parallel token",
            sign: "PRL",
            value: 34234.5435,
            cost: 7657.56756,
            icon: iconBTC
        },
        {
            name: "TRX",
            sign: "TRX",
            value: 34234.5435,
            cost: 7657.56756,
            icon: iconBTC
        },
        {
            name: "Ac ac ac",
            sign: "AGH",
            value: 34234.5435,
            cost: 7657.56756,
            icon: iconBTC
        },
        {
            name: "Ethereum",
            sign: "ETH",
            value: 3.234,
            cost: 2234.76,
            icon: iconETH
        },
        {
            name: "Parallel token",
            sign: "PRL",
            value: 34234.5435,
            cost: 7657.56756,
            icon: iconBTC
        },
        {
            name: "TRX",
            sign: "TRX",
            value: 34234.5435,
            cost: 7657.56756,
            icon: iconBTC
        },
        {
            name: "Ac ac ac",
            sign: "AGH",
            value: 34234.5435,
            cost: 7657.56756,
            icon: iconBTC
        }
    ]

    return (
        <Wrap className='container'>
            <div className="mt-title">
                <span className='size-1-2 color-blue'>Assets</span>
                <div className="mtt-bt">
                    <LuRefreshCcw color={"rgb(33, 112, 208)"} size={20} />
                </div>
                <div className="mtt-bt">
                    <IoIosAddCircleOutline color={"rgb(33, 112, 208)"} size={20} />
                </div>
            </div>

            {dataToken.map((item, index) => <div className="mt-item" key={index} >
                <div>
                    <img src={item.icon} alt="" />
                    <div className="mti-infor">
                        <span className="size-1-2 color-black">{item.name}</span>
                    </div>
                    <div className="mti-value">
                        <span className="size-1 color-black">{numeral(item.value).format("0,0.[0000]")} {item.sign}</span>
                        <span className="size-0 color-gray">${numeral(item.cost).format("0,0.[00]")}</span>
                    </div>

                </div>
            </div>)}
        </Wrap>
    );
}

export default MainTokens;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    .mt-title {
        display: flex;
        align-items: center;
        gap: 10px;
        > span {
            margin-right: auto;
        }
    }
    .mt-item {
        cursor: pointer;
        width: 100%;
        /* padding: 3px; */
        > div {
            width: 100%;
            border-radius: 10px;
            display: flex;
            align-items: center;
            padding: 6px 0;
            /* background: #FFF;
            box-shadow: -2px 2px 2px #bab7b753; */
            gap: 8px;
            > img {
                width: 32px;
                height: auto;
            }
            .mti-tokens {
                width: 40px;
                height: 40px;
                position: relative;
                > img {
                    position: absolute;
                    width: 26px;
                    height: auto;
                    &:first-child {
                        top: 0;
                        left: 0;
                        z-index: 1;
                    }
                    &:last-child {
                        bottom: 0;
                        right: 0; 
                    }
                }
            }
            .mti-infor {
                display: flex;
                flex-direction: column;
                gap: 4px;
                flex: 1;
            }
            .mti-value {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }
        }
    }
    .mt-item-2 {
        position: relative;
        > div {
            z-index: 1;
            position: relative;
        }
        &::after {
            position: absolute;
            width: 90%;
            height: 100%;
            border-radius: 8px;
            background: #FFF;
            box-shadow: -4px 4px 4px #bab7b753;
            content: "";
            bottom: -10px;
            z-index: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`