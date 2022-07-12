import { getDoc, doc } from "@firebase/firestore";
import { GetServerSideProps } from "next";
import { database } from "../../config/firebase";


export const getServerSideProps = async (ctx) => {
  const docRef = doc(database, "schools", ctx.query.id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data()
  console.log(data)
  if (!data) return { notFound: true };
  return { props: { data } };
};

const Post = ({data}) => {
  if (!data) {
    return "Loading...";
  }

  return (
    <div>
      <p>Title: {data.title}</p>
    </div>
  );
}

export default Post;