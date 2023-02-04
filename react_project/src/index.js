import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './product_list';

class App extends React.Component {
    render() {
        return (
            <div>
                <ProductList />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));