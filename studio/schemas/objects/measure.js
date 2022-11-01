export default {
  name: 'measure',
  title: 'Measure',
  type: 'object',
  fields: [
    {
      name: 'component',
      title: 'Component',
      type: 'reference',
      to: [{ type: 'component' }],
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'string',
    },
  ],
};
