import './Button.scss'

const Button = ({ children, gray = false }) => {
    const grayBorder = gray ? 'base-button border-grey' : 'base-button'
    return <button className={grayBorder}>{children}</button>
}

export default Button
