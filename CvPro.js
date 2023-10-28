function canvia_idioma(){
	var idioma;
	idioma = document.getElementById('Idiomes').value;
	console.log(idioma)
	if(idioma=="Català") location.href="https://asanchezsa04.github.io/HMP1_CVCAT/"
	else if(idioma=="Español") location.href="https://asanchezsa04.github.io/HMP1_CVES/"
	else if(idioma=="English") location.href="https://asanchezsa04.github.io/HMP1_CV/"
}