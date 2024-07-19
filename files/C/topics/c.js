document.addEventListener('DOMContentLoaded',function(){
    const o1=`
* * * *
* * * *
* * * *
     `;
    const p1=`
#include <stdio.h>

int main()
{   
    int i,j,nr,nc;
    puts("Enter the no.of rows & columns: ");scanf("%d %d",&nr,&nc);
    for(i=0;i<nr;i++){
        for(j=0;j<nc;j++){
            printf("*");
        }printf("\n");
    }

    return 0;
}
    `;
    const oo1=`
Enter the no. of rows & columns: 3 4
* * * *
* * * *
* * * *
    `;
    const o2=`
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8
    `;
    const p2=`
#include <stdio.h>

int main()
{   
    int i,j,nr,nc;
    puts("Enter the no.of rows & columns: ");scanf("%d %d",&nr,&nc);
    for(i=1;i<=nr;i++){
        for(j=1;j<=nc;j++){
            printf("%d",j);
        }printf("\n");
    }

    return 0;
}    `;
    const oo2=`
Enter the no. of rows & columns:
4   8
12345678
12345678
12345678
12345678
    `;

    const o3=`
1 1 1 1 1 1
2 2 2 2 2 2
3 3 3 3 3 3    
    `;
    const p3=`
#include <stdio.h>

int main()
{   
    int i,j,nr,nc;
    puts("Enter the no.of rows & columns: ");scanf("%d %d",&nr,&nc);
    for(i=1;i<=nr;i++){
        for(j=1;j<=nc;j++){
            printf("%d ",i);
        }printf("\n");
    }

    return 0;
}
    `;
    const oo3=`
Enter the no. of rows & columns:
5 6
1 1 1 1 1 1
2 2 2 2 2 2
3 3 3 3 3 3
4 4 4 4 4 4
5 5 5 5 5 5
    `;
    const o4=`
1   2   3   4
2   3   4   5
3   4   5   6    
    `;
    const p4=`
#include <stdio.h>

int main() {
    int i,j,a,rn,cn;
    puts("Enter no.of rows & columns: ");scanf("%d %d",&rn,&cn);
    for(i=1;i<=rn;i++){
        for (a=i,j=1;j<=cn;j++){
            printf("%d ",a++);
        }printf("\n");
    }

    return 0;
}    `;
    const oo4=`
Enter no.of rows & columns: 
4 5
1 2 3 4 5 
2 3 4 5 6 
3 4 5 6 7 
4 5 6 7 8     `;

const o5=`
1   2   3   4
4   3   2   1
1   2   3   4
`;
    const p5=`
#include <stdio.h>

int main() {
    int i,j,a,rn,cn;
    puts("Enter no.of rows & columns: ");scanf("%d %d",&rn,&cn);
    for(i=1;i<=rn;i++){
        for (a=cn,j=1;j<=cn;j++){
            if(i%2==0)printf("%d ",a--);
            else printf("%d ",j);
        }printf("\n");
    }

    return 0;
}    `;
    const oo5=`
Enter no.of rows & columns: 
5 6
1 2 3 4 5 6 
6 5 4 3 2 1 
1 2 3 4 5 6 
6 5 4 3 2 1 
1 2 3 4 5 6  
`;
const o6=`
* * * * 
* 1 2 * 
* 3 4 * 
* * * * 
`;
    const p6=`
#include <stdio.h>

int main() {
    int i,j,a=1,rn,cn;
    puts("Enter no.of rows & columns: ");scanf("%d %d",&rn,&cn);
    for(i=1;i<=rn;i++){
        for (j=1;j<=cn;j++){
            if(j==1 || i==1 || i==rn || j==cn)printf("* ");
            else printf("%d ",a++);
        }printf("\n");
    }

    return 0;
}    `;
    const oo6=`
Enter no.of rows & columns: 
6 3
* * * 
* 1 * 
* 2 * 
* 3 * 
* 4 * 
* * *     `;

const o7=
`A B C D 
A B C D 
A B C D 
A B C D `;
const p7=`
#include <stdio.h>

int main() {
    int i,j,rn,cn;
    puts("Enter no.of rows & columns: ");scanf("%d %d",&rn,&cn);
    for(i=1;i<=rn;i++){
        for (j=1;j<=cn;j++){
            printf("%c ",64+j);
        }printf("\n");
    }

    return 0;
}`;
const oo7=`
Enter no.of rows & columns: 
5 26
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z `;

const o8=
` A  b C  d
 A  b C  d
 A  b C  d
 A  b C  d`;
    const p8=`
#include <stdio.h>

int main() {
    int i,j,rn,cn;
    puts("Enter no.of rows & columns: ");scanf("%d %d",&rn,&cn);
    for(i=1;i<=rn;i++){
        for (j=1;j<=cn;j++){
            if(j%2==0)printf("%2c",96+j);
            else printf("%2c ",64+j);
        }printf("\n");
    }

    return 0;
}    `;
    const oo8=`
Enter no.of rows & columns: 
5 26
 A  b C  d E  f G  h I  j K  l M  n O  p Q  r S  t U  v W  x Y  z
 A  b C  d E  f G  h I  j K  l M  n O  p Q  r S  t U  v W  x Y  z
 A  b C  d E  f G  h I  j K  l M  n O  p Q  r S  t U  v W  x Y  z
 A  b C  d E  f G  h I  j K  l M  n O  p Q  r S  t U  v W  x Y  z
 A  b C  d E  f G  h I  j K  l M  n O  p Q  r S  t U  v W  x Y  z    `;
 const o9=
 ` A B C D
 D C B A
 A B C D
 D C B A`;
    const p9=
`#include <stdio.h>

int main() {
    int i,j,a,rn,cn;
    puts("Enter no.of rows & columns: ");scanf("%d %d",&rn,&cn);
    for(i=1;i<=rn;i++){
        for (a=64+cn,j=1;j<=cn;j++){
            if(i%2)printf("%2c",64+j);
            else printf("%2c",a--);
        }printf("\n");
    }

    return 0;
}`;
    const oo9=
    `Enter no.of rows & columns: 
5 26
 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
 Z Y X W V U T S R Q P O N M L K J I H G F E D C B A
 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
 Z Y X W V U T S R Q P O N M L K J I H G F E D C B A
 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z    `;

 const o10=
 ` A A A A
 B B B B
 C C C C
 D D D D`;
    const p10=`
#include <stdio.h>

int main() {
    int i,j,rn,cn;
    puts("Enter no.of rows & columns: ");scanf("%d %d",&rn,&cn);
    for(i=1;i<=rn;i++){
        for (j=1;j<=cn;j++){
            printf("%2c",64+i);
        }printf("\n");
    }

    return 0;
}    `;
    const oo10=`
Enter no.of rows & columns: 
26 5
 A A A A A
 B B B B B
 C C C C C
 D D D D D
 E E E E E
 F F F F F
 G G G G G
 H H H H H
 I I I I I
 J J J J J
 K K K K K
 L L L L L
 M M M M M
 N N N N N
 O O O O O
 P P P P P
 Q Q Q Q Q
 R R R R R
 S S S S S
 T T T T T
 U U U U U
 V V V V V
 W W W W W
 X X X X X
 Y Y Y Y Y
 Z Z Z Z Z
    `;

    document.getElementById('o1').textContent = o1;
    document.getElementById('p1').textContent = p1;
    document.getElementById('oo1').textContent = oo1;

    document.getElementById('o2').textContent = o2;
    document.getElementById('p2').textContent = p2;
    document.getElementById('oo2').textContent = oo2;

    document.getElementById('o3').textContent = o3;
    document.getElementById('p3').textContent = p3;
    document.getElementById('oo3').textContent = oo3;

    document.getElementById('o4').textContent = o4;
    document.getElementById('p4').textContent = p4;
    document.getElementById('oo4').textContent = oo4;

    document.getElementById('o5').textContent = o5;
    document.getElementById('p5').textContent = p5;
    document.getElementById('oo5').textContent = oo5;

    document.getElementById('o6').textContent = o6;
    document.getElementById('p6').textContent = p6;
    document.getElementById('oo6').textContent = oo6;

    document.getElementById('o7').textContent = o7;
    document.getElementById('p7').textContent = p7;
    document.getElementById('oo7').textContent = oo7;

    document.getElementById('o8').textContent = o8;
    document.getElementById('p8').textContent = p8;
    document.getElementById('oo8').textContent = oo8;

    document.getElementById('o9').textContent = o9;
    document.getElementById('p9').textContent = p9;
    document.getElementById('oo9').textContent = oo9;

    document.getElementById('o10').textContent = o10;
    document.getElementById('p10').textContent = p10;
    document.getElementById('oo10').textContent = oo10;

    const o11=`
 A A A A
 a a a a
 B B B B
 b b b b    `;
const p11=`
#include <stdio.h>

int main() {
    int i,j,rn,cn,u=65,l=97;
    puts("Enter no.of rows & columns: ");scanf("%d %d",&rn,&cn);
    for(i=1;i<=rn;i++){
        for (j=1;j<=cn;j++){
            if(i%2)printf("%2c",u);
            else printf("%2c",l);
        }
        if(i%2)u++;else l++;
        printf("\n");
    }

    return 0;
}`;
const oo11=`
Enter no.of rows & columns: 
10 7
 A A A A A A A
 a a a a a a a
 B B B B B B B
 b b b b b b b
 C C C C C C C
 c c c c c c c
 D D D D D D D
 d d d d d d d
 E E E E E E E
 e e e e e e e`;
document.getElementById('o11').textContent = o11;
document.getElementById('p11').textContent = p11;
document.getElementById('oo11').textContent = oo11;

const o12=
` A a B b
 A a B b
 A a B b
 A a B b`;
const p12=`
#include <stdio.h>

int main() {
    int i,j,rn,cn;
    puts("Enter no.of rows & columns: ");scanf("%d %d",&rn,&cn);
    for(i=1;i<=rn;i++){
        int u=64,l=96;
        for (j=1;j<=cn;j++){
            if(j%2)printf("%2c",u,u++);
            else printf("%2c",l,l++);
        }
    
        printf("\n");
    }

    return 0;
}`;
const oo12=`
Enter no.of rows & columns: 
5 52
 A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z
 A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z
 A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z
 A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z
 A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z`;
document.getElementById('o12').textContent = o12;
document.getElementById('p12').textContent = p12;
document.getElementById('oo12').textContent = oo12;

const o13=
`  1  3  5  7
  2  4  6  8
  9 11 13 15
 10 12 14 16`;
const p13=`
#include <stdio.h>

int main() {
    int i,j,rn,cn,e=0,o=-1;
    puts("Enter no.of rows & columns: ");scanf("%d %d",&rn,&cn);
    for(i=1;i<=rn;i++){
        for (j=1;j<=cn;j++){
            if(i%2)printf("%3d",o,o+=2);
            else printf("%3d",e,e+=2);
        }
        printf("\n");
    }

    return 0;
}`;
const oo13=`
Enter no.of rows & columns: 
5 5
  1  3  5  7  9
  2  4  6  8 10
 11 13 15 17 19
 12 14 16 18 20
 21 23 25 27 29`;
document.getElementById('o13').textContent = o13;
document.getElementById('p13').textContent = p13;
document.getElementById('oo13').textContent = oo13;

const o14=`
1 2 2 2 
0 1 2 2 
0 0 1 2 
0 0 0 1`;
const p14=`
#include <stdio.h>

int main() {
    int i,j,n;
    puts("Enter the row: ");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            if(i<j)printf("2 ");
            else if(i==j)printf("1 ");
            else printf("0 ");
        }printf("\n");
    }    

    return 0;
}`;
const oo14=`
Enter the row: 
3
1 2 2 
0 1 2 
0 0 1`;
document.getElementById('o14').textContent = o14;
document.getElementById('p14').textContent = p14;
document.getElementById('oo14').textContent = oo14;

const o15=`
1 1 1 1 
1 1 2 2 
1 3 3 3 
4 4 4 4`;
const p15=`
#include <stdio.h>

int main() {
    int i,j,n;
    puts("Enter the row: ");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=n;j++){
            if(i+j>n)printf("%d ",i);
            else printf("1 ");
        }printf("\n");
    }    

    return 0;
}`;
const oo15=`
Enter the row: 
5
1 1 1 1 1 
1 1 1 2 2 
1 1 3 3 3 
1 4 4 4 4 
5 5 5 5 5`;
document.getElementById('o15').textContent = o15;
document.getElementById('p15').textContent = p15;
document.getElementById('oo15').textContent = oo15;

const o16=`
1 2 3 4 
1 2 3 
1 2 
1`;
const p16=`
#include <stdio.h>

int main() {
    int i,j,n,a;
    puts("Enter the row: ");scanf("%d",&n);
    for(i=1,a=n;i<=n;i++,a--){
        for(j=1;j<=a;j++){
            printf("%d ",j);
            
        }printf("\n");
    }    

    return 0;
}`;
const oo16=`
Enter the row: 
7
1 2 3 4 5 6 7 
1 2 3 4 5 6 
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 `;
document.getElementById('o16').textContent = o16;
document.getElementById('p16').textContent = p16;
document.getElementById('oo16').textContent = oo16;

const o17=`
4 3 2 1 
3 2 1 
2 1 
1`;
const p17=`
#include <stdio.h>

int main() {
    int i,j,n;
    puts("Enter the row: ");scanf("%d",&n);
    for(i=n;i>=1;i--){
        for(j=i;j>=1;j--){
            printf("%d ",j);
            
        }printf("\n");
    }    

    return 0;
}`;
const oo17=`
Enter the row: 
7
7 6 5 4 3 2 1 
6 5 4 3 2 1 
5 4 3 2 1 
4 3 2 1 
3 2 1 
2 1 
1 `;
document.getElementById('o17').textContent = o17;
document.getElementById('p17').textContent = p17;
document.getElementById('oo17').textContent = oo17;

const o18=`
* 
* * 
* * * 
* * * *`;
const p18=`
#include <stdio.h>

int main() {
    int i,j,n;
    puts("Enter the row: ");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf("* ");
            
        }printf("\n");
    }    

    return 0;
}`;
const oo18=`
Enter the row: 
Enter the row: 
7
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * *  `;
document.getElementById('o18').textContent = o18;
document.getElementById('p18').textContent = p18;
document.getElementById('oo18').textContent = oo18;

const o19=`
1 
2 3 
4 5 6 
7 8 9 10`;
const p19=`
#include <stdio.h>

int main() {
    int i,j,n,s=1;
    puts("Enter the row: ");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf("%d ",s);s++;
            
        }printf("\n");
    }    

    return 0;
}`;
const oo19=`
Enter the row: 
7
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
16 17 18 19 20 21 
22 23 24 25 26 27 28 `;
document.getElementById('o19').textContent = o19;
document.getElementById('p19').textContent = p19;
document.getElementById('oo19').textContent = oo19;

const o20=
` 10 
  9   8 
  7   6   5 
  4   3   2   1`;
const p20=`
#include <stdio.h>

int main() {
    int i,j,s,n;
    puts("Enter no of rows:");scanf("%d",&n);
    s=(n*(n+1))/2;
    for(i=n;i>=1;i--){
        for(j=n;j>=i;j--,s--){
            printf("%3d ",s);
        }printf("\n");
    }

    return 0;
}`;
const oo20=`
Enter no of rows:
10
 55 
 54  53 
 52  51  50 
 49  48  47  46 
 45  44  43  42  41 
 40  39  38  37  36  35 
 34  33  32  31  30  29  28 
 27  26  25  24  23  22  21  20 
 19  18  17  16  15  14  13  12  11 
 10   9   8   7   6   5   4   3   2   1 `;
document.getElementById('o20').textContent = o20;
document.getElementById('p20').textContent = p20;
document.getElementById('oo20').textContent = oo20;

const o21=
`  1
  3  2
  4  5  6
 10  9  8  7`;
const p21=`
#include <stdio.h>

int main() {
    int i,j,n,s=1,last;
    puts("Enter no of rows:");scanf("%d",&n);
    for(i=1;i<=n;i++){
        last=s+i-1;
        for(j=1;j<=i;j++,s++){
            if(i%2) printf("%3d",s);
            else{
                printf("%3d",last--);
            }
        }printf("\n");
    }

    return 0;
}`;
const oo21=`
Enter no of rows:
10
  1
  3  2
  4  5  6
 10  9  8  7
 11 12 13 14 15
 21 20 19 18 17 16
 22 23 24 25 26 27 28
 36 35 34 33 32 31 30 29
 37 38 39 40 41 42 43 44 45
 55 54 53 52 51 50 49 48 47 46`;
document.getElementById('o21').textContent = o21;
document.getElementById('p21').textContent = p21;
document.getElementById('oo21').textContent = oo21;

const o22=
`$ 
* $ 
$ * $ 
* $ * $`;
const p22=`
#include <stdio.h>

int main() {
    int i,j,n;
    puts("Enter no of rows:");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            if((i+j)%2)printf("* ");
            else printf("$ ");
        
        }printf("\n");
    }

    return 0;
}`;
const oo22=`
Enter no of rows:
4
$ 
* $ 
$ * $ 
* $ * $ `;
document.getElementById('o22').textContent = o22;
document.getElementById('p22').textContent = p22;
document.getElementById('oo22').textContent = oo22;

const o23=
`  1
  2  3
  4  A  5
  6  B  C  7
  8  9 10 11 12`;
const p23=`
#include <stdio.h>

int main() {
    int i,j,n,s=1;char c='A';
    puts("Enter no of rows:");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            if(i==j || j==1 || i==n )printf("%3d",s++);
            else printf("%3c",c++);
            if (c>'Z') c='A';
        }printf("\n");
    }

    return 0;
}`;
const oo23=`
Enter no of rows:
10
  1
  2  3
  4  A  5
  6  B  C  7
  8  D  E  F  9
 10  G  H  I  J 11
 12  K  L  M  N  O 13
 14  P  Q  R  S  T  U 15
 16  V  W  X  Y  Z  A  B 17
 18 19 20 21 22 23 24 25 26 27`;
document.getElementById('o23').textContent = o23;
document.getElementById('p23').textContent = p23;
document.getElementById('oo23').textContent = oo23;

const o24=
`   *
  **
 ***
****`;
const p24=`
#include <stdio.h>

int main() {
    int i,j,n,s;
    puts("Enter no of rows:");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(s=1;s<=n-i;s++)printf(" ");
        for(j=1;j<=i;j++){
            printf("*");
        }printf("\n");
    }

    return 0;
}`;
const oo24=`
Enter no of rows:
10
         *
        **
       ***
      ****
     *****
    ******
   *******
  ********
 *********
**********`;
document.getElementById('o24').textContent = o24;
document.getElementById('p24').textContent = p24;
document.getElementById('oo24').textContent = oo24;

const o25=
`   * 
  * * 
 * * * 
* * * * `;
const p25=`
#include <stdio.h>

int main() {
    int i,j,n,s;
    puts("Enter no of rows:");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(s=1;s<=n-i;s++)printf(" ");
        for(j=1;j<=i;j++){
            printf("* ");
        }printf("\n");
    }

    return 0;
}`;
const oo25=`
Enter no of rows:
7
      * 
     * * 
    * * * 
   * * * * 
  * * * * * 
 * * * * * * 
* * * * * * * `;
document.getElementById('o25').textContent = o25;
document.getElementById('p25').textContent = p25;
document.getElementById('oo25').textContent = oo25;

const o26=
`   *
  ***
 *****
*******`;
const p26=`
#include <stdio.h>

int main() {
    int i,j,n,s;
    puts("Enter no of rows:");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(s=1;s<=n-i;s++)printf(" ");
        for(j=1;j<=2*i-1;j++){
            printf("*");
        }printf("\n");
    }

    return 0;
}`;
const oo26=`
Enter no of rows:
7
      *
     ***
    *****
   *******
  *********
 ***********
*************`;
document.getElementById('o26').textContent = o26;
document.getElementById('p26').textContent = p26;
document.getElementById('oo26').textContent = oo26;

const o27=
`   *
  ***
 *****
*******
 *****
  ***
   *`;
const p27=`
#include <stdio.h>

int main() {
    int i,j,n,s;
    puts("Enter no of rows:");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(s=1;s<=n-i;s++)printf(" ");
        for(j=1;j<=2*i-1;j++){
            printf("*");
        }printf("\n");
    }
    for(i=n-1;i>=1;i--){
        for(s=1;s<=n-i;s++)printf(" ");
        for(j=1;j<=2*i-1;j++){
            printf("*");
        }printf("\n");
    }
    return 0;
}`;
const oo27=`
Enter no of rows:
7
      *
     ***
    *****
   *******
  *********
 ***********
*************
 ***********
  *********
   *******
    *****
     ***
      *`;
document.getElementById('o27').textContent = o27;
document.getElementById('p27').textContent = p27;
document.getElementById('oo27').textContent = oo27;

const o28=
`   *
  * *
 *   *
*     *
 *   *
  * *
   *`;
const p28=`
#include <stdio.h>

int main() {
    int i,j,n,s;
    puts("Enter no of rows:");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(s=1;s<=n-i;s++)printf(" ");
        for(j=1;j<=2*i-1;j++){
            if(j==1 || j==2*i-1 )printf("*");
            else printf(" ");
            
        }printf("\n");
    }
    for(i=n-1;i>=1;i--){
        for(s=1;s<=n-i;s++)printf(" ");
        for(j=1;j<=2*i-1;j++){
            if(j==1 || j==2*i-1 )printf("*");
            else printf(" ");
            
        }printf("\n");
    }

    return 0;
}`;
const oo28=`
Enter no of rows:
7
      *
     * *
    *   *
   *     *
  *       *
 *         *
*           *
 *         *
  *       *
   *     *
    *   *
     * *
      *`;
document.getElementById('o28').textContent = o28;
document.getElementById('p28').textContent = p28;
document.getElementById('oo28').textContent = oo28;

const o29=
`A
AB
ABC
ABCD
ABC
AB
A`;
const p29=`
#include <stdio.h>

int main() {
    int i,j,n;
    puts("Enter no of rows:");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            printf("%c",64+j);
            
        }printf("\n");
    }
    for(i=n-1;i>=1;i--){
        for(j=1;j<=i;j++){
            printf("%c",64+j);
        }printf("\n");
    }

    return 0;
}`;
const oo29=`
Enter no of rows:
7
A
AB
ABC
ABCD
ABCDE
ABCDEF
ABCDEFG
ABCDEF
ABCDE
ABCD
ABC
AB
A`;
document.getElementById('o29').textContent = o29;
document.getElementById('p29').textContent = p29;
document.getElementById('oo29').textContent = oo29;

const o30=
`           1
        1  2  1
     1  2  3  2  1
  1  2  3  4  3  2  1`;
const p30=`
#include <stdio.h>

int main() {
    int i,j,n,s,k;
    puts("Enter no of rows:");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(s=1;s<=n-i;s++)printf("   ");
        for(j=1;j<=i;j++)printf("%3d",j);
        for(k=j-2;k>=1;k--)printf("%3d",k);
        printf("\n");
    }
    
    return 0;
}`;
const oo30=`
Enter no of rows:
7
                    1
                 1  2  1
              1  2  3  2  1
           1  2  3  4  3  2  1
        1  2  3  4  5  4  3  2  1
     1  2  3  4  5  6  5  4  3  2  1
  1  2  3  4  5  6  7  6  5  4  3  2  1`;
document.getElementById('o30').textContent = o30;
document.getElementById('p30').textContent = p30;
document.getElementById('oo30').textContent = oo30;

const o31=
`       1
     2 3 2
   3 4 5 4 3
 4 5 6 7 6 5 4`;
const p31=`
#include <stdio.h>

int main() {
    
    int i,j,k,s,n;
    puts("Enter no. of rows: ");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(s=1;s<=n-i;s++)printf("  ");
        for(j=i;j<=2*i-1;j++)printf("%2d",j);
        for(k=j-2;k>=i;k--)printf("%2d",k);
        printf("\n");
    }
    

    return 0;
}`;
const oo31=`
Enter no. of rows: 
5
         1
       2 3 2
     3 4 5 4 3
   4 5 6 7 6 5 4
 5 6 7 8 9 8 7 6 5`;
document.getElementById('o31').textContent = o31;
document.getElementById('p31').textContent = p31;
document.getElementById('oo31').textContent = oo31;

const o32=
`           4
        5  6  5
     6  7  8  7  6
  7  8  9 10  9  8  7`;
const p32=`
#include <stdio.h>

int main() {
    
    int i,j,k,s,n;
    puts("Enter no. of rows: ");scanf("%d",&n);
    for(i=1;i<=n;i++){
        for(s=1;s<=n-i;s++)printf("   ");
        for(j=i;j<=2*i-1;j++)printf("%3d",j+n-1);
        for(k=j-2;k>=i;k--)printf("%3d",k+n-1);
        printf("\n");
    }

    return 0;
}`;
const oo32=`
Enter no. of rows: 
7
                    7
                 8  9  8
              9 10 11 10  9
          10 11 12 13 12 11 10
       11 12 13 14 15 14 13 12 11
    12 13 14 15 16 17 16 15 14 13 12
 13 14 15 16 17 18 19 18 17 16 15 14 13`;
document.getElementById('o32').textContent = o32;
document.getElementById('p32').textContent = p32;
document.getElementById('oo32').textContent = oo32;

const o33=
``;
const p33=``;
const oo33=``;
document.getElementById('o33').textContent = o33;
document.getElementById('p33').textContent = p33;
document.getElementById('oo33').textContent = oo33;



});