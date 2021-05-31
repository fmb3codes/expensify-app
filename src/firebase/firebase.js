import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//   });

// const onValueChange = database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
// }, (e) => {
//   console.log("Error with data fetching", e);
// });

// database.ref("expenses").push({
//   description: "testing",
//   note: "asdfjs",
//   amount: 0,
//   createdAt: 0
// });


// database.ref("expenses").push({
//   description: "testing2",
//   note: "asdfjs",
//   amount: 0,
//   createdAt: 0
// });


// database.ref("expenses").push({
//   description: "testing3",
//   note: "asdfjs",
//   amount: 0,
//   createdAt: 0
// });



// database.ref("notes/-MaZsNXmrOR4cKnrLVV7").remove();

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React"
// });

// const firebaseNotes = {
//   notes: {
//     apoid: {
//       title: "First note!",
//       body: "This is my note"
//     },
//     apoidsdf: {
//       title: "Another note!",
//       body: "This is my note"
//     }
//   }
// };

// const notes = [{
//   id: "12",
//   title: "First note",
//   body: "This is my note"
// }, {
//   id: "761",
//   title: "Another note",
//   body: "This is my note"
// }];

// database.ref("notes").set(notes);
// const onValueChange = database.ref().on("value", (snapshot) => {
//   console.log(snapshot);
// }, (e) => {
//   console.log("Error with data fetching", e);
// });

// setTimeout(() => {
//   database.ref("age").set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// const onDataChange = database.ref().on("value", (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//   }, (e) => {
//     console.log("Error with data fetching", e);
//   });


// database.ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });


// database.ref().set({
//     name: "Frankie",
//     age: 26,
//     stressLevel: 5,
//     job: {
//       title: "Software Developer",
//       company: "Yeah Right Inc"
//     },
//     isHuman: true,
//     location: {
//         city: "Phoenix",
//         country: "United States"
//     }
// }).then(() => {
//     console.log("Data is saved");
// }).catch((e) => {
//     console.log("This failed", e);
// });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database.ref("isHuman").set(null);

// database.ref("isHuman")
//     .remove()
//     .then(() => {
//         console.log("Data was removed");
//     }).catch((e) => {
//         console.log("Did not remove data");
//     });