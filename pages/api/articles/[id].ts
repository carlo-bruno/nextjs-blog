import { articles } from '../../../data';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse
) {
  const filtered = articles.filter((article) => article.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Article ${id} not found.` });
  }
}
