/*function getMaxSubSum()
{
    let arr = [1, -2, 3, 4, -9, 6]
    let max = 0;

    for(let i = 0; i < arr[arr.length-1]; i++)
    {
        if(arr[i] > arr[i+1])
        {
            max += arr[i];
        }
        else if(arr[i] < arr[i+1])
        {
            max += arr[i+1];
        }
    }
    return max;
}
alert(getMaxSubSum());
*/


function fSum() {

    let array = [1];  //Если нечего не записывать в массив, не работает код
  
    while (true) {
  
        arr.push(prompt("Введите элемент массива:"));
        if(arr[arr.length-1] == null
        || arr[arr.length-1] == ''
        || !isFinite(arr[arr.length-1])) break;
  
      numbers.push(+value);
    }
    arr.shift();
    arr.pop();
    
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert(fSum() );