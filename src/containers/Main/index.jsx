import React, { memo } from 'react' // O memo cria um componente imutavel (Evita redenrização desnecessária)

function Main() {

    return (
        <div>
            Teste
        </div>
    )
}

export default memo(Main)