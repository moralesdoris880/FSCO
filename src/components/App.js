import React from "react";
import CharacterInfoSheet from "./CharacterInfoSheet";
import StoreMap from "./StoreMap";
import StoreServices from "./StoreServices";
import '../index.css';

function App(){
    return(
        <div>
        <CharacterInfoSheet />
            <div id="bottom">
                <StoreMap />
                <StoreServices />
            </div>
        </div>
    )
}

export default App;