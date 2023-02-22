function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}
function getInputValue(id){
  const value=document.getElementById(id).value;
  return  parseInt(value);
}

document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
    const quantity=getInputValue('kitkat-quantity');
    const kitkatCost=quantity*200;
    
    
    
   setInnerText('chocolate',kitkatCost)
   total();

})
document.getElementById('rose-buy-btn').addEventListener('click',function(){
    const quantity=getInputValue('rose-quantity');
    const roseCost=quantity*100;
    
   
   setInnerText('rose',roseCost)
   total();

})
document.getElementById('diary-buy-btn').addEventListener('click',function(){
    const quantity=getInputValue('diary-quantity');
    const diaryCost=quantity*100;
    
   
    setInnerText('diary',diaryCost)
    total();
   

})
function total(params){
    const chocolate=document.getElementById('chocolate').innerText;
    const rose=document.getElementById('rose').innerText;
    const diary=document.getElementById('diary').innerText;
    const total=parseInt(chocolate)+parseInt(diary)+parseInt(rose);
       document.getElementById('total').innerText=total;
}
document.getElementById('promo-code-btn').addEventListener('click',function(){
    const promoCode=getInputValue('promo-code');
    const total=document.getElementById('total').innerText;
    if(promoCode==101){
     const result=total-parseInt( total)*0.1;
     setInnerText('all-total',result)
    }
    else{
        alert("wrong promo code");
    }
})
