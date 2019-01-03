var poprawnyWynik,
znakiDzialan = [" + ", " - ", " * ", " / "],
funkcje = [dodaj, odejmij, pomnoz, podziel];

function sprawdz()
{
	var x = document.getElementById("odpowiedz").value,
	dobrze = document.getElementById("dobrze"),
	zle = document.getElementById("zle");

	if (poprawnyWynik == x)
	{
		zle.style.display = 'none';
		dobrze.style.display = 'block';
		document.getElementById("pt-dobra").innerHTML++;
		return;
	}

	dobrze.style.display = 'none';
	zle.style.display = 'block';
	document.getElementById("wynik").innerHTML = poprawnyWynik;
	document.getElementById("pt-zla").innerHTML++;
}
function losujLiczby()
{
	var dzialanie1 = getRandomInt(4),
		liczba2 = getRandomInt(100) + 1;
	poprawnyWynik = getRandomInt(100) + 1;
	
	document.getElementById("polecenie").innerHTML = "x" 
	+ znakiDzialan[dzialanie1] 
	+ liczba2 
	+ " = "
	+ funkcje[dzialanie1](poprawnyWynik, liczba2)
	+ " ; x = <textarea id=\"odpowiedz\"></textarea> " ;
}

function podziel(var1, var2)
{
	return Math.round(var1 / var2 * 100) / 100;
}

function pomnoz(var1, var2)
{
	return var1 * var2;
}

function dodaj(var1, var2)
{
	return var1 + var2;
}

function odejmij(var1, var2)
{
	return var1 - var2;
}

function getRandomInt(max)
{
	return Math.floor(Math.random() * Math.floor(max));
}