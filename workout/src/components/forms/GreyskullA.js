import React from "react";

const GreyskullA = ({ register, errors }) => {
  return (
    <>
      <div
        className={`field ${
          errors.benchWeight || errors.benchReps ? "error" : ""
        }  `}
      >
        <label>Bench Press</label>
        <div className="two fields">
          <div className="eight wide field">
            <div className="ui right labeled input">
              {" "}
              <input
                type="number"
                name="benchWeight"
                placeholder="Weight"
                ref={register({ required: true, maxLength: 3 })}
              />
              <div className="ui basic label">kg</div>
            </div>
          </div>

          <div className="eight wide field">
            <input
              type="number"
              name="benchReps"
              placeholder="AMRAP"
              ref={register({ required: true, maxLength: 3 })}
            />
          </div>
        </div>
      </div>

      <div
        className={`field ${
          errors.rowWeight || errors.rowReps ? "error" : ""
        }  `}
      >
        <label>Row</label>
        <div className="two fields">
          <div className="eight wide field">
            <div className="ui right labeled input">
              {" "}
              <input
                type="number"
                name="rowWeight"
                placeholder="Weight"
                ref={register({ required: true, maxLength: 3 })}
              />
              <div className="ui basic label">kg</div>
            </div>
          </div>

          <div className="eight wide field">
            <input
              type="number"
              name="rowReps"
              placeholder="AMRAP"
              ref={register({ required: true, maxLength: 3 })}
            />
          </div>
        </div>
      </div>

      <div
        className={`field ${
          errors.squatWeight || errors.squatReps ? "error" : ""
        }  `}
      >
        <label>Squat</label>
        <div className="two fields">
          <div className="eight wide field">
            <div className="ui right labeled input">
              <input
                type="number"
                name="squatWeight"
                placeholder="Weight"
                ref={register({ required: true, maxLength: 3 })}
              />
              <div className="ui basic label">kg</div>
            </div>
          </div>

          <div className="eight wide field">
            <input
              type="number"
              name="squatReps"
              placeholder="AMRAP"
              ref={register({ required: true, maxLength: 3 })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GreyskullA;
