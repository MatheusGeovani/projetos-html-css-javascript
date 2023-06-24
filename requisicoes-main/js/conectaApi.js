async function listaVideos() {
    const conexao = await fetch("http://localhost:5501/videos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;

}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:5501/videos", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo, 
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    if (!conexao.ok){
        throw new Error("Não foi possivel enviar o video")
    }
    return conexaoConvertida
}

async function buscarVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:5501/videos?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json()


    return conexaoConvertida
}


export const conectaApi = {
    listaVideos,
    criaVideo,
    buscarVideo
}