const x=prompt("Enter value of A");   //take value from user
const y=prompt("Enter value of B");


const greater = () =>                    // Arrow function 1
{
    console.log("A is greater than B");
    alert("A is greater than B");
}

const smaller = () =>                     // Arrow function 2
{
    console.log("A is smaller than B");
    alert("A is smaller than B");
}


const isAGreater = (a, b, greater, smaller) =>   // Arrow function 3 here we pass function 1 , 2 as an parameter
{
    if(a>b)                  
    {
        greater();      // function 1 calls
    }
    else
    {
        smaller();      // function 2 call
    }
}
isAGreater(x,y, greater, smaller);   // arguments 