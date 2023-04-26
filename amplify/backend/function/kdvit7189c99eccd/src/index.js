/* Amplify Params - DO NOT EDIT
	AUTH_KDVIT7189309347D_USERPOOLID
	ENV
	REGION
	STORAGE_DYNAMOA49E1721_ARN
	STORAGE_DYNAMOA49E1721_NAME
	STORAGE_DYNAMOA49E1721_STREAMARN
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient()
const params ={
    TableName : 'movietitle-staging',
  /* Item properties will depend on your application concerns */
  Item: {
     movie: '12345'
  }

}
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const movies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "The Godfather Part II", "12 Angry Men", "Schindler's List", "The Lord of the Rings: The Return of the King", "Pulp Fiction", "The Lord of the Rings: The Fellowship of the Ring", "The Good, the Bad and the Ugly", "Forrest Gump", "Fight Club", "The Lord of the Rings: The Two Towers", "Inception", "Star Wars: Episode V - The Empire Strikes Back", "The Matrix", "Goodfellas", "One Flew Over the Cuckoo's Nest", "Se7en", "It's a Wonderful Life", "Seven Samurai", "The Silence of the Lambs", "Saving Private Ryan", "City of God", "Interstellar", "Life Is Beautiful", "The Green Mile", "Star Wars: Episode IV - A New Hope", "Terminator 2: Judgment Day", "Back to the Future", "Spirited Away", "The Pianist", "Psycho", "Parasite", "Léon: The Professional", "The Lion King", "Gladiator", "American History X", "The Departed", "Whiplash", "The Prestige", "The Usual Suspects", "Casablanca", "Grave of the Fireflies", "Harakiri", "The Intouchables", "Modern Times", "Once Upon a Time in the West", "Cinema Paradiso", "Rear Window", "Alien", "City Lights", "Apocalypse Now", "Memento", "Django Unchained", "Raiders of the Lost Ark", "WALL·E", "The Lives of Others", "Sunset Blvd.", "Paths of Glory", "The Shining", "The Great Dictator", "Avengers: Infinity War", "Witness for the Prosecution", "Aliens", "Spider-Man: Into the Spider-Verse", "American Beauty", "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "The Dark Knight Rises", "Oldboy", "Inglourious Basterds", "Amadeus", "Coco", "Toy Story", "Braveheart", "Joker", "Das Boot", "Avengers: Endgame", "Princess Mononoke", "Once Upon a Time in America", "Good Will Hunting", "Your Name.", "Singin' in the Rain", "3 Idiots", "Requiem for a Dream", "High and Low", "Toy Story 3", "Capernaum", "Star Wars: Episode VI - Return of the Jedi", "2001: A Space Odyssey", "Eternal Sunshine of the Spotless Mind", "Come and See", "Reservoir Dogs", "The Hunt", "Citizen Kane", "Lawrence of Arabia", "M", "Ikiru", "North by Northwest", "Vertigo", "The Apartment", "Amélie", "Double Indemnity", "A Clockwork Orange", "Full Metal Jacket", "Scarface", "Hamilton", "Incendies", "Heat", "To Kill a Mockingbird", "Up", "The Sting", "A Separation", "Metropolis", "L.A. Confidential", "Taxi Driver", "Die Hard", "Indiana Jones and the Last Crusade", "Snatch", "Bicycle Thieves", "Like Stars on Earth", 1917, "Top Gun: Maverick", "Downfall", "Dangal", "For a Few Dollars More", "Batman Begins", "The Kid", "Some Like It Hot", "The Father", "All About Eve", "The Wolf of Wall Street", "Green Book", "Judgment at Nuremberg", "Ran", "Casino", "The Truman Show", "There Will Be Blood", "Pan's Labyrinth", "Unforgiven", "The Sixth Sense", "Shutter Island", "A Beautiful Mind", "Jurassic Park", "Yojimbo", "The Treasure of the Sierra Madre", "Monty Python and the Holy Grail", "No Country for Old Men", "Kill Bill: Vol. 1", "The Great Escape", "Rashomon", "The Thing", "Finding Nemo", "Spider-Man: No Way Home", "The Elephant Man", "Chinatown", "Raging Bull", "V for Vendetta", "Gone with the Wind", "Lock, Stock and Two Smoking Barrels", "Dial M for Murder", "Inside Out", "Howl's Moving Castle", "The Secret in Their Eyes", "Three Billboards Outside Ebbing, Missouri", "Trainspotting", "The Bridge on the River Kwai", "Prisoners", "Warrior", "Fargo", "Gran Torino", "Catch Me If You Can", "My Neighbor Totoro", "Million Dollar Baby", "Children of Heaven", "John Wick: Chapter 4", "Blade Runner", "The Gold Rush", "Klaus", "Harry Potter and the Deathly Hallows: Part 2", "Before Sunrise", "12 Years a Slave", "Ben-Hur", "The Grand Budapest Hotel", "On the Waterfront", "Gone Girl", "Wild Strawberries", "The General", "Barry Lyndon", "In the Name of the Father", "The Deer Hunter", "The Third Man", "Hacksaw Ridge", "The Wages of Fear", "Memories of Murder", "Wild Tales", "Sherlock Jr.", "Mr. Smith Goes to Washington", "Mad Max: Fury Road", "Mary and Max", "The Seventh Seal", "How to Train Your Dragon", "Monsters Inc.", "Dead Poets Society", "Jaws", "Room", "The Big Lebowski", "Tokyo Story", "The Passion of Joan of Arc", "Ford v Ferrari", "Hotel Rwanda", "Rocky", "Ratatouille", "Platoon", "Spotlight", "Logan", "The Terminator", "Stand by Me", "Rush", "Network", "Before Sunset", "Into the Wild", "The Wizard of Oz", "The Best Years of Our Lives", "The Exorcist", "Groundhog Day", "The Incredibles", "To Be or Not to Be", "La haine", "Pirates of the Caribbean: The Curse of the Black Pearl", "Pather Panchali", "The Battle of Algiers", "Hachi: A Dog's Tale", "The Grapes of Wrath", "Jai Bhim", "My Father and My Son", "Amores Perros", "Rebecca", "The Handmaiden", "Cool Hand Luke", "The Sound of Music", "It Happened One Night", "The 400 Blows", "Persona", "Life of Brian", "The Iron Giant", "The Help", "Aladdin", "Dersu Uzala", "Dances with Wolves"];

    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    const params ={
        TableName : 'movietitle-staging',
      /* Item properties will depend on your application concerns */
      Item: {
         movie: randomMovie
      }
    
    }
    try {
    await docClient.put(params).promise();
    return { 
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        statusCode: 200,
        body: randomMovie
     }
  } catch (err) {
    
    return { error: err }
  }
    

    // return {
        
    // // //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    //  statusCode: 200,
    //  body: randomMovie
        
    // // };
};
