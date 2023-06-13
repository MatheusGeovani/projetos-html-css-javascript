async function listaVideos (){
    const conexao = await fetch("http://localhost:5501/videos")
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida

}

export const conectaApi = {
    listaVideos
}