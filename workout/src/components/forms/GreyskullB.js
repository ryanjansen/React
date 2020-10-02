import React from "react";

const GreyskullB = ({ register, errors }) => {
  return (
    <>
      <div
        className={`field ${
          errors.overheadWeight || errors.overheadReps ? "error" : ""
        }  `}
      >
        <label>Overhead Press</label>
        <div className="two fields">
          <div className="eight wide field">
            <div className="ui right labeled input">
              <input
                type="number"
                name="overheadWeight"
                placeholder="Weight"
                ref={register({ required: true, maxLength: 3 })}
              />
              <div className="ui basic label">kg</div>
            </div>
          </div>

          <div className="eight wide field">
            <input
              type="number"
              name="overheadReps"
              placeholder="AMRAP"
              ref={register({ required: true, maxLength: 3 })}
            />
          </div>
        </div>
      </div>

      <div
        className={`field ${
          errors.pullupWeight || errors.pullupReps ? "error" : ""
        }  `}
      >
        <label>Pullup</label>
        <div className="two fields">
          <div className="eight wide field">
            <div className="ui right labeled input">
              <input
                type="number"
                name="pullupWeight"
                placeholder="Weight"
                ref={register({ required: true, maxLength: 3 })}
              />
              <div className="ui basic label">kg</div>
            </div>
          </div>

          <div className="eight wide field">
            <input
              type="number"
              name="pullupReps"
              placeholder="AMRAP"
              ref={register({ required: true, maxLength: 3 })}
            />
          </div>
        </div>
      </div>

      <div
        className={`field ${
          errors.deadliftWeight || errors.deadliftReps ? "error" : ""
        }  `}
      >
        <label>Deadlift</label>
        <div className="two fields">
          <div className="eight wide field">
            <div className="ui right labeled input">
              <input
                type="number"
                name="deadliftWeight"
                placeholder="Weight"
                ref={register({ required: true, maxLength: 3 })}
              />
              <div className="ui basic label">kg</div>
            </div>
          </div>

          <div className="eight wide field">
            <input
              type="number"
              name="deadliftReps"
              placeholder="AMRAP"
              ref={register({ required: true, maxLength: 3 })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GreyskullB;
