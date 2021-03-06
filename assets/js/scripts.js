var items = [{tag:'textModal',classe:'activeRight'},
             {tag:'image-visao',classe:'activeRight'},
             {tag:'desc-visao',classe:'activeLeft'},
             {tag:'training-desc',classe:'activeRight'},
             {tag:'training-image',classe:'activeLeft'},
             {tag:'modal-image', classe:'activeLeft'}
            ]

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


function addActiveClass(items){
    items.map(item=>{
        let windowHeight = window.pageYOffset;
        let selectedItem = document.querySelector(`#${item.tag}`);
        
        windowHeight > (selectedItem.offsetTop - 100) && selectedItem.classList.add(`${item.classe}`)
    })
}

document.addEventListener('scroll',debounce(()=>addActiveClass(items),200))