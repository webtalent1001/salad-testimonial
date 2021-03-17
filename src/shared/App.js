import React, { Component } from 'react';
import CarouselSlide from '../component/CarouselSlide';
import { SLIDE_INFO } from './constants';

class App extends Component {
    render() {
        const content = SLIDE_INFO[3];
        return (
            <div class="app">
                <CarouselSlide
                    content={content}
                />
            </div>
        );
    }
}

export default App;