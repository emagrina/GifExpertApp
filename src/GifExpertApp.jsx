import { Container } from 'react-bootstrap';
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [ '' ] )
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory ) ) return;
        setCategories( [ newCategory, ...categories ] )
    }

    return (
        <Container>
            <h1 className="text-center m-lg-3">GifExpertApp</h1>
            <AddCategory onNewCategory={ onAddCategory }/>
            {
                categories.map( ( category ) => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ) )
            }

        </Container>
    )
}
