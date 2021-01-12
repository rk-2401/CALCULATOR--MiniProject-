var a=0;
var b=-1;
var f=0;
var c='_'
function calculator(x){
    switch(x){
        case '+':{
            f=1;
            c=x;
            break;
        }
        case '-':{
            f=1;
            c=x;
            break;
        }
        case '*':{
            f=1;
            c=x;
            break;
        }
        case '/':{
            f=1;
            c=x;
            break;
        }
        case "DEL":{
            if(f==0){
                a=(a-(a%10))/10;
            }
            else{
                if(b==-1){
                    f=0;
                }
                else{
                    b=(b-(b%10))/10;
                    if(b==0)
                    b=-1;
                }
            }
            break;
        }
        case "AC":{ 
            f=0;    
            a=0;
            b=-1;
            break;
        }
        case '=':{
            if(c=='_')
               document.getElementById("output").innerHTML=a;
            else if(b==-1){
                alert("Invalid Operation!!!");
            }
            else
            switch(c){
                case '+':{
                    a+=b;
                    document.getElementById("output").innerHTML=a;
                    f=0;
                    b=-1;
                    break;
                }
                case '-':{
                    a-=b;
                    document.getElementById("output").innerHTML=a;
                    f=0;
                    b=-1;
                    break;
                }
                case '*':{
                    a*=b;
                    document.getElementById("output").innerHTML=a;
                    f=0;
                    b=-1
                    break;
                }
                case '/':{
                    if(b==0){
                        alert("Math Error");
                    }
                    else{
                        a/=b;
                        document.getElementById("output").innerHTML=a;
                        f=0;
                        b=-1;
                    }
                    break;
                }
            }
            break;
        }
        default:{
            if(f==0){
                a*=10;
                a+=x;
            }
            else{
                if(b==-1){
                    b=x;
                }
                else{
                    b*=10;
                    b+=x;
                }
            }
            break;
        }

    }
    if(x!='=')
    if(f==0){
        document.getElementById("output").innerHTML=a;
    }
    else if(b==-1){
        document.getElementById("output").innerHTML=a+c;
    }
    else{
        document.getElementById("output").innerHTML=a+c+b;
    }
}