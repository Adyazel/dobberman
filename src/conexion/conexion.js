import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDoc, doc, query, where, getDocs, updateDoc} from 'firebase/firestore';
import bcrypt from 'bcryptjs';


const firebaseConfig = {
  apiKey: "AIzaSyC_n6dOa_JEZfEZM875JYzsTeTkOxN8kgs",
  authDomain: "dobermann-a2acb.firebaseapp.com",
  projectId: "dobermann-a2acb",
  storageBucket: "dobermann-a2acb.appspot.com",
  messagingSenderId: "903452941941",
  appId: "1:903452941941:web:91b6cb2fbc8880b914223c"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addUser(nombre, correo, pass, pregunta, respuesta) {
  if (nombre === "" || correo === "" || pass === "") {
    console.log("Error: datos incompletos");
  } else {
    const passHash = await bcrypt.hash(pass, 10);  // 10 es el número de rondas para generar el salt
    await addDoc(collection(db, "Users"), {
      correo: correo,
      nombre: nombre,
      pass: passHash,
      role: "Cliente",
      estado: "",
      skills:"",
      pregunta: pregunta,
      respuesta: respuesta
    });
  }
}

export async function getWorks(){

const docSnap = await getDocs(collection(db, "works"));
let worksre = [];
 docSnap.forEach((doc) => {
    worksre.push(doc.data()); 
  });  
  return(worksre);
}; 

async function getUser(correo, passIn) {
  const q = query(collection(db, "Users"), where("correo", "==", correo));
  const docUser = await getDocs(q);

  if (!docUser.empty) {
    let user = docUser.docs[0].data(); // Suponiendo que el correo es único y siempre devuelve 1 documento
    const match = await bcrypt.compare(passIn, user.pass);
    if (match) {
      // Autenticación correcta
      return { success: true, user: user };
    } else {
      // Contraseña incorrecta
      return { success: false, error: "Contraseña incorrecta" };
    }
  } else {
    // Usuario no encontrado
    return { success: false, error: "Usuario no encontrado" };
  }
}

async function getPregunta(correo) {
  const q = query(collection(db, "Users"), where("correo", "==", correo));
  const docUser = await getDocs(q);

  if (!docUser.empty) {
    let user = docUser.docs[0].data(); // Suponiendo que el correo es único y siempre devuelve 1 documento

      return (user.pregunta);

}
};
async function getRes(correo) {
  const q = query(collection(db, "Users"), where("correo", "==", correo));
  const docUser = await getDocs(q);

  if (!docUser.empty) {
    let user = docUser.docs[0].data(); // Suponiendo que el correo es único y siempre devuelve 1 documento

      return (user.respuesta);

}
};


async function updateUser(correo, newpass) {
  const q = query(collection(db, "Users"), where("correo", "==", correo));
  const docUser = await getDocs(q);

  if (!docUser.empty) {
    const userDoc = docUser.docs[0]; // Obtenemos el documento del usuario
    const userRef = doc(db, "Users", userDoc.id); // Referencia al documento con el ID correcto

    const newPassHash = await bcrypt.hash(newpass, 10);  // Encripta la nueva contraseña

    try {
      await updateDoc(userRef, { pass: newPassHash });
      console.log("Usuario actualizado con éxito");
      return { success: true, message: "Contraseña actualizada correctamente" };
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      return { success: false, error: "Error al actualizar el usuario" };
    }
  } else {
    console.log("Usuario no encontrado con ese correo");
    return { success: false, error: "Usuario no encontrado" };
  }
}

async function updatePerfil(correo,nombre, newcorreo, estado, skills) {
  const q = query(collection(db, "Users"), where("correo", "==", correo));
  const docUser = await getDocs(q);

  if (!docUser.empty) {
    const userDoc = docUser.docs[0]; // Obtenemos el documento del usuario
    const userRef = doc(db, "Users", userDoc.id); // Referencia al documento con el ID correcto

    try {
      await updateDoc(userRef, { nombre: nombre, correo: newcorreo, estado:estado, skills:skills });
      console.log("Usuario actualizado con éxito");

      const qu = query(collection(db, "Users"), where("correo", "==", newcorreo));
      const docNewUser = await getDocs(qu);
      const userNewDoc = docNewUser.docs[0].data();
      return { success: true, message: "Datos Actualizados",user: userNewDoc };
      
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      return { success: false, error: "Error al actualizar el usuario" };
    }
  } else {
    console.log("Usuario no encontrado con ese correo");
    return { success: false, error: "Usuario no encontrado" };
  }
}

 export const crud = {
    addUser,
    getUser,
    getPregunta,
    getRes,
    updateUser,
    updatePerfil
};