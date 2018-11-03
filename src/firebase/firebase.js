import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//     description: 'Hockey',
//     note: 'january 2019',
//     amount: 125,
//     createdAt: 12345648
// });

// database.ref('notes/-LQ-NTd4URBXJI8FwYCV').update({
//     body: 'Yes'
// });

// database.ref('notes').push({title: 'To do', body: 'Go for a run'});

// const firebaseNotes = {
//     notes : {
//         12: {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         13: {
//             title: 'Second note',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: 12,
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: 13,
//     title: 'Second note',
//     body: 'This is my note'
// }]; 

//database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 3500);


// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);


// setTimeout(() => {
//     database.ref('age').set(32);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// database.ref().set({
//     name: 'Eero Sihvonen',
//     age: 38,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     stressLevel: 6,
//     location: {
//         city: 'Espoo',
//         country: 'Finland'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().update({ 
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Paris'
// });

// database.ref('age').set(38);
// database.ref('location/city').set('Helsinki');

// database.ref('attributes').set({
//     height: 182,
//     weight: 77
// }).then(() => {
//     console.log('Attributes data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().remove().then(() => {
//     console.log('Data removed succesfully');
// }).catch((e) => {
//     console.log('This failed', e);
// });