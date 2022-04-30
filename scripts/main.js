const apiKey = '015030134c47ce68b068e311fd4e64c6';
let result;

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(
		(position) => {
			console.log(position);
		},
		() => {
			alert(
				"En refusant la géolocalisation, l'application ne peut fonctionner à son plein potentiel. Veuillez l'activer."
			);
		}
	);
}
