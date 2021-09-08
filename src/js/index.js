import '../scss/mine.scss'
import bgVideo from '../media/Tunnel.mp4'

console.log(document.querySelector("#bg_video1").src)


let divBgList = document.querySelectorAll('div');
let divBgArray = Array.prototype.slice.call(divBgList);

divBgArray.map((obj)=>{
    obj.addEventListener('mouseenter', ()=>{
        obj.classList.toggle("transparent");
        setTimeout(()=>{
            obj.classList.toggle("transparent");
        }, 1000)
    })
})

