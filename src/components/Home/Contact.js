import React from "react";
import Title from "../Globals/Title";

export default function Contact() {
  return(
    <section className="py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action=""
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="john smith"
              />
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
};