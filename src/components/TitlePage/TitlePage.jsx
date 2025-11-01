import './TitlePage.scss'

const TitlePage = ({ children, desc}) => {
    return (
        <div className='title-work container'>
            <h3 className='title-work__h3'>
                <span>/</span>
                {children}
            </h3>
            <p className='title-work__p'>{desc}</p>
        </div>
    )
}

export default TitlePage