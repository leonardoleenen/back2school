import { firebaseManager } from './firebase.service'

class InviteService {
    getPendings() {
        return firebaseManager
            .getDB()
            .collection('invites')
            .where('status', '==', 'PENDING')
            .get()
            .then(snapShot => snapShot.docs.map(doc => doc.data()))
    }
}

export const inviteService = new InviteService()
