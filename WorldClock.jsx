import { css } from "uebersicht";

// Widget will refresh every one minute
export const refreshFrequency = 60 * 1000;

export const render = ({ output, error }) => {
  return error ? (
    <div>
      Something went wrong: <strong>{String(error)}</strong>
    </div>
  ) : (
    <div className={container}>
      <div className={leftItem}>
        <div className={time}>Today, +8HRS</div>
        <div className={city}>Hong Kong</div>
      </div>
      <div className={rightItem}>17:26</div>

      <div className={leftItem}>
        <div className={time}>Today, +8HRS</div>
        <div className={city}>Hong Kong</div>
      </div>
      <div className={rightItem}>17:26</div>

      <div className={leftItem}>
        <div className={time}>Today, +8HRS</div>
        <div className={city}>Hong Kong</div>
      </div>
      <div className={rightItem}>17:26</div>
    </div>
  );
};

const container = css`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: rgba(0, 0, 0, 0);
  font-family: Montserrat, sans-serif;
`;

const leftItem = css`
  grid-column-start: 1;
  grid-column-end: 3;
  color: white;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-style: solid none solid none;
  text-align: left;
`;

const rightItem = css`
  grid-column-start: 3;
  grid-column-end: 4;
  font-size: 50px;
  color: white;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-style: solid none solid none;
  text-align: right;
`;

const time = css`
  color: gray;
  font-size: 15px;
  padding: 0 0 5px 0;
`;

const city = css`
  font-size: 30px;
`;
