import { subStringAddress } from 'helpers/subAddress';
import { useTranslation } from 'react-i18next';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import styled from 'styled-components'
import { MdContentCopy } from "react-icons/md";

const MainBalance = () => {
    const { t } = useTranslation()

    return (
        <Wrap className='container'>
            <div className="mb-total">
                <span className="color-blue size-0 mbt-address">
                    {subStringAddress({ text: "0x4t5mtfgg5gh$$YH$&h5*87%^8%uJhjnjn", length: 10 })}
                    <MdContentCopy />
                </span>
                <span className="color-gray size-5">$
                    <span className="color-black size-5">169.
                        <span className="color-black size-3-2">
                            34
                        </span>
                    </span>
                    <BsFillPlusCircleFill color='#709CD8' size={17} />
                </span>
            </div>
        </Wrap>
    );
}

export default MainBalance;

const Wrap = styled.div`
    flex-direction: column;
    width: 100%;
    background: #f6f8f9;
    align-items: center;
    .mb-total {
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        gap: 4px;
        align-items: center;
        .mbt-address {
            display: flex;
            align-items: center;
            padding: 4px 6px;
            background-color: #c4e3f25d;
            border-radius: 8px;
        }
        > span {
            display: flex;
            align-items: center;
            width: fit-content;
            text-align: center;
            > svg {
                margin-left: 6px;
            }
        }
    }
`