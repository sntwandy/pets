import DB from '../../../database/db';

const Pet = async(request, response) => {
  const db = new DB();

  const urlReq = request.url;
  const arrayId = urlReq.split('/');
  const id = arrayId[arrayId.length - 1];

  const pet = await db.getById(id);

  response.statusCode = 200;
  response.setHeader('Content-type', 'application/json');
  response.end(JSON.stringify(pet));
};

export default Pet;