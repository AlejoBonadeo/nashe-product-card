import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProductCard, { ProductTitle, ProductImage, ProductButtons } from '../.';

const product = {
  id: "1",
  title: "Coffee Mug",
};

const App = () => {
  return (
    <ProductCard 
    product={product}
    initialState={{
      count: 4,
      maxCount: 10
    }}
    >
      {
        () => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            
          </>
        )
      }
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
