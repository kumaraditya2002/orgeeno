// number counter
const counter = document.querySelectorAll(".counter");
counter.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = 1;
        console.log(inc);
        if(count < target ){
           counter.innerText = count + inc;
           setTimeout(updateCount, 1);
        }
        else{
            count.innerText = target;
        }
    }
    updateCount();
});
