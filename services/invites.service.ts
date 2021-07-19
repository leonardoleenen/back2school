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

    getInvite(id) {
        return firebaseManager
            .getDB()
            .collection('invites')
            .doc(id)
            .get()
            .then(doc => {
                return doc.data()
            })
    }
}

export const inviteService = new InviteService()
