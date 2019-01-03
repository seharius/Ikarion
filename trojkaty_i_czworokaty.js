var poprawnyWynik;

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
	var liczba1 = getRandomInt(90) + 1,
		liczba2 = getRandomInt(90) + 1;

	poprawnyWynik = 180 - (liczba1 + liczba2);
	document.getElementById("polecenie_1").innerHTML = "ile wynosi miara kątu alfa jeżeli pozostałe dwa kąty trójkąta mają miarę "
	+ liczba1
	+ " i "
	+ liczba2;
}


function getRandomInt(max)
{
	return Math.floor(Math.random() * Math.floor(max));
}