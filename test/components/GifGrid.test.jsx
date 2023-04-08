import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/index.js";
import { useFetchGifs } from "../../src/hooks/useFetchGifs.js";


jest.mock( "../../src/hooks/useFetchGifs.js" )
describe( 'Pruebas en <GifGrid/>', () => {

    const category = 'Test'

    test( 'Debe de mostrar el loading inicalmente', () => {

        useFetchGifs.mockReturnValue( {
            images: [],
            isLoading: true,
        } )

        render( <GifGrid category={ category }/> )
        expect( screen.getByText( category ) )
    } )

/*
    test( 'Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        let wrapper;
        let gifs = [];

        beforeEach( () => {
            jest.clearAllMocks();
            gifs = [
                {
                    id: 'ABC',
                    url: 'https://localhost/cualquier/cosa.jpg',
                    title: 'Cualquier Cosa'
                },
                {
                    id: '123',
                    url: 'https://localhost/cualquier/cosa.jpg',
                    title: 'Cualquier Cosa'
                }
            ]

            useFetchGifs.mockReturnValue( {
                data: gifs,
                loading: false,
            } );
            wrapper = shallow( <GifGrid category={ category }/> );
        } )

    } )

 */
} )