// /api/transform/:type?word=
// type - lower | upper

const allowedTransformTypes = ['lower', 'upper'];

export default function handler(req, res) {
  const { type: transformType, word } = req.query;

  if (!word) return res.status(400).json({ error: 'Word should not be empty' });

  if (!allowedTransformTypes.includes(transformType)) {
    return res.status(400).json({ error: 'Not allowed transform type' });
  }

  const transformed = transformType === 'lower' ? word.toLowerCase() : word.toUpperCase();
  return res.status(200).json({ result: transformed });
}
