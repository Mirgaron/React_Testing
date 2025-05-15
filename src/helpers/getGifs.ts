
type Gif = {
    id: string;
    title: string;
    url: string;
}


export const getGifs = async ({category} : {category:string}) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=MWrU6WrcexJgRG5ALbBpI27FLjN2MiyW&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs : Gif[] = data.map((img:any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));

    return gifs
}