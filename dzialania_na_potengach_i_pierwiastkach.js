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
	var jestPierwiastkiem = getRandomInt(2),
	liczba = getRandomInt(100),
	wykladnik = getRandomInt(10) + 1;

	if(jestPierwiastkiem)
	{
		poprawnyWynik = Math.round(Math.sqrt(liczba)*100)/100;
		document.getElementById("polecenie").innerHTML = "√" + liczba + " = <textarea id=\"odpowiedz\"></textarea>";
		return;
	}
	poprawnyWynik = Math.pow(liczba, wykladnik);
	document.getElementById("polecenie").innerHTML = liczba + "<sup>" + wykladnik + "</sup> = <textarea id=\"odpowiedz\"></textarea>";
}

function getRandomInt(max)
{
	return Math.floor(Math.random() * Math.floor(max));
}

/*
var btn = document.getElementById("btn-odpowiedz");
btn.addEventListener("click", event => {
  document.getElementById("odpowiedz").value = poprawnyWynik;
});
*/