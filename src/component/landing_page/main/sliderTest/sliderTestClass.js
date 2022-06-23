import React, { createRef } from 'react';
import style from './sliderTest.module.css';
import MainArrow from '../arrow/MainArrow';
import ArticleProduct from '../ArticleProduct/article_product';
import Dots from '../../../button/dots/dots_fs';
import GoCatalog from '../../../button/go_catalog/go_catalog';
import essentialOil from '../../../../img/product/essential_oil.png';
import hydrolate from '../../../../img/product/hydrolate.png';
import tableware from '../../../../img/product/tableware.png';
import withCarousel from '../../../HOC/withCarousel';

const items = [
    { image: `${essentialOil}`, id: 1 },
    { image: `${hydrolate}`, id: 2 },
    { image: `${essentialOil}`, id: 3 },
    { image: `${tableware}`, id: 4 },
    { image: `${hydrolate}`, id: 5 },
    { image: `${tableware}`, id: 6 },
    { image: `${essentialOil}`, id: 7 },
    { image: `${hydrolate}`, id: 8 },
];

class SliderTestCass extends React.Component{

    render (){
        const { heading, prevHandler, nextHandler, disabledPrev, disabledNext } = this.props
        return(
            <section className="novelty container">
            <h2> {heading} </h2>
            <MainArrow
                prevHandler={prevHandler}
                nextHandler={nextHandler}
                disabledPrev={disabledPrev}
                disabledNext={disabledNext}
            />
            <div className={style.sliader} >
                <div className={style.sliderTrack} ref={this.ref}>
                    {items.map((item) =>
                        <div className={style.item}>
                            <ArticleProduct key={item.id} image={item.image} />
                        </div>)
                    }
                </div>
            </div>
            <Dots />
            <GoCatalog />
        </section>
        )
    }
    
}

export default withCarousel(SliderTestCass, items );
