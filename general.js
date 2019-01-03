function zastapic(zniknij, pokaz)
{
	document.getElementById(zniknij).style.display = "none";
	document.getElementById(pokaz).style.display = "block";
}

function wyswietl(pokaz)
{
	document.getElementById(pokaz).style.display = "block";
}

function przelaczElementy(KlasaElementow)
{
	var tablicaElementow = document.getElementsByClassName(KlasaElementow);
	for(const element of tablicaElementow)
	{
		element.style.display = element.style.display != 'block' ? 'block' : 'none';
	}
}

function wpisz(id, tekst)
{
	document.getElementById(id).innerHTML = tekst;
}

function czysc()
{
	document.getElementById("odpowiedz").value = "";
}
