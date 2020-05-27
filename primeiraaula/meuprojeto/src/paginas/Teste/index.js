import React, { useState } from 'react';

function Teste(){
    const[count, setCount] = useState(0);
    //variavel 'count' tem um metodo 'setCount', setando valor 0
    return(
        <div>
            <button className="button" onClick={() => setCount(count + 1)}>
                Incrementar</button>
            <p>Você já clicou {count} vezes no botão.</p>
        </div>
    );

}

export default Teste;