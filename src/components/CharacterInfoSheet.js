import React from "react";

function CharacterInfoSheet(){
    return(
        <div id="charactersheet">
            <div id="innercharactersheet">
                <h1 id="name">NAME</h1> 
                <div id="statslist">
                    <div className="statsholder">
                        <p className="stats">HP</p>
                        <p>100</p>
                    </div>
                    <div className="statsholder">
                        <p className="stats">GP</p>
                        <p>100</p>
                    </div>
                    <div className="statsholder">
                        <p className="stats">COIN</p>
                        <p>20.08</p>
                    </div>
                    <p className="snack">SNACK</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterInfoSheet