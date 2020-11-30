export class Operations{

    combinatoria(n,x){
        return (this.factorial(n)/(this.factorial(x)*(this.factorial(n-x))))
    }

    factorial(x){
        if(x === 0){
            return 1;
        }
        else return x*this.factorial(x-1);
    }
}