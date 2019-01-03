var liczbyRzymskie = {
	"M": 1000,
	"CM": 900,
	"D": 500,
	"CD": 400,
	"C": 100,
	"XC": 90,
	"L": 50,
	"XL": 40,
	"X": 10,
	"IX": 9,
	"V": 5,
	"IV": 4,
	"I": 1
};
var rzymskiWynikZadania;

function sprawdz()
{
	var x = document.getElementById("odpowiedz").value,
	dobrze = document.getElementById("dobrze"),
	zle = document.getElementById("zle");

	if (rzymskiWynikZadania == x)
	{
		zle.style.display = 'none';
		dobrze.style.display = 'block';
		return;
	}

	dobrze.style.display = 'none';
	zle.style.display = 'block';
	document.getElementById("wynik").innerHTML = rzymskiWynikZadania;
}

function losujLiczbe()
{
	rzymskiWynikZadania = "";
	var wynikZadania = getRandomInt(4000),
	pozostalaWartoscZadania = wynikZadania;
	for(const litera in liczbyRzymskie)
	{
		if(liczbyRzymskie.hasOwnProperty(litera))
		{
			const wartosc = liczbyRzymskie[litera];
			while(pozostalaWartoscZadania >= wartosc)
			{
				pozostalaWartoscZadania -= wartosc;
				rzymskiWynikZadania += litera;
			}
		}
	}
	document.getElementById("polecenie").innerHTML = wynikZadania + " = <textarea id=\"odpowiedz\"></textarea> ";
}

function getRandomInt(max)
{
	return Math.floor(Math.random() * Math.floor(max));
}