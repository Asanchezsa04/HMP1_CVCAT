function canvia_idioma(){
	var idioma;
	idioma = document.getElementById('Idiomes').value;
	console.log(idioma)
	if(idioma=="Català") location.href="Language/CVProjectCA.html"
	else if(idioma=="Español") location.href="Language/CVProjectES.html"
	else if(idioma=="English") location.href="https://asanchezsa04.github.io/HMP1_CV/"
}