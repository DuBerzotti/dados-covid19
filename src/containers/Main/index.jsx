import React, { memo, useCallback, useState,useEffect } from 'react' // O memo cria um componente imutavel (Evita redenrização desnecessária)
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import { ContainerStyled } from './style'

function Main() {
    const [data, setData] = useState({}) // Usei use state para setar os valores
    const [country, setCountry] = useState('brazil')
    const updateAt = new Date().toLocaleDateString()

    const getCovidData = useCallback((country) => {
        Api.getCountry(country) // A api está fazendo a chamada de um país
            .then(data => setData(data))
    }, [])

    useEffect(() => { // UseEffect vai ser inicado assim que a página for renderizada
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = ({ target }) => {
        const country = target.value
        setCountry(country)
    }

    return (
        <ContainerStyled>
            <div className="mb-2">
                <Panel
                    data={data}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                    getCovidData={getCovidData}
                />
            </div>
            <br></br>
            <Board data={data} />
        </ContainerStyled>
    )
}

export default memo(Main)