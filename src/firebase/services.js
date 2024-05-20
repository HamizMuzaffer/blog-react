import { app } from "../Config/Config";
import { collection, getFirestore, getDocs, getDoc,addDoc, doc, deleteDoc, db } from "firebase/firestore";
import { ref, getStorage, uploadBytes, getDownloadURL, } from "firebase/storage";

const db = getFirestore(app);
const storage = getStorage();
const storageRef = ref(storage, 'blogImages/')

export const addBlog = async() => {
    try {
        const storageRef = ref(storage, `blogImages/${file.name}`);
        const snapshot = await uploadBytes(storageRef, );
        const imageUrl = await getDownloadURL(snapshot.ref);
        const docRef = await addDoc(collection(db, "blogs"), {
          ...data
        });
        console.log("Document written with ID: ", docRef.id);
   } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export const getBlogs = async() => {
    try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));

        const blogData = querySnapshot.docs.map(doc => {
            return {
                id: doc.id, 
                ...doc.data() 
            };
        });
        return blogData;

    } catch (error) {
        console.error('Error getting documents: ', error);
    }
}

export const deleteBlog = async(id) => {
    const docRef = doc(db, "", id);
    await deleteDoc(docRef)
     .then(() => {

        console.log("Document successfully deleted!");
        window.location.reload();
      })
     .catch((error) => {
        console.error("Error removing document: ", error);
      });
 }

 export const updateBlog = async(id,updatedContent) => {
    try {
        const user = auth.currentUser;
    
        if (!user) {
          throw new Error("User is not authenticated");
        }
    
        // Reference to the blog post document
        const postRef = await getDoc(collection('blogs').doc(postId));
        const postDoc = await postRef.get();
    
        if (!postDoc.exists) {
          throw new Error("Blog post not found");
        }
    
        // Check if the current user is the author of the blog post
        const postData = postDoc.data();
        if (postData.authorId !== user.uid) {
          throw new Error("User is not authorized to update this blog post");
        }
    
        // Update the blog post
        await postRef.update({
          content: updatedContent,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    
        console.log("Blog post updated successfully");
      } catch (error) {
        console.error("Error updating blog post: ", error.message);
      }
}


