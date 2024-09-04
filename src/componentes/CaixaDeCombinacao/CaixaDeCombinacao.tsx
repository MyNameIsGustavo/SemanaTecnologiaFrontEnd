import React from 'react';

interface caixaDeCombinacaoProps {
    id: string;
    label: string;
    placeholder: string;
    opcoes: string[];
    estilos: string;
    valorSelecionado?: string;
    aoMudar?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CaixaDeCombinacao: React.FC<caixaDeCombinacaoProps> = (props) => {

    return (
        <div className='d-flex flex-column'>
            <label htmlFor={props.id}>{props.label}</label>
            <select
                id={props.id + "Escolhido"}
                name={props.id + "Escolhido"}
                value={props.valorSelecionado}
                onChange={props.aoMudar}
                className={props.estilos}
            >
                <option value="" disabled>{props.placeholder}</option>
                {props.opcoes.map((opcao, index) => (
                    <option key={index} value={opcao}>
                        {opcao}
                    </option>
                ))}
            </select>
        </div>
    );
};
