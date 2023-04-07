import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState( 'Rick Roll' )

    const onInputChange = ( { target } ) => {
        setInputValue( target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDefault()
        const newInputValue = inputValue.trim()
        if ( newInputValue.length <= 1 ) return;

        onNewCategory( newInputValue )
        setInputValue( '' )
    }

    return (
        <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <div className="form">
                    <FontAwesomeIcon className="fa-search" icon={ faSearch }/>
                    <form onSubmit={ onSubmit }>
                        <input
                            type="text"
                            className="form-control form-input"
                            placeholder="Search anything..."
                            value={ inputValue }
                            onChange={ onInputChange }
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
