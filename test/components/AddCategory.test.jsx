import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/index.js";

describe( 'Pruebas en <AddCategory/>', () => {

    test( 'Debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {
        } }/> )
        const input = screen.getByRole( 'textbox' )

        fireEvent.input( input, { target: { value: 'Test' } } )
        expect( input.value ).toBe( 'Test' )

    } )

    test( 'Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Test'

        render( <AddCategory onNewCategory={ () => {} }/> )
        const input = screen.getByRole( 'textbox' )
        const form = screen.getByRole( 'form' )

        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit( form )

        expect( input.value ).toBe( '' )
    } )

} )
