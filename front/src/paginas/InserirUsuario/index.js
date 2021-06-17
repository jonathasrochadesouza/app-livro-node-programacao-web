import React, {useState} from 'react';
import api from '../services/api';

function CadastroUsuario() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            email,
            senha,
            telefone,
        };

        try {
            console.log(dados);
            const response = await api.put('user', dados);

            if (dados != null && dados != "") {}

            const id = response.data.id;
            console.log(response.data);
            alert("Inserido com sucesso!");
            // history.push('/');
        } catch (error) {
            alert("Erro ao Inserir " + error.message);            
        }
    }

    return (
        <div>
            <div>
                <h1>Cadastro de Livro</h1>

                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    /> 

                    <input 
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    /> 

                    <input 
                        placeholder="Telefone"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                    /> 

                    <button className="button" type="submit"> Cadastrar </button>
                </form>

            </div>
        </div>

    );
}

export default CadastroUsuario;