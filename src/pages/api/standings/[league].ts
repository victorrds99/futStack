import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { Stadings } from '../../../util/types/stadings';

const standings = async (req: NextApiRequest, res: NextApiResponse) => {
  const { league } = req.query;
  const year = league === '71' ? new Date().getFullYear() : '2021';

  if (req.method === 'GET') {
    const { data } = await axios.get<Stadings>(`https://v3.football.api-sports.io/standings?league=${league}&season=${year}`, {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': String(process.env.NEXT_PUBLIC_API_KEY_FOOTBALL),
      },
    });

    return res.status(200).json(data);
  }

  res.setHeader('Allow', 'GET');
  return res.status(405).end('Method not allowed');
};

export default standings;
