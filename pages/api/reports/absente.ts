import { firebaseManager } from '../../../services/firebase.service'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function (req, res) {
  await firebaseManager
    .getDB()
    .collection('bucket')
    .doc(req.body.event_id)
    .set({
      ...req.body
    })
  res.send('done')
}
