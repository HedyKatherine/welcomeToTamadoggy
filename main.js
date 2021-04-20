			var hunger = document.getElementById("hunger"); // L'élément span de la faim
			var thirst = document.getElementById("thirst"); // L'élément span de la soif
			var happiness = document.getElementById("happiness"); // L'élément span du bonheur
			var sickness = document.getElementById("sickness"); // L'élément span de la maladie
			var tama = document.getElementById("tama"); // L'image de Tama
			var play = document.getElementById ("play"); //L'image du ballon

			// tamaLife contrôle le cycle de vie de Tama
			function tamaLife(){
				// Pour ajouter 5 à la faim, la soif et la maladie, on modifie hunger, thirst ou sickness.textContent = le contenu textuel du span
				// Et on convertit bien la valeur en nombre entier avec parseInt pour éviter un bug
				hunger.textContent  = parseInt(hunger.textContent) + 5;
				thirst.textContent  = parseInt(thirst.textContent) + 5;
				sickness.textContent  = parseInt(sickness.textContent) + 5;
				// Même chose => Le contenu textuel du bonheur = la valeur entière du bonheur -10
				happiness.textContent = parseInt(happiness.textContent) - 10;

				// Si Tama est malheureux
				if (parseInt(hunger.textContent) >= 70 || parseInt(happiness.textContent) <= 30){
					tama.src = "https://github.com/aliceokodomo/tama/blob/main/unhappydog.png?raw=true";
				}
				if (parseInt(thirst.textContent) >= 70 || parseInt(happiness.textContent) <= 30){
					tama.src = "https://github.com/aliceokodomo/tama/blob/main/unhappydog.png?raw=true";
				}
				if (parseInt(sickness.textContent) >= 70 || parseInt(happiness.textContent) <= 30){
					tama.src = "https://github.com/aliceokodomo/tama/blob/main/unhappydog.png?raw=true";
				}
				// Sinon Tama est normal
			else {
					tama.src = "https://github.com/aliceokodomo/tama/blob/main/alivedog.png?raw=true";
				}

				// Si Tama est mort
				if (parseInt(happiness.textContent) <= 0 || parseInt(hunger.textContent) >= 100){
					tama.src = "https://github.com/aliceokodomo/tama/blob/main/deaddog.png?raw=true";
					if (parseInt(happiness.textContent) <= 0 || parseInt(thirst.textContent) >= 100){
						tama.src = "https://github.com/aliceokodomo/tama/blob/main/deaddog.png?raw=true";
						if (parseInt(happiness.textContent) <= 0 || parseInt(sickness.textContent) >= 100){
							tama.src = "https://github.com/aliceokodomo/tama/blob/main/deaddog.png?raw=true";
					clearInterval(interval); // On arrête l'intervalle
					// Et on enlève les écouteurs d'évènements : Si Tama est mort, on ne peux plus interagir avec lui
					tama.removeEventListener("mouseover", setHappiness);
					play.removeEventListener("mouseover", setHappiness);
					document.getElementById("go").removeEventListener("click", setFood);
					document.getElementById("goWater").removeEventListener("click", setWater);
					document.getElementById("goPills").removeEventListener("click", setPills);
				}
			}
		}

	}

			// setHappiness contrôle le bonheur de Tama
			function setHappiness(){
				document.getElementById("happiness").textContent = "100"; // Le bonheur passe à 100
				tama.src = "https://github.com/aliceokodomo/tama/blob/main/happydog.png?raw=true"; // Tama est tout content
			}

			//function setBolQuantity(){
			//document.getElementById("food") = "100";
			//bol.src = "https://github.com/aliceokodomo/tama/blob/main/foodbowl123-04.png?raw=true";


				//document.getElementById("food").textContent = "50";
				//bol.src = "https://github.com/aliceokodomo/tama/blob/main/foodbowl123-05.png?raw=true";

			 //document.getElementById("food").textContent = "0";
				//bol.src = "https://github.com/aliceokodomo/tama/blob/main/foodbowl123-06.png?raw=true";

			//}

			// setFood contrôle la nourriture de Tama
			function setFood(){
				var food_quantity = document.getElementById("food").value; // La valeur de l'input qu'on a saisi
				var food_INT = parseInt(food_quantity); // On convertit la valeur en entier
				if (!isNaN(food_INT) && food_INT <= hunger.textContent) // Si on a bien une valeur numérique et que la quantité de nourriture est inférieure ou égale à l'appétit
					hunger.textContent = parseInt(hunger.textContent) - food_INT; // on met à jour l'appétit de Tama
			}
			//var btnAdd = document.querySelector("#go");
			//var input = document.querySelector("input");

			//btnAdd.addEventListener("go", () =>{
			//input.value = parseInt(input.value) + 10;
			//});

			// setWater contrôle l'eau de Tama
			function setWater(){
				var water_quantity = document.getElementById("water").value; // La valeur de l'input qu'on a saisi
				var water_INT = parseInt(water_quantity); // On convertit la valeur en entier
				if (!isNaN(water_INT) && water_INT <= thirst.textContent) // Si on a bien une valeur numérique et que la quantité d'eau est inférieure ou égale à la soif
					thirst.textContent = parseInt(thirst.textContent) - water_INT; // on met à jour la soif de Tama
			}

			// setMedecine contrôle les médicaments de Tama
			function setPills(){
				var pills_quantity = document.getElementById("pills").value; // La valeur de l'input qu'on a saisi
				var pills_INT = parseInt(pills_quantity); // On convertit la valeur en entier
				if (!isNaN(pills_INT) && pills_INT <= sickness.textContent) // Si on a bien une valeur numérique et que la quantité de médicaments est inférieure ou égale à la maladie
					sickness.textContent = parseInt(sickness.textContent) - pills_INT; // on met à jour la maladie de Tama
			}

			// Ajout des écouteurs
			tama.addEventListener("mouseover", setHappiness);
			play.addEventListener("mouseover", setHappiness);
			document.getElementById("go").addEventListener("click", setFood);
			document.getElementById("goWater").addEventListener("click", setWater);
			document.getElementById("goPills").addEventListener("click", setPills);

			// Mise en place de l'intervalle
			var interval = setInterval(tamaLife, 3000);
