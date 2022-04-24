  function HighAndLow(strParametr)
    {
    let min = strParametr[0] 
    let max = strParametr[0]

    for(let i = 0; i < strParametr.length; i++)
        {
            if (strParametr[i] < min)
                min = strParametr[i]
            if (strParametr[i] > max)
                max = strParametr[i]
        }
    alert(`Макс - ${+max}`) 
    alert("Мин - " + +min )
    }

    function HighLowAnother (strParameter)
    {
        let arr = strParameter.split('');    
        
        let min = arr[0] 
        let max = arr[0]

        for(let i = 0; i < arr.length; i++)
        {
            if (arr[i] < min)
            min = arr[i]
        if (arr[i] > max)
            max = arr[i]
        }
        alert(`Макс - ${max}`) 
        alert("Мин - " + min )
    }
    

    function HighLowSuper (strParameter)
    {
        let arr = strParameter.split('');    // split преобразовывает строку введенную в Массив символов

        alert(`Макс - ${Math.max(...arr)}`) 
        alert("Мин - " + Math.min(...arr) )
    }
    let str = prompt("Введите строку:");
  
    //HighAndLow(str);
    //HighLowAnotherVarinant(str);
    HighLowSuper(str);
   

