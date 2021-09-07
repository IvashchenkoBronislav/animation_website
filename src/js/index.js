import '../scss/mine.scss'

let divBgList = document.querySelectorAll('div');
let divBgArray = Array.prototype.slice.call(divBgList);

divBgArray.map((obj)=>{
    obj.addEventListener('mouseenter', ()=>{
        console.log(obj.classList)
        obj.classList.toggle("transparent");
        setTimeout(()=>{
            obj.classList.toggle("transparent");
        }, 1000)
    })
})

