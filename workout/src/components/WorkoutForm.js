import React from "react";
import { useForm } from "react-hook-form";

const WorkoutForm = ({ onFormSubmit }) => {
  const { register, watch, errors, handleSubmit } = useForm();

  const watchWorkout = watch("workout", "A");

  const onSubmit = onFormSubmit;

  return (
    <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label>Select Workout</label>
        <select className="ui dropdown" name="workout" ref={register}>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </div>

      {watchWorkout === "A" && (
        <>
          <div className="field">
            <label>Bench Press</label>
            <div className="two fields">
              <div className="twelve wide field">
                <input
                  type="text"
                  name="benchWeight"
                  placeholder="Weight"
                  ref={register({ required: true, maxLength: 3 })}
                />
                {errors.benchWeight?.type === "required" &&
                  "Please enter a weight for the Bench Press"}
              </div>

              <div className="four wide field">
                <input
                  type="text"
                  name="benchReps"
                  placeholder="AMRAP"
                  ref={register({ required: true, maxLength: 3 })}
                />
              </div>
            </div>
          </div>

          <div className="field">
            <label>Row</label>
            <div className="two fields">
              <div className="twelve wide field">
                <input
                  type="text"
                  name="rowWeight"
                  placeholder="Weight"
                  ref={register({ required: true, maxLength: 3 })}
                />
                {errors.rowWeight?.type === "required" &&
                  "Please enter a weight for the Bench Press"}
              </div>

              <div className="four wide field">
                <input
                  type="text"
                  name="rowReps"
                  placeholder="AMRAP"
                  ref={register({ required: true, maxLength: 3 })}
                />
              </div>
            </div>
          </div>

          <div className="field">
            <label>Squat</label>
            <div className="two fields">
              <div className="twelve wide field">
                <input
                  type="text"
                  name="squatWeight"
                  placeholder="Weight"
                  ref={register({ required: true, maxLength: 3 })}
                />
                {errors.squatWeight?.type === "required" &&
                  "Please enter a weight for the Bench Press"}
              </div>

              <div className="four wide field">
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
          <div className="field">
            <label>Overhead Press</label>
            <div className="two fields">
              <div className="twelve wide field">
                <input
                  type="text"
                  name="overheadWeight"
                  placeholder="Weight"
                  ref={register({ required: true, maxLength: 3 })}
                />
                {errors.overheadWeight?.type === "required" &&
                  "Please enter a weight for the Overhead Press"}
              </div>

              <div className="four wide field">
                <input
                  type="text"
                  name="overheadReps"
                  placeholder="AMRAP"
                  ref={register({ required: true, maxLength: 3 })}
                />
              </div>
            </div>
          </div>

          <div className="field">
            <label>Pullup</label>
            <div className="two fields">
              <div className="twelve wide field">
                <input
                  type="text"
                  name="pullupWeight"
                  placeholder="Weight"
                  ref={register({ required: true, maxLength: 3 })}
                />
                {errors.pullupWeight?.type === "required" &&
                  "Please enter a weight for the Bench Press"}
              </div>

              <div className="four wide field">
                <input
                  type="text"
                  name="pullupReps"
                  placeholder="AMRAP"
                  ref={register({ required: true, maxLength: 3 })}
                />
              </div>
            </div>
          </div>

          <div className="field">
            <label>Deadlift</label>
            <div className="two fields">
              <div className="twelve wide field">
                <input
                  type="text"
                  name="deadliftWeight"
                  placeholder="Weight"
                  ref={register({ required: true, maxLength: 3 })}
                />
                {errors.deadliftWeight?.type === "required" &&
                  "Please enter a weight for the Bench Press"}
              </div>

              <div className="four wide field">
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
