export async function buscarCep(cep) {
    cep = cep.replace(/\D/g, "");

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!resposta.ok) {
        throw new Error("Erro ao buscar CEP");
    }

    const dados = await resposta.json();

    if (dados.erro) {
        throw new Error("CEP não encontrado");
    }

    return dados;
}