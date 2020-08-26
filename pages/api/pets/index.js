import DB from '../../../database/db';
import enablePublicAccess from '@cors'

const allPets = async (request, response) => {
  try {

    await enablePublicAccess(request, response);

    const db = new DB();
    const allEntrie = await db.getAll();
    const length = allEntrie.length;

    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify({ length, data: allEntrie }));

  }catch(error) {
    console.error(error.message);
    response.statusCode = 500;
    response.end(JSON.stringify({ length: 0, data: [], error: 'Something went wrong' }));
  }
};

export default allPets;