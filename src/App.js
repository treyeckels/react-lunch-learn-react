import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import Row from './Row';
import FilterItem from './FilterItem';

class App extends Component {
    state = {
        currentIndex: 0,
        currentData: [],
        filterType: 'all'
    };

    componentWillMount () {
        this.data = [
            {
                title: 'Cats Ring Bells For Treats 1',
                source: 'https://i.ytimg.com/vi/XzjtYNCNMCw/maxresdefault.jpg',
                caption: 'Ring Ring Ring',
                type: 'noHat'
            },
            {
                title: 'Cats in Pumpkin Hats Ring Bells For Treats',
                source: 'https://i.ytimg.com/vi/qejDmpb1JKk/maxresdefault.jpg',
                caption: 'Cats are wearing Pumpkin Hats',
                type: 'hat'
            },
            {
                title: 'Cats in Watermelon Hats Ring Bells For Treats',
                source: 'https://www.saveur.com/sites/saveur.com/files/styles/1000_1x_/public/images/2017/06/food-hat-cats_2000x1500.jpg?itok=XmX_S6yD&fc=50,50',
                caption: 'Cats are wearing Watermelon Hats',
                type: 'hat'
            },
            {
                title: 'Witch Hat',
                source: 'https://thumbnails.jukinmedia.com/thumbnail-1474937759233.jpg',
                caption: 'Cats are wearing Witch Hats',
                type: 'hat'
            }
        ];

        this.filters = [
            {
                type: 'all',
                typeLabel: 'All'
            },
            {
                type: 'noHat',
                typeLabel: 'Without Hat'
            },
            {
                type: 'hat',
                typeLabel: 'With Hat'
            }
        ];

        this.setState({
            currentData: this.data
        })
    }

    onRowClicked = (id) => {
        this.setState({
            currentIndex: id
        })
    }

    onFilterItems = (evt) => {
        let currentData = []
        let currentIndex = this.state.currentIndex

        if (evt.target.value === 'all') {
            currentData = this.data
        } else {
            currentData = this.data.filter((item, index) => {
                return (item.type == evt.target.value) ? true : false
            })
        }

        if (currentIndex > currentData.length - 1) {
            currentIndex = 0
        }

        this.setState({
            filterType: evt.target.value,
            currentData,
            currentIndex
        })
    }


    render () {
        return (
            <div className="App">
                <h1>The Cat In The Hat with JS</h1>
                <div>
                    <label>Select Type</label>
                    <select onChange={this.onFilterItems} className="hat-filter" defaultValue={this.state.filterType}>
                        {this.filters.map((item, index) => {
                            return (
                                <FilterItem
                                    key={index}
                                    type={item.type}
                                    typeLabel={item.typeLabel}
                                />
                            );
                        })}
                    </select>

                </div>

                <h2>Cats</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Preview</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.currentData.map((item, index) => {

                            return (
                                <Row
                                    key={index}
                                    id={index}
                                    title={item.title}
                                    source={item.source}
                                    onClick={this.onRowClicked}
                                    isChecked={this.state.currentIndex === index}
                                    isDisabled={index === 0 && this.state.currentIndex === 0}
                                />
                            );
                        })}
                    </tbody>
                </table>

                <h2>Image</h2>

                <Gallery
                    title={this.state.currentData[this.state.currentIndex].title}
                    source={this.state.currentData[this.state.currentIndex].source}
                    caption={this.state.currentData[this.state.currentIndex].caption}
                />
            </div>
        );
    }
}

export default App;
