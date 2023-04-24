/* Amplify Params - DO NOT EDIT
	AUTH_KDVIT7189309347D_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const movies = [
        "The Godfather",
        "The Shawshank Redemption",
        "The Dark Knight",
        "Forrest Gump",
        "The Matrix",
        "Pulp Fiction",
        "The Silence of the Lambs",
        "Star Wars: Episode IV - A New Hope",
        "The Lord of the Rings: The Fellowship of the Ring",
        "Fight Club"
    ];

    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    return {
        statusCode: 200,
        
    
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     },
     body: randomMovie
        
    };
};
