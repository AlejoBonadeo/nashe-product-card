import * as React from 'react';
import renderer from 'react-test-renderer'
import { ProductTitle } from '../../src/components/ProductTitle';

describe('ProductTitle', () => {
    test('debe de mostrar el componente correctamente en el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product"/>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
    test('debe de mostrar el componente con el nombre del producto', () => {
        
    })
    
})