import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/index.js";
import { getGifs } from "../../src/helpers/getGifs.js";

describe( 'Pruebas en getGifs()', () => {

    test( 'Debe de retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('Hello');

        expect( gifs.length).toBeGreaterThan(0)
        expect( gifs [0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

    } )

} )