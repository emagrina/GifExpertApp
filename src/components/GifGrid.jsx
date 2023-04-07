import { useState } from "react";
import CopiedToast from './CopiedToast';
import GifItem from './GifItem';
import { useFetchGifs } from "../hooks/useFetchGifs.js";

export const GifGrid = ( { category } ) => {
    const [ showToast, setShowToast ] = useState( false );
    const { images, isLoading } = useFetchGifs( category );

    const copyToClipboard = ( url ) => {
        navigator.clipboard.writeText( url ).then( () => {
            setShowToast( true );
            setTimeout( () => setShowToast( false ), 5000 );
        } );
    };

    return ( <>
        <h3 className="m-lg-3">{ category }</h3>
        { isLoading && ( <div className="lds-ripple">
            <div></div>
            <div></div>
        </div> ) }
        <div className="container gif-results">
            { images.map( ( { id, url, title } ) => ( <GifItem
                key={ id }
                id={ id }
                url={ url }
                title={ title }
                copyToClipboard={ copyToClipboard }
                showToast={ showToast }
                setShowToast={ setShowToast }
            /> ) ) }
        </div>
        <CopiedToast showToast={ showToast } onClose={ () => setShowToast( false ) }/>

    </> );
};
