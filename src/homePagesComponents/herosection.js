import { useState } from "react";

function Herosection() {
  return (
    <div className="heroSection-container">
      <div className="heroSection-card ">
        <p className="herosection-heading">Welcome to Scrum Peer </p>
        <p>
          At <strong>Scrum Peer</strong> we believe that learning should never
          stop because of confusion, fear, or lack of guidance.
          <strong>
            We have built a platform where students connect instantly with subject
            experts, transforming doubt into understanding, and stress into
            confidence.
          </strong>
        </p>
        <p>
          Learning does not need to wait for the next class or expensive tutoring
          sessions.
          <strong>With Scrum Peer, help is just a few clicks away.</strong>
          Whether its a last-minute concept before an exam, a tricky coding
          problem, or a challenging math formula — our community of mentors is
          always ready to help.
        </p>
      </div>
      <div className="heroSection-card">
        <img src="/images/heroImage-1.webp" alt="Hero" />
      </div>
      <div className="heroSection-card">
        <img src="/images/heroImage-2.jpg"></img>
      </div>
      <div className="heroSection-card">
        <div className="herosection-heading"> Why Choose Scrum Peer?</div>
        <p>
          Because we are not just a tutoring platform - we are a learning
          movement.
        </p>
        <p>We connect learners and educators in a way that: </p>
        <ul>
          <li>
            <strong>Fast </strong> Find tutors instantly, no waiting lists.
          </li>
          <li>
            <strong>Flexible </strong> Learn anytime, anywhere.
          </li>
          <li>
            <strong>Personalized </strong>
            Match with the right mentor based on your subject and learning
            needs.
          </li>
          <li>
            <strong>Collaborative  </strong>Learn through real conversations,
            not one-way lectures.
          </li>
        </ul>
      </div>
      <div className="heroSection-card">
        <div className="herosection-heading">🔍 How It Works</div>

        <ol>
          <li>
            <strong>Sign Up</strong> as a Student or Tutor.
          </li>
          <li>
            <strong>Flexible </strong> Learn anytime, anywhere.
          </li>
          <li>
            <strong>Search for a Subject</strong> you want to learn or teach
          </li>
          <li>
            <strong>View Available Mentors or Learners</strong>
            with their preferred time slots.
          </li>
          <li>
            <strong>Send a Request — </strong>
            if accepted, you are connected instantly for a live chat session.
          </li>
        </ol>
        <p>
          It is simple, quick, and effective — just the way modern learning
          should be.
        </p>
      </div>
      <div className="heroSection-card">
        <img src="/images/heroImage3.jpg"></img>
      </div>
      <div className="navbar-footer">
        <div className="herosection-heading">
          🎓 Join the Learning Revolution
        </div>
        <p>
          Whether you’re a student seeking clarity, a tutor sharing knowledge,
          or a parent supporting your child’s success — Scrum Peer is here to
          make learning a shared experience. Scrum Peer — Where curiosity meets
          connection.
        </p>
      </div>
    </div>
  );
}

export default Herosection;
