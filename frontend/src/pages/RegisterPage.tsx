import React, { useState } from 'react';

// Passo 1: Definir os tipos para os dados do formulário com TypeScript
// Isso garante que só poderemos usar 'nome', 'email', 'senha', etc. no nosso estado.
type RegisterFormData = {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
};

function RegisterPage() {
  // Passo 2: Inicializar o estado do formulário com o tipo que definimos
  const [formData, setFormData] = useState<RegisterFormData>({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  // Estado para mensagens de erro ou sucesso
  const [mensagem, setMensagem] = useState('');

  // Passo 3: Criar uma função para lidar com as mudanças nos inputs
  // O tipo 'React.ChangeEvent<HTMLInputElement>' é do próprio React para eventos de input.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Passo 4: Criar a função para lidar com a submissão do formulário
  // O tipo 'React.FormEvent' é para eventos de formulário.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede que a página recarregue ao submeter
    setMensagem(''); // Limpa mensagens antigas

    // Validação básica
    if (formData.senha !== formData.confirmarSenha) {
      setMensagem('As senhas não coincidem!');
      return; // Para a execução se as senhas forem diferentes
    }

    // Lógica de submissão para o backend viria aqui
    // Por enquanto, vamos apenas mostrar os dados no console
    console.log('Dados do formulário para enviar:', {
      nome: formData.nome,
      email: formData.email,
      senha: formData.senha,
    });
    
    setMensagem('Cadastro enviado com sucesso! (Simulação)');
    // Aqui você chamaria a API com o Axios, por exemplo.
  };

  return (
    <div className="form-container">
      <h2>Crie sua Conta no BuscAr</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmarSenha">Confirme sua Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Exibe a mensagem de erro ou sucesso */}
        {mensagem && <p className="mensagem">{mensagem}</p>}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;