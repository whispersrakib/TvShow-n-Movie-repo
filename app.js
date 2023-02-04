let form=document.querySelector('#sForm');
let mai=document.querySelector('#mai');
let input=document.querySelector('.form-control');
let btnD=document.querySelector('.btn-danger');
btnD.addEventListener('click',()=>{
    location.reload()
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var queery=input.value;
    
    const fetchFavShow= async ()=>{
        const rest=await fetch(`https://api.tvmaze.com/search/shows?q=${queery}`);
        const data =await rest.json();
        console.log(data);
        makeImg(data)   
    };
    fetchFavShow()
    input.value='';
   
})


const makeImg=(show)=>{
    for(let res of show){
        if(res.show.image){
            const img=document.createElement('img');
            var imgss=img.src=res.show.image.medium;
        }
        
        const nam=res.show.name;
        const reatin=res.show.rating.average;
        const summary=res.show.summary;
        const genres=res.show.genres[0];

        makeCard(imgss,nam,reatin,summary,genres)
    }
   
}

const makeCard=( imgsrc,name,reat,sum,geno)=>{
    const card=document.createElement('div');
    card.classList.add('cards');
    const movieCard=`
    <img src=${imgsrc} alt="" srcset="">
              <div class="info">
                <h4>${name}</h4><span>${reat}</span>
                <p>${sum}</p>
                <h5>${geno}</h5>
              </div>
    `
    card.innerHTML=movieCard;
    mai.append(card);

}



