/**
 * Created by iampamungkas on 6/12/17.
 */
class FireService {
    rootRef = fireinit.database.ref()
    getAttractions= function () {
        let attractions = [{}];
        let childRef = this.rootRef.child("/attractions");
        childRef.once("value")
            .then(function (snapshot) {
                attractions = snapshot.key;
            });
        return attractions;
    }
}
export default FireService;