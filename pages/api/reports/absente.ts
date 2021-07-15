import { firebaseManager } from '../../../services/firebase.service'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function (req, res) {
  /*
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
  } */

  // console.log(req.body.form_response.answers.map(r => r))

  const getDescription = id => {
    return refMap.find(e => e.id === id).description
  }

  const refMap = [
    {
      id: '01F83TAC2W1Z0R8WJ2A6PVR9VR',
      description: 'fecha_inicio_ausentismo'
    }
  ]

  const raw = req.body

  await firebaseManager.getDB().collection('bucket').doc(raw.event_id).set(raw)

  const responses = raw.form_response.answers.map(v => {
    return { ...v, description: getDescription(v.field.ref) }
  })

  await firebaseManager
    .getDB()
    .collection('cases')
    .doc(req.body.event_id)
    .set({
      responses: [
        {
          eventDate: new Date(),
          creator: JSON.parse(
            Buffer.from(raw.form_response.hidden.token, 'base64').toString()
          ),
          responses
        }
      ],
      payload: req.body,
      status: 'OPEN',
      createdAt: new Date(),
      creator: JSON.parse(
        Buffer.from(raw.form_response.hidden.token, 'base64').toString()
      ),
      alumni: JSON.parse(
        Buffer.from(raw.form_response.hidden.alumni, 'base64').toString()
      )
    })
  res.send('done')
}
