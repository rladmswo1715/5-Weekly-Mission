//헤더 구분을 위해 불투명도 + blur처리 -> 안돼서 잠시 주석
window.addEventListener('scroll', function(){
            
    let headerTag = document.getElementsByTagName('header')[0];

    if(document.documentElement.scrollTop == 0){
        headerTag.classList.remove('add-blur');
    }else{
        headerTag.classList.add('add-blur');
    }
});