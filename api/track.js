const micro = require('micro');
const { rastro } = require('rastrojs');
const url = require('url');

const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

module.exports = async (req, res) => {
  const { pathname } = url.parse(req.url);
  const code = req.query.code.toUpperCase();
  let result;

  try {
    [result] = await rastro.track(code);
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'Error when requesting to the Correios service' });
  }

  result.tracks = result.tracks.map(
    ({ locale, status, trackedAt, observation, ...rest }) => {
      const [city, state] = locale.split('/');
      const formattedCity = capitalize(city).trim();
      const formattedState = state.toUpperCase().trim();
      const formattedStatus = capitalize(status);
      const formattedTracked = trackedAt.toLocaleDateString('en-US');

      const formatedObservation = observation
        ? observation.replace(
            new RegExp(locale, `g`),
            `${formattedCity}/${formattedState}`,
          )
        : '';

      const [from, to] = formatedObservation
        .replace(`para`, `@para`)
        .split('@');

      const formattedFrom = capitalize(from);
      const formattedTo = capitalize(to);

      return {
        locale: {
          city: formattedCity,
          state: formattedState,
        },
        observation: {
          from: formattedFrom,
          to: formattedTo,
        },
        status: formattedStatus,
        trackedAt: formattedTracked,
        ...rest,
      };
    },
  );

  res.status(200).send({ ...result });
};
