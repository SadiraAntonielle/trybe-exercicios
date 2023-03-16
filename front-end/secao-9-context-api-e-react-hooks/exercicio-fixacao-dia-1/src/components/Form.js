import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState(''); // estado que vai armazenar as informações
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [modulo, setModulo] = useState();
    return (
        <form>
            <div>
                <h1>Dados pessoais</h1>
                <label htmlFor="name">
                    Nome completo:
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={({ target }) => setName(target.name)}
                    />
                </label>
                <br />
                <label htmlFor="age">
                    Idade:
                    <input 
                        type="number"
                        id="age"
                        value={age}
                        onChange={({ target }) => setAge(target.value)}
                    />
                </label>
                <br />
                <label htmlFor="city">
                    Cidade UF:
                    <input 
                        type="text"
                        id="city"
                        value={location}
                        onChange={({ target }) => setLocation(target.value)}
                    />
                </label>
                <br />
            </div>
            <div>
                <h1>Módulos</h1>
                <label htmlFor="fundamentos">
                    Fundamentos
                    <input 
                        type="radio"
                        id="fundamentos"
                        name="modulo"
                        value="Fundamentos"
                        checked={modulo === 'Fundamentos'}
                        onChange={({target}) => setModulo(target.value)}
                    />
                </label>
                <br />
                <label htmlFor="frontend">
                    Front-end
                    <input 
                        type="radio"
                        id="frontend"
                        name="modulo"
                        value="Front-end"
                        checked={modulo === 'Front-end'}
                        onChange={({target}) => setModulo(target.value)}
                    />
                </label>
                <br />
                <label htmlFor="backend">
                    Back-end
                    <input 
                        type="radio"
                        id="backend"
                        name="modulo"
                        value="Back-end"
                        checked={modulo === 'Back-end'}
                        onChange={({target}) => setModulo(target.value)}
                    />
                </label>
                <br />
                <label htmlFor="ciencia">
                    Ciência da computação
                    <input 
                        type="radio"
                        id="ciencia"
                        name="modulo"
                        value="Ciência da computação"
                        checked={modulo === 'Ciência da computação'}
                        onChange={({target}) => setModulo(target.value)}
                    />
                </label>
                <br />
            </div>
            <button
                type="submit"
                onClick={(e) => {
                    eval.preventDefault();
                }}
            >
                Enviar    
            </button>
        </form>
    );
}

export default Form;
