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
    TableName : 'your-table-name',
  /* Item properties will depend on your application concerns */
  Item: {
     movie: '12345'
  }

}
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
    await docClient.put(params).promise();
    

    return {
        
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     },
     statusCode: 200,
     body: randomMovie
        
    };
};
