var poprawnyWynik,
bokiTrojkata = [3, 4, 5];

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
	var przemnoznik = getRandomInt(10) + 1,
	bok = getRandomInt(6);

	
	switch(bok)
	{
		case 0:
		{
			poprawnyWynik = bokiTrojkata[bok] * przemnoznik;
			document.getElementById("polecenie_1").innerHTML = "Oblicz długość przyprostokątnej trójkąta prostokątnego, którego druga przyprostokątna ma długość "
			+ bokiTrojkata[1] * przemnoznik
			+ " a przeciwprostokątna ma długość "
			+ bokiTrojkata[2] * przemnoznik;
			break;
		}
		case 1:
		{
			poprawnyWynik = bokiTrojkata[bok] * przemnoznik;
			document.getElementById("polecenie_1").innerHTML = "Oblicz długość przyprostokątnej trójkąta prostokątnego, którego druga przyprostokątna ma długość "
			+ bokiTrojkata[0] * przemnoznik
			+ " a przeciwprostokątna ma długość "
			+ bokiTrojkata[2] * przemnoznik;
			break;
		}
		case 2:
		{
			poprawnyWynik = bokiTrojkata[bok] * przemnoznik;
			document.getElementById("polecenie_1").innerHTML = "Oblicz długość przeciwprostokątnej trójkąta prostokątnego, którego pierwsza przyprostokątna ma długość "
			+ bokiTrojkata[0] * przemnoznik
			+ " a druga ma długość "
			+ bokiTrojkata[1] * przemnoznik;
			break;
		}
		case 3:
		{
			poprawnyWynik = (bokiTrojkata[0] + bokiTrojkata[1] + bokiTrojkata[2]) * przemnoznik;
			document.getElementById("polecenie_1").innerHTML = "Oblicz obwód trójkąta prostokątnego, którego przyprostokątna ma długość "
			+ bokiTrojkata[1] * przemnoznik
			+ " a przeciwprostokątna ma długość "
			+ bokiTrojkata[2] * przemnoznik;
			break;
		}
		case 4:
		{
			poprawnyWynik = (bokiTrojkata[0] + bokiTrojkata[1] + bokiTrojkata[2]) * przemnoznik;
			document.getElementById("polecenie_1").innerHTML = "Oblicz obwód trójkąta prostokątnego, którego przyprostokątna ma długość "
			+ bokiTrojkata[0] * przemnoznik
			+ " a przeciwprostokątna ma długość "
			+ bokiTrojkata[2] * przemnoznik;
			break;
		}
		case 5:
		{
			poprawnyWynik = (bokiTrojkata[0] + bokiTrojkata[1] + bokiTrojkata[2]) * przemnoznik;
			document.getElementById("polecenie_1").innerHTML = "Oblicz obwód trójkąta prostokątnego, którego pierwsza przyprostokątna ma długość "
			+ bokiTrojkata[0] * przemnoznik
			+ " a druga ma długość "
			+ bokiTrojkata[1] * przemnoznik;
			break;
		}
	}
}

function getRandomInt(max)
{
	return Math.floor(Math.random() * Math.floor(max));
}