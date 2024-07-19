document.addEventListener('DOMContentLoaded', function() {
    const c1 = `
<!-- example on CSS implementations  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex39</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
  </head>
  <body>
	<h3>demo on inline styles</h3>
	<h1 style="color:red;">Red Apple</h1>
	<h1 style="color:green;">Green Banana</h1>
	<h2 style="color:yellow;">Yellow Mango</h2>
	<input type="text" style="color:blue;">
	<button style="color:red;">Search</button>	  
  </body> 
</html>
    `;

    const c2 = `
<!-- example on CSS implementations  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex40</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
	<style>
	  h1{
		color:blue;
	  }
	  img{
		width:150px;
		height:150px;
	  }
	</style>
  </head>
  <body>
	<h3>demo on external styles</h3>
	<h1>Red Apple</h1>
	<h1>Green Banana</h1>
	<h1>Yellow Mango</h1>
	<h1>Black Grape</h1>
	<img src="images/rose.jpeg">
	<img src="images/girl.jpg">
	<img src="images/nature.png">  
  </body> 
</html>

    `;
    const c3= `
    <!-- example on CSS implementations  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex41</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
	<link rel="stylesheet" href="sample.css"> <!-- linking -->
  </head>
  <body>
    <h2>demo on external styles</h2>
	
	<h3>General Public License</h3>
	<p>This program is free software; you can redistribute it and/or modify it under the terms of the GNU 
  General Public License as published by the Free Software Foundation; either version 3 of the License, 
  or at your option any later version.</p>
	
	<h3>Notepad++</h3>
	<p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even 
  the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License 
  for more details.</p>	
  </body>
</html>
    `;
    const css3= `
    /* example on defining external styles */
h3{
  color:red;
}
p{
  color:blue;	
}

/* Note:
  save this file with a name "sample.css" in current folder
*/
    `;
    const c4=`
    <!-- example on CSS implementations  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex42</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">

	<style> p{ color:green; } </style>
	<link rel="stylesheet" href="sample.css"> <!-- linking -->

  </head>
  <body>
    <h3>demo on all styles (order of applying)</h3>
	<p style="color:hotpink;">This program is free software; you can redistribute it and/or modify it under the terms
   of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License,
    or at your option any later version.</p>	
  </body>
</html>`;
    const c5=`
    <!-- example on CSS implementations  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex43</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
	<link rel="stylesheet" href="sample.css"> <!-- linking -->
	<style>
	   p{
	      width:50%;
		  background:cyan;
	   }
	</style>
  </head>
  <body>
    <h3>demo on all styles</h3>		
	<p style="text-align:justify;">This program is free software; you can redistribute it and/or modify it under 
  the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of 
  the License, or at your option any later version.</p>	
  </body>
</html>`;
    const c6=`
<!-- example on CSS implementations  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex44</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
  </head>
  <body>
    <h2>demo on css colors</h2>		
	<!-- named colors -->
	<h1 style="color:white; background-color:red;">Hypertext Markup Language</h1>
	<span style="color:white; background-color:red;">Cascading Style</span>
	
	<!-- hex-decimal color codes 
		 #6digits		#3digits 			-->
	<h2 style="background-color:#831272; color:#abcdef;">
	JavaScript</h2>
	<div style="background-color:#678; color:#fde;">
	BootStrap</div>
	
	<!-- rgb() colors	
		rgb(red, green, blue)	range => 0 to 255  -->
	<h3 style="background-color:rgb(30,26,16); color:rgb(190,200,210);">
	AngularJS</h3>
	
	<input type="text" style="border-color:orange; color:rgb(180,160,170);">
		
  </body>
</html>
  `;
  const c7=`
  <!-- example on CSS Properties  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex45</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
  </head>
  <body>
    <h2>demo on css borders</h2>		
	<p style="border-left:4px solid; border-right:4px solid;">
	This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published 
  by the Free Software Foundation; either version 3 of the License, or at your option any later version.</p>
	
	<h1 style="border-top:5px solid #f00; border-bottom:5px solid #f00; text-align:center;">
	General Public License </h1>

	<!--
	solid, double, dotted, dashed, inset, outset, ridge,
	groove, none -->		 
	<img src="images/tenor.gif" style="border:10px ridge blue;">
	&nbsp; 
	<input type="text" style="border:none; border-bottom:2px solid blue;">
	&nbsp;
	<input type="text" style="outline:none;">
	 &nbsp; 
	<input type="text" style="outline-color:blue;">
	<br> <br>
	
	<div style="background-color:cyan; border-radius:10px;">
	This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of 
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received 
  a copy of the GNU General Public License along with this program.
	</div>
	<br>
	
	<img src="images/rose.jpeg" style="border-radius:50px;">
	
	<img src="images/baby.png" style="width:250px; height:250px; border-radius:50%;">
	&nbsp; 
	<img src="images/moon.png" style="border-radius:50px 200px">
	
	<img src="images/moon.png" style="border-radius:10px 100px 50px 150px;">
  </body>
</html>
  `;
  const c8=`
  <!-- example on CSS Properties  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex46</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
  </head>
  <body>
    <h2>demo on css shadows</h2>		
	<p style="box-shadow:3px -3px; background:cyan;">
	This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version.</p>

	<h1 style="box-shadow:0 4px orange;">Heading shadow</h1>
	
	<img src="images/girl.jpg" style="box-shadow:-5px -5px 10px red;">
	<br> <br>
	<img src="images/spring.jpg" style="box-shadow:0 0 50px blue;">

  </body>
</html>
  `;
  const c9=`
  <!-- example on CSS Properties  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex47</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
	<style>
	  p{
		font-size:32px;
		font-style:italic;
		font-weight:bold;
		font-family:'MV Boli','Monotype Corsiva','Kristen ITC';
	  }
	  div{
		font-size:150%;
		letter-spacing:3px;	
		word-spacing:20px;
		line-height:44px;
		text-decoration:underline;
		text-align:justify;
	  }	
	</style>
  </head>
  <body>
    <h2>demo on font & text settings </h2>		
	<p>This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version.</p>
	<div>
	This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program.
	</div>

	
	
  </body>
</html>`;
const c10=`
<!-- example on CSS Properties  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex47</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
	<style>
 
	</style>
  </head>
  <body>
    <h2>demo on overflow & columns</h2>		
	<div style="columns:2; text-align:justify;">
	This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program. This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version.
	</div>
	<br>
	
	<div style="width:300px; height:200px; background-color:cyan; overflow:auto;">
	This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program. This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version.
	</div>
	
  </body>
</html>

`;
const c11=`
<!-- example on CSS Properties  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex47</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
	<style>
 
	</style>
  </head>
  <body>
    <h2>demo on overflow & columns</h2>		
	<div style="columns:2; text-align:justify;">
	This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program. This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version.
	</div>
	<br>
	
	<div style="width:300px; height:200px; background-color:cyan; overflow:auto;">
	This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program. This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or at your option any later version.
	</div>
	
  </body>
</html>
`;
const c12=`
<!-- example on CSS Properties  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex49</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
	<style>
	   body{
		background-image:url(images/tenor.gif);
		
		
	   }
	</style>
  </head>
  <body>
	<h1>demo on wallpaper</h1>
    <h2>Hyundai Motor Company</h2>		
	<div>Hyundai operates the world's largest integrated automobile manufacturing facility in Ulsan, South Korea 
	which has an annual production capacity of 1.6 million units. The company employs approximately 75,000 people 
	worldwide. Hyundai vehicles are sold in 193 countries through 5,000 dealerships and showrooms.[10] As of 2022, 
	Hyundai is the world's third-largest carmaker in terms of production, only falling behind Toyota and Volkswagen.</div>

	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/HyundaiMotorsCompany_KiaMotorsCompany.jpg/
	220px-HyundaiMotorsCompany_KiaMotorsCompany.jpg">

	<h3>History</h3>
	<p>Chung Ju-yung (1915–2001) founded the Hyundai Engineering and Construction Company in 1947. Hyundai Motor 
	Company was later established in 1967, and the company's first model, the Cortina, was released in cooperation
	 with Ford Motor Company in 1968.[12] When Hyundai wanted to develop their own car, they hired George 
	 Turnbull in February 1974, the former managing director of Austin Morris at British Leyland. 
	 He in turn hired five other top British car engineers. They were body designer Kenneth Barnett, 
	 engineers John Simpson and Edward Chapman, John Crosthwaite, formerly of BRM, as chassis engineer and 
	 Peter Slater as chief development engineer.[13][14][15][16] In 1975, the Pony, the first South Korean car,
	  was released, with styling by Giorgio Giugiaro of Italdesign and powertrain technology provided by Japan's
	   Mitsubishi Motors. Exports began in the following year to Ecuador and soon thereafter to the Benelux
	    countries. Hyundai entered the British market in 1982, selling 2993 cars in their first year there.</p>
	<p>In 1984, Hyundai began exporting the Pony to Canada, but not to the United States, as the Pony would not
	pass emissions standards there. Canadian sales greatly exceeded expectations, and it was at one point the 
	top-selling car on the Canadian market. In 1985, the one millionth Hyundai car was built.[18] Until the 1986
	 introduction of the larger Hyundai Grandeur, Hyundai offered a locally assembled Ford Granada for 
	 the South Korean executive market. The import of these knocked down kits was permitted as long as 
	 Hyundai exported five cars for every single Granada brought in (the same demands were placed on Kia).</p>

	
	
  </body>
</html>

`;
const c13=`
<!-- example on CSS Properties  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex50</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
	<style>
	  body{
		 /* background:linear-gradient(to right, blue, red);
			OR
		background:linear-gradient(to right, blue 30%, red 70%);
			OR  */
		background:linear-gradient(45deg, blue,red);			
	   }			
	</style>
  </head>
  <body>
	<h1>demo on linear gradient </h1>
    <h2>Hyundai Motor Company</h2>		
	<div style="background:linear-gradient(to left, green,yellow,orange); color:white;">
	Hyundai operates the world's largest integrated automobile manufacturing facility in Ulsan, South Korea which
	 has an annual production capacity of 1.6 million units. The company employs approximately 75,000 people 
	 worldwide. Hyundai vehicles are sold in 193 countries through 5,000 dealerships and showrooms.As of 2022, 
	 Hyundai is the world's third-largest carmaker in terms of production, only falling behind Toyota and 
	 Volkswagen. Hyundai operates the world's largest integrated automobile manufacturing facility in Ulsan, 
	 South Korea which has an annual production capacity of 1.6 million units. The company employs approximately
	  75,000 people worldwide. Hyundai vehicles are sold in 193 countries through 5,000 dealerships and showrooms.
	  As of 2022, Hyundai is the world's third-largest carmaker in terms of production, only falling behind Toyota
	   and Volkswagen.</div>

	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/HyundaiMotorsCompany_KiaMotorsCompany.j
	pg/220px-HyundaiMotorsCompany_KiaMotorsCompany.jpg">
			
	<h3>History</h3>
	<p>Chung Ju-yung (1915–2001) founded the Hyundai Engineering and Construction Company in 1947. Hyundai Motor 
	Company was later established in 1967, and the company's first model, the Cortina, was released in cooperation 
	with Ford Motor Company in 1968.[12] When Hyundai wanted to develop their own car, they hired George Turnbull
	 in February 1974, the former managing director of Austin Morris at British Leyland. He in turn hired five 
	 other top British car engineers. They were body designer Kenneth Barnett, engineers John Simpson and Edward
	  Chapman, John Crosthwaite, formerly of BRM, as chassis engineer and Peter Slater as chief development 
	  engineer.[13][14][15][16] In 1975, the Pony, the first South Korean car, was released, with styling by
	  Giorgio Giugiaro of Italdesign and powertrain technology provided by Japan's Mitsubishi Motors. Exports 
	  began in the following year to Ecuador and soon thereafter to the Benelux countries. Hyundai entered the 
	  British market in 1982, selling 2993 cars in their first year there.</p>
	<p>In 1984, Hyundai began exporting the Pony to Canada, but not to the United States, as the Pony would not
	 pass emissions standards there. Canadian sales greatly exceeded expectations, and it was at one point the 
	 top-selling car on the Canadian market. In 1985, the one millionth Hyundai car was built.[18] Until the 1986 
	 introduction of the larger Hyundai Grandeur, Hyundai offered a locally assembled Ford Granada for the 
	 South Korean executive market. The import of these knocked down kits was permitted as long as Hyundai 
	 exported five cars for every single Granada brought in (the same demands were placed on Kia).</p>

	
	
  </body>
</html>

`;
const c14=`
<!-- example on CSS Properties  -->		
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ex50</title>
	<link rel="icon" href="logo.webp">
	<meta charset="UTF-8">
	<style>
	  body{
		 /* background:linear-gradient(to right, blue, red);
			OR
		background:linear-gradient(to right, blue 30%, red 70%);
			OR  */
		background:linear-gradient(45deg, blue,red);			
	   }			
	</style>
  </head>
  <body>
	<h1>demo on linear gradient </h1>
    <h2>Hyundai Motor Company</h2>		
	<div style="background:linear-gradient(to left, green,yellow,orange); color:white;">
	Hyundai operates the world's largest integrated automobile manufacturing facility in Ulsan, South Korea 
	which has an annual production capacity of 1.6 million units. The company employs approximately 75,000 people
	 worldwide. Hyundai vehicles are sold in 193 countries through 5,000 dealerships and showrooms.As of 2022, 
	 Hyundai is the world's third-largest carmaker in terms of production, only falling behind Toyota and 
	 Volkswagen. Hyundai operates the world's largest integrated automobile manufacturing facility in Ulsan, 
	 South Korea which has an annual production capacity of 1.6 million units. The company employs approximately
	  75,000 people worldwide. Hyundai vehicles are sold in 193 countries through 5,000 dealerships and showrooms.
	  As of 2022, Hyundai is the world's third-largest carmaker in terms of production, only falling behind Toyota
	   and Volkswagen.</div>

	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/HyundaiMotorsCompany_KiaMotorsCompany.jpg
	/220px-HyundaiMotorsCompany_KiaMotorsCompany.jpg">
			
	<h3>History</h3>
	<p>Chung Ju-yung (1915–2001) founded the Hyundai Engineering and Construction Company in 1947. Hyundai 
	Motor Company was later established in 1967, and the company's first model, the Cortina, was released in 
	cooperation with Ford Motor Company in 1968.[12] When Hyundai wanted to develop their own car, they hired 
	George Turnbull in February 1974, the former managing director of Austin Morris at British Leyland. He in 
	turn hired five other top British car engineers. They were body designer Kenneth Barnett, engineers 
	John Simpson and Edward Chapman, John Crosthwaite, formerly of BRM, as chassis engineer and Peter Slater as 
	chief development engineer.[13][14][15][16] In 1975, the Pony, the first South Korean car, was released, with 
	styling by Giorgio Giugiaro of Italdesign and powertrain technology provided by Japan's Mitsubishi Motors. 
	Exports began in the following year to Ecuador and soon thereafter to the Benelux countries. Hyundai entered 
	the British market in 1982, selling 2993 cars in their first year there.</p>
	<p>In 1984, Hyundai began exporting the Pony to Canada, but not to the United States, as the Pony would not 
	pass emissions standards there. Canadian sales greatly exceeded expectations, and it was at one point the 
	top-selling car on the Canadian market. In 1985, the one millionth Hyundai car was built.[18] Until the 
	1986 introduction of the larger Hyundai Grandeur, Hyundai offered a locally assembled Ford Granada for the 
	South Korean executive market. The import of these knocked down kits was permitted as long as Hyundai 
	exported five cars for every single Granada brought in (the same demands were placed on Kia).</p>

	
	
  </body>
</html>

`;

    document.getElementById('code-1').textContent = c1;
    document.getElementById('code-2').textContent = c2;
    document.getElementById('code-3').textContent = c3;
    document.getElementById('css-3').textContent = css3;
    document.getElementById('code-4').textContent= c4;
    document.getElementById('css-4').textContent = css3;
    document.getElementById('code-5').textContent= c5;
    document.getElementById('css-5').textContent = css3;
    document.getElementById('code-6').textContent= c6;
    document.getElementById('code-7').textContent= c7;
    document.getElementById('code-8').textContent= c8;
	document.getElementById('code-9').textContent= c9;
	document.getElementById('code-10').textContent= c9;
	document.getElementById('code-11').textContent= c11;
	document.getElementById('code-12').textContent= c12;
	document.getElementById('code-13').textContent= c13;
	document.getElementById('code-14').textContent= c14;
	document.getElementById('code-15').textContent= c14;
});