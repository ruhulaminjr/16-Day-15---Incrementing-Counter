const counter = document.querySelectorAll('.counter');

counter.forEach(count =>{
    count.innerHTML = "0";
    const  updatecounter = () =>{
        const target = +count.getAttribute('data-target');
        const countinner = +count.innerHTML;
        // console.log(typeof target,target);
        const incerement = target / 100 ;
        // console.log(incerement);
        if(countinner < target){
            count.innerHTML = Math.round(countinner + incerement);
            setTimeout(() => {
                updatecounter();
            }, 50);
        }else{
            count.innerHTML = countinner;
        }

        
    }
    updatecounter();
})
