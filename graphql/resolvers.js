const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const buildQuery = args => {
  const { categories, city, state, zip } = args
  const doCategoriesExist = categories && categories.length > 0
  const categoryList = `{${categories.join()}}`

  let query = 'SELECT * FROM donation_centers'
  if (doCategoriesExist) query += ` WHERE categories && '${categoryList}'`
  if (city) query += ` AND city = '${city}'`
  if (state) query += ` AND state = '${state}'`
  if (zip) query += ` AND zip = '${zip}'`
  
  return query
}

module.exports = {
  Query: {
    donationCenters: async (parent, args, context, info) => {
      const query = buildQuery(args)
      const donationCentersFromDb = await prisma.$queryRaw(query)
      return donationCentersFromDb
    },
  },
}
