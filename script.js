document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('open-drawer').addEventListener('click',function() {
        document.querySelector('.drawer').setAttribute('aria-hidden','false')
    });
    
    document.getElementById('close-drawer').addEventListener('click',function() {
        document.querySelector('.drawer').setAttribute('aria-hidden','true')
    });
});
