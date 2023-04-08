import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/index.js";

describe( 'Pruebas en <GifItem/>', () => {

    const title = 'Prueba'
    const url = 'https://google.com/'

    test( 'Debe de hacer match con el snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url }/> )
        expect( container ).toMatchSnapshot();

    } )

    test( 'Debe de mostrar la imagen con la URL y el ALT indicado', () => {

        render( <GifItem title={ title } url={ url }/> )
        const { src, alt } = screen.getByRole( 'img' )
        expect( src ).toBe( url )
        expect( alt ).toBe( alt )

    } )
} )