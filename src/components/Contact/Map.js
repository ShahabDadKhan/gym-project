/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Map = () => (
  <div css={styles} className="mapouter">
    <iframe
      id="gmap_canvas"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.0533228648046!2d79.01476296964412!3d28.802717098473252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390af3d6286e9d35%3A0x952ce80a8e91d333!2sFitness%20Vision%20Academy!5e0!3m2!1sen!2sin!4v1724579237055!5m2!1sen!2sin"
      // src="https://maps.google.com/maps?q=Av.%20L%C3%BAcio%20Costa&t=&z=13&ie=UTF8&iwloc=&output=embed"
    ></iframe>

    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.0533228648046!2d79.01476296964412!3d28.802717098473252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390af3d6286e9d35%3A0x952ce80a8e91d333!2sFitness%20Vision%20Academy!5e0!3m2!1sen!2sin!4v1724579237055!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 50%;
  min-height: 60vh;
  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
  }
  @media (max-width: 1200px) {
    max-width: 100%;
    height: 60vh;
  }
`;

export default Map;
