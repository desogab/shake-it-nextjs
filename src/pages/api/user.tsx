import { NowRequest, NowResponse } from '@vercel/node';
import { connectToDatabase } from '../../utils/database';

export default async (request: NowRequest, response: NowResponse) => {
  const { username, email } = request.body;
  if (request.method === "POST") {
    const db = await connectToDatabase();

    const collection = db.collection('users');

    const findUser = await collection.findOne({ email: email })

    if (findUser) {
      return response.status(403).json({ status: `${email} Este e-mail já esta sendo utilizado, escolha outro.` });
    }
    const NewUser = await collection.insertOne({
      username,
      email,
      createdAt: new Date()
    })
    response.status(201).json({ NewUser });
  }
}