var poprawnyZnak,
znakiDzialan = [" + ", " - ", " * ", " / "],
funkcje = [dodaj, odejmij, pomnoz, podziel];

function sprawdz()
{
	var x = document.getElementById("odpowiedz").value,
	dobrze = document.getElementById("dobrze"),
	zle = document.getElementById("zle");

	if (poprawnyZnak == x)
	{
		zle.style.display = 'none';
		dobrze.style.display = 'block';
		document.getElementById("pt-dobra").innerHTML++;
		return;
	}

	dobrze.style.display = 'none';
	zle.style.display = 'block';
	document.getElementById("wynik").innerHTML = poprawnyZnak;
	document.getElementById("pt-zla").innerHTML++;
}

function losujLiczby()
{
	var dzialanie1 = getRandomInt(4),
		dzialanie2 = getRandomInt(4),
		liczba1 = getRandomInt(100) + 1,
		liczbaM1 = getRandomInt(100) + 1,
		liczba2 = getRandomInt(100) + 1,
		liczbaM2 = getRandomInt(100) + 1;
	if(funkcje[dzialanie1](liczba1, liczbaM1) == funkcje[dzialanie2](liczba2, liczbaM2))
		poprawnyZnak = "=";
	else if(funkcje[dzialanie1](liczba1, liczbaM1) < funkcje[dzialanie2](liczba2, liczbaM2))
		poprawnyZnak = "<";
	else
		poprawnyZnak = ">";
	document.getElementById("polecenie").innerHTML = liczba1 
	+ znakiDzialan[dzialanie1] 
	+ liczbaM1 
	+ " <textarea id=\"odpowiedz\"></textarea> " 
	+ liczba2 
	+ znakiDzialan[dzialanie2] 
	+ liczbaM2;
}

function podziel(var1, var2)
{
	return var1 / var2;
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