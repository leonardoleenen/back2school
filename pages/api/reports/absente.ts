import { firebaseManager } from '../../../services/firebase.service'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function (req, res) {
  const raw = req.body.form_response
  const absenteCase: AbsenteCase = {
    alumni: JSON.parse(Buffer.from(raw.hidden.alumni, 'base64').toString()),
    creator: JSON.parse(Buffer.from(raw.hidden.alumni, 'base64').toString())
      .user,
    landedAt: raw.landed_at,
    status: 'OPEN',
    category: 'HEALTH',
    priority: 'IMPORTANT',
    entries: [
      {
        eventId: req.body.event_id,
        eventPayload: req.body
      }
    ],
    absenteFrom: raw[0].date,
    absenteTo: raw[1].date
  }

  await firebaseManager
    .getDB()
    .collection('bucket')
    .doc(req.body.event_id)
    .set({
      ...absenteCase
    })
  res.send('done')
}
