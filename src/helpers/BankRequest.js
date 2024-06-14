import baseRequest from './axiosBaseUrl';

export async function PostNewClient(clientData) {
    try {
        
        const response = await baseRequest.post(`/api/bank/clientes/create`, clientData);
        console.log(response.data)
        return response.data;
        
        } catch (error) {
            if (error.response) {

                // A requisição foi feita e o servidor respondeu com um status diferente de 2xx
                console.error('Erro ao fazer requisição:', error.response.data);
                console.error('Status code:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {

                // A requisição foi feita, mas nenhuma resposta foi recebida
                console.error('Nenhuma resposta recebida:', error.request);
            } else {

                // Algo aconteceu ao configurar a requisição que desencadeou um erro
                console.error('Erro ao configurar a requisição:', error.message);
            }

            console.error('Configuração da requisição:', error.config);
            throw error;
    }
}

export async function getClienteByCpf(cpf, password) {
    try {
        const response = await baseRequest.get(`/api/bank/clientes/cpf/${cpf}?password=${password}`);

        const responseData = response.data;

        const dataObject = {
            id: responseData.id,
            name: responseData.name,
            cpf: responseData.cpf
        };

        console.log("response " + dataObject.name);
        return dataObject;

    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}

export async function getClienteById(id) {
    try {
        const response = await baseRequest.get(`/api/bank/clientes/id/${id}`);

        const responseData = response.data;

        const dataObject = {
            id: responseData.id,
            name: responseData.name,
            cpf: responseData.cpf
        };

        console.log("response " + dataObject.name);
        return dataObject;

    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}


export async function getContaByNumero(numero, password) {
    try {
        const response = await baseRequest.get(`/api/bank/contas/numero/${numero}?password=${password}`);

        const responseData = response.data;

        const dataObject = {
            id: responseData.id,
            agencia: responseData.agencia,
            numero: responseData.numero,
            id_cliente: responseData.id_cliente,
            saldo: responseData.saldo
        };

        return dataObject;

    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}



export async function getContaByIdCliente(id) {
    try {
        const response = await baseRequest.get(`/api/bank/contas/cliente/id/${id}`);

        const responseData = response.data;

        const dataObject = {
            id: responseData.id,
            agencia: responseData.agencia,
            numero: responseData.numero,
            id_cliente: responseData.id_cliente,
            saldo: responseData.saldo
        };

        return dataObject;

    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}


export async function listTransacoesContas(id) {
    try {
        const responseOne = await baseRequest.get(`/api/bank/transacao/list/origem/${id}`);
        const responseTwo = await baseRequest.get(`/api/bank/transacao/list/destino/${id}`);

        let transacoes = [];

        if (Array.isArray(responseOne.data)) {
            transacoes = transacoes.concat(responseOne.data);
        } else {
            console.error('Resposta de /origem não é um array:', responseOne.data);
        }

        if (Array.isArray(responseTwo.data)) {
            transacoes = transacoes.concat(responseTwo.data);
        } else {
            console.error('Resposta de /destino não é um array:', responseTwo.data);
        }

        console.log(transacoes);
        return transacoes;
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}


export async function createNewTransation(tipo, idOrigem, idDestinatario, valor) {
    try {
        const response = await baseRequest.post(`/api/bank/transacao/${tipo}/${idOrigem}/${idDestinatario}/${valor}`);

        return response.data;

    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}





