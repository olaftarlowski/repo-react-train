import styles from "./PokeSingleItem.module.css";

const PokeSingleItem = (props) => {
  const data = props.pokeData;

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.dexWing} ${styles.left}`}>
        <div className={styles.leftOverlay}>
          <div className={styles.leftDisplay}>
            <div className={`${styles.top} ${styles.leftDisplayPart}`}>
              <div className={styles.topContent}>
                <div className={styles.buttonGlass}>
                  <div className={styles.reflect}></div>
                </div>
                <div className={`${styles.miniGlass} ${styles.red}`}></div>
                <div className={`${styles.miniGlass} ${styles.yellow}`}></div>
                <div className={`${styles.miniGlass} ${styles.green}`}></div>
              </div>
            </div>
            <div className={`${styles.mid} ${styles.leftDisplayPart}`}>
              <div className={styles.midScreen}>
                <div className={styles.topDots}>
                  <div className={styles.dotItem}></div>
                  <div className={styles.dotItem}></div>
                </div>
                <div className={styles.midDisplay}>
                  <img
                    src={data.sprites.front_default}
                    alt={`Pokemon ${data.name}`}
                  />
                </div>
                <div className={styles.botItems}>
                  <div className={styles.dotItemBig}></div>
                  <div className={styles.speakers}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.bot} ${styles.leftDisplayPart}`}>
              <div className={styles.dotBlue}></div>

              <div className={styles.cross}>
                <div className={`${styles.topRow} ${styles.crossRow}`}>
                  <div className={`${styles.topcross} ${styles.crossBtn}`}>
                    <div className={styles.upT}></div>
                  </div>
                </div>
                <div className={`${styles.midRow} ${styles.crossRow}`}>
                  <div className={`${styles.leftcross} ${styles.crossBtn}`}>
                    <div className={styles.leftT}></div>
                  </div>
                  <div className={`${styles.midcross} ${styles.crossBtn}`}>
                    <div className={styles.midCircle}></div>
                  </div>
                  <div className={`${styles.rightcross} ${styles.crossBtn}`}>
                    <div className={styles.rightT}></div>
                  </div>
                </div>
                <div className={`${styles.borRow} ${styles.crossRow}`}>
                  <div className={`${styles.botcross} ${styles.crossBtn}`}>
                    <div className={styles.downT}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.junction}>
            <div className={styles.junctionItem}></div>
            <div className={styles.junctionItem}></div>
          </div>
        </div>
      </div>
      <div className={`${styles.right} ${styles.dexWing}`}>
        <div className={styles.rightOverlay}>
          <div className={styles.dataDisplay}>
            <div>
              <span>#{data.id}</span>
              <h2>{data.name}</h2>
            </div>
            <div>
              <span>height:</span> <p>{data.height}"</p>
            </div>
            <div>
              <span>weight:</span> <p>{data.weight} lbs.</p>
            </div>
            <div>
              <span>types:</span>{" "}
              <div>
                {data.types.map((item) => {
                  return (
                    <p className={styles.displayTypes} key={item.type.name}>
                      {" "}
                      {item.type.name}{" "}
                    </p>
                  );
                })}
              </div>
            </div>
            <p>
              <span>moves:</span> <br></br>
              {data.moves.map((item) => {
                return (
                  <span className={styles.displayTypes} key={item.move.name}>
                    {" "}
                    {item.move.name}
                  </span>
                );
              })}
            </p>
          </div>
          <div className={styles.botButtons}>
            <div className={styles.buttonsSet}>
              <div className={styles.setRow}>
                <div className={styles.buttonBlue}></div>
                <div className={styles.buttonBlue}></div>
                <div className={styles.buttonBlue}></div>
              </div>
              <div className={styles.setRow}>
                <div className={styles.buttonBlue}></div>
                <div className={styles.buttonBlue}></div>
                <div className={styles.buttonBlue}></div>
              </div>
            </div>
            <div className={styles.buttonYellow}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeSingleItem;
