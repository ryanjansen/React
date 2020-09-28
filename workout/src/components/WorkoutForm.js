import React from "react";
import { useForm } from "react-hook-form";

const WorkoutForm = ({ onFormSubmit }) => {
  const { register, watch, errors, handleSubmit } = useForm();

  const watchWorkout = watch("workout", "A");

  const onSubmit = onFormSubmit;

  let today = new Date().toISOString().slice(0, 10);

  return (
    <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
      <div className={`field ${errors.date ? "error" : ""}  `}>
        <label>Date</label>
        <input type="date" name="date" ref={register} defaultValue={today} />
      </div>
      <div className="field">
        <label>Select Workout</label>
        <select className="ui dropdown" name="workout" ref={register}>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </div>

      {watchWorkout === "A" && (
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
                    type="text"
                    name="benchWeight"
                    placeholder="Weight"
                    ref={register({ required: true, maxLength: 3 })}
                  />
                  <div className="ui basic label">kg</div>
                </div>
              </div>

              <div className="eight wide field">
                <input
                  type="text"
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
                    type="text"
                    name="rowWeight"
                    placeholder="Weight"
                    ref={register({ required: true, maxLength: 3 })}
                  />
                  <div className="ui basic label">kg</div>
                </div>
              </div>

              <div className="eight wide field">
                <input
                  type="text"
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
                    type="text"
                    name="squatWeight"
                    placeholder="Weight"
                    ref={register({ required: true, maxLength: 3 })}
                  />
                  <div className="ui basic label">kg</div>
                </div>
              </div>

              <div className="eight wide field">
                <input
                  type="text"
                  name="squatReps"
                  placeholder="AMRAP"
                  ref={register({ required: true, maxLength: 3 })}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {watchWorkout === "B" && (
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
                    type="text"
                    name="overheadWeight"
                    placeholder="Weight"
                    ref={register({ required: true, maxLength: 3 })}
                  />
                  <div className="ui basic label">kg</div>
                </div>
              </div>

              <div className="eight wide field">
                <input
                  type="text"
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
                    type="text"
                    name="pullupWeight"
                    placeholder="Weight"
                    ref={register({ required: true, maxLength: 3 })}
                  />
                  <div className="ui basic label">kg</div>
                </div>
              </div>

              <div className="eight wide field">
                <input
                  type="text"
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
                    type="text"
                    name="deadliftWeight"
                    placeholder="Weight"
                    ref={register({ required: true, maxLength: 3 })}
                  />
                  <div className="ui basic label">kg</div>
                </div>
              </div>

              <div className="eight wide field">
                <input
                  type="text"
                  name="deadliftReps"
                  placeholder="AMRAP"
                  ref={register({ required: true, maxLength: 3 })}
                />
              </div>
            </div>
          </div>
        </>
      )}

      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default WorkoutForm;
