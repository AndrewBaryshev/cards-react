import { FC } from "react";
import styles from "./cardComponent.module.css";
import { ICardComponent } from "./type";

export const CardComponent: FC<ICardComponent> = ({ data, image, id }) => {
  const handleOnClick = () => {
    console.log(id);
  };

  return (
    <div className={styles.container}>
      <img className={styles.imgClass} src={image} />
      <div className={styles.info}>
        <div className={styles.price}>
          <label className={styles.currentPrice}>1700</label>
          <label className={styles.oldPrice}>1700</label>
        </div>
        <div className={styles.description}>
          <p className={styles.dataText}>{data}</p>
        </div>
        <button onClick={() => handleOnClick()} className={styles.buttonCart}>
          В корзину
        </button>
      </div>
    </div>
  );
};
