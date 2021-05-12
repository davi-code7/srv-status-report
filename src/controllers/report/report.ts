// import OrchyBase from 'orchy-base-code7';
// import SnsSqsSlq from 'sns-sqs-slq-code7';

// const orchybase = new OrchyBase(false);
// const snsSqs = new SnsSqsSlq();

export async function flowStatus(req, res) {
  try {
    if (process.env.NODE_ENV === 'development') {
      return res.status(200).send({ ok: true });
    }
    if (
      process.env.NODE_ENV === 'staging'
      || process.env.NODE_ENV === 'production'
    ) {
      return res.status(200).send({ ok: true });
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}
