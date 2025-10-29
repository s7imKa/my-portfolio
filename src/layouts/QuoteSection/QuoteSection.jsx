import Quote from '../../components/Quote/Quote'


import './QuoteSection.scss'

const QuoteSection = () => {


    return (
        <section className='quote-section' >
            <div className='quote-section__container container'>
                <Quote />
                <span className='box' ></span>
            </div>
        </section>
    )
}

export default QuoteSection
