window.onload = () => {
        menuOp();
        // 
        document.getElementById('D').addEventListener('click',()=>{
            filter("Des");
        });
        document.getElementById('A').addEventListener('click',()=>{
            filter("Aqua");
        });
        document.getElementById('T').addEventListener('click',()=>{
            filter("Con1");
        });
}

function filter(fil){
    let all = document.getElementsByClassName('Con');
    for(let i=0;i<all.length;i++){
        console.log(all[i].children[0]);
        if(all[i].children[0].getAttribute('class').search(fil) <= -1)
            all[i].style.display = "none";
        else
            all[i].style.display = "flex";
    }
}


function menuOp() {
        const _MENU_CLOSE = document.getElementById('nav-close');
        const _MENU_OPEN = document.getElementById('nav-menu-icon');
        const _MENU = document.getElementById('nav-menu');
        // 
        let state = false;
        // 
        _MENU_OPEN.addEventListener('click', () => {
            if (!state) {
                _MENU.style.display = "flex";
                state = true;
            }
        });
        _MENU_CLOSE.addEventListener('click', () => {
            if (state) {
                _MENU.style.display = "none";
                state = false;
            }
        });
}
function valider() {
        const email = document.getElementById('email').value;
        console.log(email);
        var ExpReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-z]{2,3}$/;
        if (ExpReg.test(email) == false || ExpReg.test(email) == ''){
                alert("invalide email ,Réessayer d'entrer un nouveau email");
        }
}


