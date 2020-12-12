var club = [
   ["Arsenal", "ENG", 0, 0],  //["Team Name", "Country", domestic league champion or not, selected or not]
   ["Astana", "KAZ", 0, 0],
   ["Atlético", "ESP", 0, 0],
   ["Barcelona", "ESP", 1, 0],
   ["BATE", "BLR", 0, 0],
   ["Bayern", "GER", 1, 0],
   ["Benfica", "POR", 1, 0],
   ["Chelsea", "ENG", 1, 0],
   ["CSKA Moskva", "RUS", 0, 0],
   ["Dinamo Zagreb", "CRO", 0, 0],
   ["Dynamo Kyiv", "UKR", 0, 0],
   ["Galatasaray", "TUR", 0, 0],
   ["Gent", "BEL", 0, 0],
   ["Juventus", "ITA", 1, 0],
   ["Leverkusen", "GER", 0, 0],
   ["Lyon", "FRA", 0, 0],
   ["M. Tel-Aviv", "ISR", 0, 0],
   ["Malmö", "SWE", 0, 0],
   ["Man. City", "ENG", 0, 0],
   ["Man. United", "ENG", 0, 0],
   ["Mönchengladbach", "GER", 0, 0],
   ["Olympiacos", "GRE", 0, 0],
   ["Paris", "FRA", 1, 0],
   ["Porto", "POR", 0, 0],
   ["PSV", "NED", 1, 0],
   ["Real Madrid", "ESP", 0, 0],
   ["Roma", "ITA", 0, 0],
   ["Sevilla", "ESP", 0, 0],
   ["Shakhtar Donetsk", "UKR", 0, 0],
   ["Valencia", "ESP", 0, 0],
   ["Wolfsburg", "GER", 0, 0],
   ["Zenit", "RUS", 1, 0],
    
];

var groupID = ['A','B','C','D','E','F','G','H'];
var colorID = ["#667eea, #764ba2","#13547a, #80d0c7","#ff758c, #ff7eb3","#bdc3c7, #2c3e50","#ff5f6d, #ffc371","#eb3349, #f45c43","#56ab2f, #a8e063","#36d1dc, #5b86e5"];


var group;
var country;

function assignTeam(){
	$(".fbox").html("");
	
	for(var i=0; i<club.length; i++){   // refreshing selected team for unselecting
			club[i][3] = 0;
	}
	
	club = shuffleArray(club);
	colorID = shuffleArray(colorID);// Call shuffle to shuffle the teams
	
	group = new Array(8);    //Creating new empty team group of 8x4
	for(var i=0; i<group.length; i++){
		group[i] = new Array(4);
	}
	
	country = new Array(8);    //Creating new empty country group of 8x4
	for(var i=0; i<country.length; i++){
		country[i] = new Array(4);
	}
	
	var j=0;
	for(var i=0; i<club.length; i++){  //Initialize the group with domestic league champion // Now every group will have one team
		if(club[i][2]==1){
			group[j][0] = club[i][0];
			country[j][0] = club[i][1];
			club[i][3]=1;
			j++;
		}
	}
	
	for(var k=1; k<4; k++){      //  Fill all 8 group with other teams
		for(var j=0; j<group.length; j++){
			for(var i=0; i<club.length; i++){
				if(!country[j].includes(club[i][1])&&club[i][3]==0){  // Checking that group does not have team with same country
					group[j][k] = club[i][0];                         //  and not to be duplicate
					country[j][k] = club[i][1];
					club[i][3]=1;
					break;
				}
			}
		}
	}
	
	if(check()){              // Checking to all team be selected else retry
		console.log(country);
		console.log(group);
		addToPage();
	}else{
		assignTeam();
	}
}


function shuffleArray(array) {                       // suffle the teams
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));  
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
	
	return array;
}

function check(){   // Checking to all team be selected
	var temp = 0;
	for(var i=0; i<club.length; i++){
		if(club[i][3]==0)
			temp++;
	}
	
	if(temp!=0)
		return false;
	else
		return true;
}

function addToPage(){
	for(var i=0; i<group.length; i++){
		$(".fbox").append(`<div class="card">
					<button style="background-image: linear-gradient(to right, `+colorID[i]+`)" class="group">Group `+groupID[i]+`</button></br>
					<div class="team">
						<button >`+group[i][0]+` (`+country[i][0]+`)</button></br>
						<button >`+group[i][1]+` (`+country[i][1]+`)</button></br>
						<button >`+group[i][2]+` (`+country[i][2]+`)</button></br>
						<button >`+group[i][3]+` (`+country[i][3]+`)</button>
					</div>
				</div>`);
	}
	
}

assignTeam();



