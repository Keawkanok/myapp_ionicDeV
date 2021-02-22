import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class crudapi {

    constructor(private fb: AngularFirestore) {}



    //CRUD
    //read
    readData(){
        return this.fb.collection('country').snapshotChanges();
    }

    delData(docId: any){
        // return this.fb.collection('country').snapshotChanges();
        return this.fb.doc('country/'+ docId).delete();
    }

    createData(docId: any){
        return this.fb.collection('country').add(docId);
    }

    updateData(recordID, record){
        // const update =  this.fb.doc('country/' + recordID).update(record);
        // console.log(update, "update");
        // console.log(recordID, "recordID");
        // console.log(record, "record");

       return this.fb.doc('country/' + recordID).update(record);

    }
}