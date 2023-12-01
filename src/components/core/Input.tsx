import styled from 'styled-components'
import configColor from 'constants/configColor'

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <Wrap {...props} />
    )
}
export default Input

const Wrap = styled.input`
    
`