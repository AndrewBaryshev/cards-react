import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Circles } from "react-loader-spinner";
import styles from "./cardsPage.module.css";
import fetchData from "../../store/fetchData";
import { CardComponent } from "..";
import { IElem } from "./type";

export const CardsPage = observer(() => {
  useEffect(() => {
    fetchData.getDataPosts(
      "https://jsonplaceholder.typicode.com/posts?_limit=6"
    );
    fetchData.getDataImages(
      "https://api.unsplash.com/photos/random?client_id=gIjpwbSIgA1o8USCv5GNTL85XA6LRPK-qUOGONyP6Qc&count=6"
    );
  }, []);

  return (
    <div className={styles.container}>
      {fetchData.data.length && fetchData.images.length ? (
        fetchData.data.map((elem: IElem) => (
          <CardComponent
            key={elem.id}
            data={elem.title}
            image={fetchData.images[elem.id - 1]}
            id={elem.id}
          />
        ))
      ) : (
        <Circles
          height="140"
          width="140"
          color="#E8E4F2"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
    </div>
  );
});
