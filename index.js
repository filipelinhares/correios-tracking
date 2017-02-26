const micro = require('micro')
const TrackingCorreios = require('tracking-correios')
const url = require('url')


module.exports = async function (req, res) {
  const { pathname } = url.parse(req.url)
  const code = pathname.replace('/', '').toUpperCase()

  return await TrackingCorreios.track(code)
}
