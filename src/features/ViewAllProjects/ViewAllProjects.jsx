import { useI18n } from '../../i18n/context'

import './ViewAllProjects.scss'

const ViewAllProjects = () => {
    const { t } = useI18n()
    return (
        <a href='#' className='link-all-projects'>
            {t('title.all')} {'~~>'}
        </a>
    )
}

export default ViewAllProjects
