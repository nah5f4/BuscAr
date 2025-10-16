import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link para navegar para a página de cadastro

// Passo 1: Definir os tipos para os dados do formulário de login
type LoginFormData = {
  email: string;
  senha: string;
};

function LoginPage() {
  // Passo 2: Inicializar o estado do formulário
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    senha: '',
  });

  // Estado para mensagens de erro ou sucesso
  const [mensagem, setMensagem] = useState('');

  // Passo 3: Função para lidar com as mudanças nos inputs (idêntica à da RegisterPage)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Passo 4: Função para lidar com a submissão do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem('');

    // Validação básica
    if (!formData.email || !formData.senha) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    // Lógica de submissão para o backend viria aqui
    console.log('Dados do formulário para enviar:', formData);
    
    setMensagem('Login realizado com sucesso! (Simulação)');
    // Aqui você chamaria a API de login com o Axios.
    // Em um caso real, você receberia um token de autenticação e o salvaria.
  };

  return (
    <div className="form-container">
      <h2>Login - BuscAr</h2>
      <form onSubmit={handleSubmit}>
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
          />
        </div>
        
        {mensagem && <p className="mensagem">{mensagem}</p>}

        <button type="submit">Entrar</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  );
}

export default LoginPage;