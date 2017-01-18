const micro = require('micro')
const TrackingCorreios = require('tracking-correios')
const url = require('url')


module.exports = function (req, res) {
  const { pathname } = url.parse(req.url)
  const code = pathname.replace('/', '').toUpperCase()

  return TrackingCorreios.track( code )
    .then(function (data) {
      return data;
    })
}
