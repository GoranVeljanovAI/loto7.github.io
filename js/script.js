
function myFunction() {

    if (document.getElementsByClassName('circle').length) {
        const removeElements = (elms) => elms.forEach(el => el.remove());
        removeElements( document.querySelectorAll(".circle") );
    }

    let arr = [];
    while(arr.length < 7){
        let r = Math.floor(Math.random() * 37) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
        let add = true;

        for(let y = 1; y < 37; y++) {
            if(arr[y] === arr) {
                add = false;
            }
        }

    }

    const sorted = [...arr].sort((a,b)=>a-b);

    sorted.forEach(function (content) {
        let lotto = document.getElementById("lotto");
        let circle = document.createElement('span');
        circle.setAttribute('class', 'circle m-3');
        circle.textContent = content;
        lotto.append(circle);
    });
}