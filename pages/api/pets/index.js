import DB from '../../../database/db';

const allPets = async (request, response) => {
  const db = new DB();
  const allEntrie = await db.getAll();
  const length = allEntrie.length;
  console.log(request.url);

  response.statusCode = 200;
  response.setHeader('Content-type', 'application/json');
  response.end(JSON.stringify({ length, data: allEntrie }));
};

export default allPets;