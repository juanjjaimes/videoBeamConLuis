import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, collection, addDoc, docData, doc, getDoc } from '@angular/fire/firestore';
import User from 'src/app/shared/Interfaces/User.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firestore: Firestore,
    private auth: Auth        
    ) { 

  }

  addUser(user: User){
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }

  register({email, password} :any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }

  async getUserByEmail(email: any){
    const userDocumentReference = doc(this.firestore, "users", email);
    const docSnap = await getDoc(userDocumentReference);
    console.log("docSnap", docSnap);
    console.log(docSnap.data());
  }
  
}
