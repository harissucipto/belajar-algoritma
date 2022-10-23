// Bilangan ke-n pada suatu barisan Fibonacci yaitu

export const countFibonacciSequence = (n: number) => {
    let n0 = 0, n1 = 1, nextValue;
    let value;

    for(let x = 0; x <= n; x++){
        if(n === x){
            value = n0   
        }
        nextValue = n0 + n1;
        n0 = n1;
        n1 = nextValue;
    } 

    return value
}

