import React from 'react';
import phone from '../images/phone.png';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
        {
    
        src: phone,  
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: phone,
        altText: 'Slide 2',
        caption: 'Slide 2'
    }
];

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} style={{height: '500px', width: '100%'}}/>
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem> 
            );
        });
        return (
            
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
            
//             <div className="featured-project"><strong>Featured Project</strong>
//                 <h4>THE SEVEN APP</h4>
//                 <p>
//                     Etiam vel lacus sed tellus dignissim iaculis. Donec ultricies, tortor eu blandit posuere,
//                     <br/>diam eros rutrum sem, at scelerisque nisl lectus et nulla. Fusce congue, elit a lacinia
// <br/>luctus, augue magna frigilla tortor, et ornare est turpis ut est dolor.</p>
//             </div>

        );
    }
}

export default Slider;