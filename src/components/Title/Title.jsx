import ViewAllProjects from '../../features/ViewAllProjects/ViewAllProjects'

import './Title.scss'

const Title = ({ children }) => {
    return (
        <div className='title'>
            <div className='title__content'>
                <h2 className='h2'>
                    <span className='h2__span'>#</span>
                    {children}
                </h2>

                <span className='liner'></span>
            </div>

            <ViewAllProjects />
        </div>
    )
}

export default Title
