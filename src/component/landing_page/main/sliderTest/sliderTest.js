import React, { useRef, useState } from 'react';
import style from './sliderTest.module.css';
import MainArrow from '../arrow/MainArrow';
import ArticleProduct from '../ArticleProduct/article_product';
import Dots from '../../../button/dots/dots_fs';
import GoCatalog from '../../../button/go_catalog/go_catalog';
import essentialOil from '../../../../img/product/essential_oil.png';
import hydrolate from '../../../../img/product/hydrolate.png';
import tableware from '../../../../img/product/tableware.png';

export default function SliderTest(props) {
    const slider = useRef(null);

    const [items, setItem] = useState([
        { image: `${essentialOil}`, id: 1 },
        { image: `${hydrolate}`, id: 2 },
        { image: `${essentialOil}`, id: 3 },
        { image: `${tableware}`, id: 4 },
        { image: `${hydrolate}`, id: 5 },
        { image: `${tableware}`, id: 6 },
        { image: `${essentialOil}`, id: 7 },
        { image: `${hydrolate}`, id: 8 },
    ]);
    const [position, setPosition] = useState(0);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);

    const prevHandler = () => {
        if (position === 0) {
            setPrev(true)
            setNext(false)
        } else{
            setPrev(false)
            setNext(false)
            slider.current.childNodes.forEach((element) => {
                let transitionPrev = position + 387;
                setPosition(transitionPrev)
                return (element.style = `transform: translateX(${transitionPrev}px`)
            })
        }
    }

    const nextHandler = () => {
        const x = (items.length-3) * -387;
        console.log(x)
        if(position === x){
            setNext(true)
            setPrev(false)
        } else {
            setNext(false)
            setPrev(false)
            slider.current.childNodes.forEach((element) => {
                let transitionNext = position - 387;
                setPosition(transitionNext)
                return (element.style = `transform: translateX(${transitionNext}px)`)
            })
        }
    }

    //const { tit } = props
    return (
        <section className="novelty container">
            <h2> test funtion </h2>
            <MainArrow
                prevHandler={() => prevHandler()}
                nextHandler={() => nextHandler()}
                disabledPrev={prev}
                disabledNext={next}
            />
            <div className={style.sliader} >
                <div className={style.sliderTrack} ref={slider}>
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
