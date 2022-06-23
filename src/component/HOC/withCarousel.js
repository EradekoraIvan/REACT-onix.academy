import React from "react";

export default function withCarousel(Component, items, ref ) {
   class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
          position: 0,
          prev: false,
          next: false,
        };
      }

    prevHandler = () => {
        if (this.state.position === 0) {
            this.setState({
                prev: true,
                next: false,
            })
        } else{
            this.setState({
                prev: false,
                next: false
            })
            this.ref.current.childNodes.forEach((element) => {
                let transitionPrev = this.state.position + 387;
                this.setState({
                    position: transitionPrev
                })
                return (element.style = `transform: translateX(${transitionPrev}px`)
            })
        }
    }

    nextHandler = () => {
        const x = (items.length-3) * -387;
        console.log(x)
        if(this.state.position === x){
            this.setState({
                next: true,
                prev: false,
            })
        } else {
            this.setState({
                prev: false,
                next: false
            })
            this.ref.current.childNodes.forEach((element) => {
                let transitionNext = this.state.position - 387;
                this.setState({
                    position: transitionNext
                })
                return (element.style = `transform: translateX(${transitionNext}px)`)
            })
        }
    }
    render(){
        const { prev, next } = this.state;
        return(
            <Component 
            heading='test class workin'
            prevHandler={() => this.prevHandler()}
            nextHandler={() => this.nextHandler()}
            disabledPrev={prev}
            disabledNext={next}
            ref={this.ref}/>
        )
    }
   }
   return Carousel
}