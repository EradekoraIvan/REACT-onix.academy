import React from 'react';
import MainArrow from '../landing_page/main/arrow/MainArrow';
import Dots from '../button/dots/dots_fs';
import GoCatalog from '../button/go_catalog/go_catalog';

class CarouselView extends React.Component {
  render() {
    const { heading, products, className } = this.props;
    return (
      <section className={className}>
        <h2>{heading}</h2>
        <MainArrow />
        <div className="slider_w">
          {products}
        </div>
        <Dots />
        <GoCatalog />
      </section>
    );
  }
}
export default CarouselView;
