import React from 'react';
import './css/AccessibilityStatement.css';

const AccessibilityStatement = () => {
  return (
    <div className="accessibility-container">
      <h1 className="accessibility-title">Accessibility Statement</h1>

      <p className="accessibility-paragraph">
        At Rebol Cabs, we are committed to providing a website that is
        accessible to everyone. We strive to ensure that our website is
        usable by people with disabilities and adheres to industry best
        practices.
      </p>

      <h2 className="accessibility-subtitle">Accessibility Features</h2>
      <ul className="accessibility-list">
        <li className="accessibility-list-item">
          <b>Keyboard Navigation:</b> Our website is fully navigable using a
          keyboard. You can use the Tab key to move between interactive
          elements.
        </li>
        <li className="accessibility-list-item">
          <b>Screen Reader Compatibility:</b> We have ensured that our
          website is compatible with popular screen readers, such as JAWS
          and NVDA.
        </li>
        <li className="accessibility-list-item">
          <b>Contrast Ratio:</b> We have implemented a sufficient contrast
          ratio between text and background colors to improve readability
          for users with visual impairments.
        </li>
        <li className="accessibility-list-item">
          <b>Alternative Text for Images:</b> All images on our website
          have descriptive alternative text (alt text) to provide context
          for screen readers.
        </li>
        <li className="accessibility-list-item">
          <b>Heading Structure:</b> We use appropriate heading elements
          (H1, H2, H3, etc.) to create a clear structure and hierarchy for
          the content.
        </li>
        <li className="accessibility-list-item">
          <b>Form Accessibility:</b> Forms on our website are designed
          with accessibility in mind, using clear labels and instructions.
        </li>
      </ul>

      <h2 className="accessibility-subtitle">Ongoing Efforts</h2>
      <p className="accessibility-paragraph">
        We are continuously working to improve the accessibility of our
        website. We are committed to:
      </p>
      <ul className="accessibility-list">
        <li className="accessibility-list-item">
          Regularly reviewing and updating our website to ensure
          compliance with the latest accessibility standards.
        </li>
        <li className="accessibility-list-item">
          Providing training to our team on web accessibility best
          practices.
        </li>
        <li className="accessibility-list-item">
          Using assistive technology to test and improve the accessibility
          of our website.
        </li>
      </ul>

      <h2 className="accessibility-subtitle">Feedback</h2>
      <p className="accessibility-paragraph">
        We welcome feedback on the accessibility of our website. If you
        encounter any accessibility issues or have suggestions for
        improvement, please contact us at [email protected]
      </p>
    </div>
  );
};

export default AccessibilityStatement;
