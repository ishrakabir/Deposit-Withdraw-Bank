function getTextElement(inputId)
{
    const getElement = document.getElementById(inputId);
    const elementVal = parseInt(getElement.value);
    getElement.value = '';
    return elementVal;
}

function getTotalval(inputId1,Elementval1) {
    const prevElementTotal = document.getElementById(inputId1);
    const ElementTotal = parseInt(prevElementTotal.innerText);
    const newVal1 = ElementTotal + Elementval1;
    return newVal1;
}


function setValue(inputId,elementVal)
{
    document.getElementById(inputId).innerText = elementVal;
}


document.getElementById('btn-deposit').addEventListener('click', function () {
   
    const depositval = getTextElement('get-deposit');

    const newVal = getTotalval('deposit-total', depositval);
    setValue('deposit-total', newVal);

    const newbalanceval = getTotalval('balance-total', depositval);
    setValue('balance-total', newbalanceval);

});


document.getElementById('btn-withdraw').addEventListener('click', function () {
 
    const withdrawval = getTextElement('get-withdraw');
    const prevwithdrawtotal = document.getElementById('withdraw-total');
    const newVal = getTotalval('withdraw-total', withdrawval);

    const prevbalancetotal = document.getElementById('balance-total');
    const balancetotoal = parseInt(prevbalancetotal.innerText);
    const newbalanceval = balancetotoal - withdrawval;

    if (balancetotoal >= withdrawval) {
        prevwithdrawtotal.innerText = newVal;
         prevbalancetotal.innerText = newbalanceval;
    }
    else
        alert('You dont have enough money to withdraw')


    // getwithdraw.value = '';
})