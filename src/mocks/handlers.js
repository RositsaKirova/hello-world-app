import { rest } from 'msw';

export const handlers = [
  rest.get('/tableData', (req, res, ctx) => {
     return res(
       ctx.status(200),
       ctx.json([
             { division: 1, player: 6, age: 19},
             { division: 1, player: 7, age: 26},
             { division: 2, player: 8, age: 18},
         ]),
     )
  }),
]