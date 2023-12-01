import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import configColor from 'constants/configColor'
import LoadingSpinner from './LoadingSpinner'

interface IB extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    isLoading?: boolean,
    className?: string,
    disabled?: boolean,
    variant?: "fill" | "border",
}

const Button = ({ text, isLoading = false, className, disabled = false, variant = "border", ...props }: IB) => {
    const { t } = useTranslation();
    return (
        <Wrap className={`${isLoading ? "bt-loading" : ""} ${className} style-${variant}`} disabled={disabled || isLoading} {...props}>
            <span className={`color-${variant === "fill" ? "black" : "primary"} size-2-2`}>{!!isLoading ? <LoadingSpinner color={variant === "fill" ? "white" : "primary"} />
                : <>{t(text)}</>}
            </span>
        </Wrap>
    )
}
export default Button

const Wrap = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    background: ${configColor.white};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    &.style-border{
        border: 1px solid ${configColor.blue};
        > span {
            color: ${configColor.blue};
        }
        /* :hover {
            border: 1px solid ${configColor.blue2};
            > span {
                color: ${configColor.blue2};
            }
        } */
    }
    &.style-fill{
        border: 1px solid ${configColor.blue};
        background: ${configColor.blue};
        > span {
            color: ${configColor.white};
        }
        /* :hover {
            border: 1px solid ${configColor.blue2};
            background: ${configColor.blue2};
        } */
    }
    &:disabled{
        opacity: 0.4;
        cursor: not-allowed;
    }
    &.bt-loading {
        opacity: 0.4;
        cursor: not-allowed;
    }
    @keyframes rotate-center-2 {
        0% {
            transform: rotate(0);
        }
        100% {
           transform: rotate(360deg);
        }
    }
`