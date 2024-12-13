interface PageDetailProps{
    params: {
        id: string;
    }
}
async function getData(id: string){
    const response = await fetch("https://api.gitub.com/users/furlanilucas/repos")

    return response.json
}
export default async function RepositorioId({params}:PageDetailProps){
    const data = await getData(params.id);

    return(
        <div>
            <h1>Pagina detalhe repositorio{params.id}</h1>
        </div>
    )
}