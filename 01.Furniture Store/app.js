window.addEventListener('load', solve);

function solve() {
    let modelName = document.querySelector('#model');
    let modelYear = document.querySelector('#year');
    let modeldescription = document.querySelector('#description');
    let modelprice = document.querySelector('#price');
    let addButton = document.querySelector('#add');

    addButton.addEventListener('click', addFurniture);
    let sum = 0;

    function addFurniture(e){
        e.preventDefault();
        if (modelName.value != '' && modeldescription.value != '' && modelYear.value != '' 
         && modelprice.value != '' && modelprice.value >= 0 && modelYear.value >= 0){
           
            let trInfoElement = document.createElement('tr');
            trInfoElement.classList.add('info')

            let tdName = document.createElement('td');
            tdName.textContent = modelName.value;
            let tdPrice = document.createElement('td');
            tdPrice.textContent = Number(modelprice.value).toFixed(2);

            let tdForButtons = document.createElement('td');
            let moreBtn = document.createElement('button');
            moreBtn.classList.add('moreBtn');
            moreBtn.textContent = 'More Info';

            moreBtn.addEventListener('click', moreinfo)
            let buyBtn = document.createElement('button');
            buyBtn.classList.add('buyBtn');
            buyBtn.textContent = 'Buy it';
            buyBtn.addEventListener('click', buyStuff)
            tdForButtons.appendChild(moreBtn)
            tdForButtons.appendChild(buyBtn)


            trInfoElement.appendChild(tdName)
            trInfoElement.appendChild(tdPrice)
            trInfoElement.appendChild(tdForButtons)
            
            let trHideClass = document.createElement('tr');
            trHideClass.classList.add('hide');
            let tdYear = document.createElement('td');
            tdYear.textContent = ` Year: ${Number(modelYear.value)}`;

            let tdColspan = document.createElement('td');
            tdColspan.setAttribute('colspan', '3');
            tdColspan.textContent = `Description: ${modeldescription.value}`

            trHideClass.appendChild(tdYear);
            trHideClass.appendChild(tdColspan);

            
            let furList = document.querySelector('#furniture-list');
            furList.appendChild(trInfoElement)
            furList.appendChild(trHideClass)

            modelName.value = '';
            modelYear.value = '';
            modeldescription.value = '';
            modelprice.value = '';
            function moreinfo(e) {
                let button = e.target.textContent
               
                if (button == 'More Info' ){
                        moreBtn.textContent = 'Less Info';
                        trHideClass.style.display = 'contents';
                    }
                   
                else if ( button == 'Less Info') {

                    trHideClass.style.display = 'none';
  
                    moreBtn.textContent = 'More Info';

                }
                
                
            }

            function buyStuff(e){
                let currPrice = e.target.parentElement.parentElement.children[1].textContent;
                e.target.parentElement.parentElement.remove();
           
                sum += Number(currPrice);
                let totalPrice = document.querySelector('.total-price');
                totalPrice.textContent = sum.toFixed(2);
                
                
            }
        } 

    }

}
