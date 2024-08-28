import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    try {
        // Realiza a solicitação à API para buscar um post específico pelo ID
        const { data, error } = await api.get(`/posts?id=eq.${id}`);

        if (error) {
            // Caso haja um erro, lança uma exceção
            throw new Error(`Erro ao buscar o post: ${error.message}`);
        }

        // Verifica se retornou algum dado
        if (data.length === 0) {
            throw new Error('Post não encontrado');
        }

        // Retorna o primeiro post encontrado (deve haver apenas um post com o ID especificado)
        return data[0];
    } catch (error) {
        console.error('Erro ao buscar o post:', error.message);
        // Pode retornar um erro específico ou uma resposta padrão
        return null;
    }
};