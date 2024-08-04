document.addEventListener('DOMContentLoaded',function(){
    const p1=`#include <stdio.h>

#include <stdio.h>

int main() {
    int a;float b;char c;
    
    a=10;b=1.2,c='$';
    
    printf("a=%d \nb=%.2f \nc=%c",a,b,c);
    

    return 0;
}`;
    const o1=
    `a=10 
b=1.20 
c=$`;
    document.getElementById('p1').textContent = p1;
    document.getElementById('o1').textContent = o1;
    
        
    
    const p2=`#include <stdio.h>

int main() {
    char name[20]="Dunesh";
    
    printf("name=%s",name);
    

    return 0;
}`;
    const o2=`name=Dunesh`;
    document.getElementById('p2').textContent = p2;
    document.getElementById('o2').textContent = o2;
    
        
    
    const p3=`#include <stdio.h>

int main() {
    char name[20]="Dunesh";
    
    name="dunesh";
    
    printf("name=%s",name);
    

    return 0;
}`;
    const o3=
    `ERROR!
/tmp/OFKsk7zTJH.c: In function 'main':
/tmp/OFKsk7zTJH.c:6:9: error: assignment to expression with array type
    6 |     name="dunesh";
      | `;
    document.getElementById('p3').textContent = p3;
    document.getElementById('o3').textContent = o3;



const p4=`#include <stdio.h>

int main() {
    
    int a=21,b=5;
    printf("add=%d \nsub=%d \nmul=%d \ndiv=%d \nmodules=%d",a+b,a-b,a*b,a/b,a%b);
    

    return 0;
}`;
const o4=
`add=26 
sub=16 
mul=105 
div=4 
modules=1`;
document.getElementById('p4').textContent = p4;
document.getElementById('o4').textContent = o4;

    

const p5=`#include <stdio.h>

int main() {
    
    float a=21,b=5;
    printf("%f",a%b);
    

    return 0;
}`;
const o5=
`ERROR!
/tmp/Yw55ACjb0N.c: In function 'main':
/tmp/Yw55ACjb0N.c:6:18: error: invalid operands to binary % (have 'float' and 'float')
    6 |     printf("%d",a%b);
      |                 `;
document.getElementById('p5').textContent = p5;
document.getElementById('o5').textContent = o5;

    

const p6=`#include <stdio.h>
#include<math.h>
int main() {
    
    float a=21,b=5;
    printf("%f",fmod(a,b));
    

    return 0;
}`;
const o6=
`1.000000`;
document.getElementById('p6').textContent = p6;
document.getElementById('o6').textContent = o6;

    

const p7=`#include <stdio.h>
#include<math.h>
int main() {
    
    printf("%d%d%d",291%10,74%10,3%10);

    return 0;
}`;
const o7=
`143`;
document.getElementById('p7').textContent = p7;
document.getElementById('o7').textContent = o7;

    

const p8=`#include<stdio.h>
void main(){
    
    int n=341;
     printf("reverse is: %i %i %i",n%10,(n/10)%10,n/100);
    
}`;
const o8=
`reverse is: 1 4 3`;
document.getElementById(p8).textContent = p8;
document.getElementById(o8).textContent = o8;

    

const p9=``;
const o9=
``;
document.getElementById(p9).textContent = p9;
document.getElementById(o9).textContent = o9;

    

const p10=``;
const o10=
``;
document.getElementById(p10).textContent = p10;
document.getElementById(o10).textContent = o10;

    

const p11=``;
const o11=
``;
document.getElementById(p11).textContent = p11;
document.getElementById(o11).textContent = o11;

    

const p12=``;
const o12=
``;
document.getElementById(p12).textContent = p12;
document.getElementById(o12).textContent = o12;

    

const p13=``;
const o13=
``;
document.getElementById(p13).textContent = p13;
document.getElementById(o13).textContent = o13;

    

const p14=``;
const o14=
``;
document.getElementById(p14).textContent = p14;
document.getElementById(o14).textContent = o14;

    

const p15=``;
const o15=
``;
document.getElementById(p15).textContent = p15;
document.getElementById(o15).textContent = o15;

    

const p16=``;
const o16=
``;
document.getElementById(p16).textContent = p16;
document.getElementById(o16).textContent = o16;

    

const p17=``;
const o17=
``;
document.getElementById(p17).textContent = p17;
document.getElementById(o17).textContent = o17;

    

const p18=``;
const o18=
``;
document.getElementById(p18).textContent = p18;
document.getElementById(o18).textContent = o18;

    

const p19=``;
const o19=
``;
document.getElementById(p19).textContent = p19;
document.getElementById(o19).textContent = o19;

    

const p20=``;
const o20=
``;
document.getElementById(p20).textContent = p20;
document.getElementById(o20).textContent = o20;

    

const p21=``;
const o21=
``;
document.getElementById(p21).textContent = p21;
document.getElementById(o21).textContent = o21;

    

const p22=``;
const o22=
``;
document.getElementById(p22).textContent = p22;
document.getElementById(o22).textContent = o22;

    

const p23=``;
const o23=
``;
document.getElementById(p23).textContent = p23;
document.getElementById(o23).textContent = o23;

    

const p24=``;
const o24=
``;
document.getElementById(p24).textContent = p24;
document.getElementById(o24).textContent = o24;

    

const p25=``;
const o25=
``;
document.getElementById(p25).textContent = p25;
document.getElementById(o25).textContent = o25;

    

const p26=``;
const o26=
``;
document.getElementById(p26).textContent = p26;
document.getElementById(o26).textContent = o26;

    

const p27=``;
const o27=
``;
document.getElementById(p27).textContent = p27;
document.getElementById(o27).textContent = o27;

    

const p28=``;
const o28=
``;
document.getElementById(p28).textContent = p28;
document.getElementById(o28).textContent = o28;

    

const p29=``;
const o29=
``;
document.getElementById(p29).textContent = p29;
document.getElementById(o29).textContent = o29;

    

const p30=``;
const o30=
``;
document.getElementById(p30).textContent = p30;
document.getElementById(o30).textContent = o30;

    

const p31=``;
const o31=
``;
document.getElementById(p31).textContent = p31;
document.getElementById(o31).textContent = o31;

    

const p32=``;
const o32=
``;
document.getElementById(p32).textContent = p32;
document.getElementById(o32).textContent = o32;

    

const p33=``;
const o33=
``;
document.getElementById(p33).textContent = p33;
document.getElementById(o33).textContent = o33;

    

const p34=``;
const o34=
``;
document.getElementById(p34).textContent = p34;
document.getElementById(o34).textContent = o34;

    

const p35=``;
const o35=
``;
document.getElementById(p35).textContent = p35;
document.getElementById(o35).textContent = o35;

    

const p36=``;
const o36=
``;
document.getElementById(p36).textContent = p36;
document.getElementById(o36).textContent = o36;

    

const p37=``;
const o37=
``;
document.getElementById(p37).textContent = p37;
document.getElementById(o37).textContent = o37;

    

const p38=``;
const o38=
``;
document.getElementById(p38).textContent = p38;
document.getElementById(o38).textContent = o38;

    

const p39=``;
const o39=
``;
document.getElementById(p39).textContent = p39;
document.getElementById(o39).textContent = o39;

    

const p40=``;
const o40=
``;
document.getElementById(p40).textContent = p40;
document.getElementById(o40).textContent = o40;

    

const p41=``;
const o41=
``;
document.getElementById(p41).textContent = p41;
document.getElementById(o41).textContent = o41;

    

const p42=``;
const o42=
``;
document.getElementById(p42).textContent = p42;
document.getElementById(o42).textContent = o42;

    

const p43=``;
const o43=
``;
document.getElementById(p43).textContent = p43;
document.getElementById(o43).textContent = o43;

    

const p44=``;
const o44=
``;
document.getElementById(p44).textContent = p44;
document.getElementById(o44).textContent = o44;

    

const p45=``;
const o45=
``;
document.getElementById(p45).textContent = p45;
document.getElementById(o45).textContent = o45;

    

const p46=``;
const o46=
``;
document.getElementById(p46).textContent = p46;
document.getElementById(o46).textContent = o46;

    

const p47=``;
const o47=
``;
document.getElementById(p47).textContent = p47;
document.getElementById(o47).textContent = o47;

    

const p48=``;
const o48=
``;
document.getElementById(p48).textContent = p48;
document.getElementById(o48).textContent = o48;

    

const p49=``;
const o49=
``;
document.getElementById(p49).textContent = p49;
document.getElementById(o49).textContent = o49;

    


        
    
   
    
    });