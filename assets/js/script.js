const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const trocaImg = async()=>{
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json[0].url;  
       
    }catch(e){
        console.log(e.message)
    
}
};

const loadImg = async()=>{
    const img = document.getElementsByTagName('img')[0];
    img.src = await trocaImg();
}

loadImg();

const btn = document.getElementById('trocaImg');
btn.addEventListener('click',loadImg);

// addEventListener;
//click
//loadImg();
//trocaImg();
