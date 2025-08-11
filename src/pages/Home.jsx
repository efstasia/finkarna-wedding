/* eslint-disable */
import React from "react";
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <div className="homepage">
      <div className="homepage__rhyme">


      <p>Snart er speciella dag kommen är, en dag ni föralltid kommer hålla kär.
        <br></br>
        Vi är så glada att av denna dag få vara en del, att se två halvor mötas och tillsammans göra cirkeln hel.
        <br></br>
        Kärlek är vackert, svårt och har inget rätt eller fel. Man offrar mycket och sätter sitt hjärta på spel. 
        <br></br>
        Men belöningen man får av att våga och öppna sitt hjärta, är en känsla av trygghet och att aldrig mer ensam vara i sin smärta.
        <br></br>
        Man får en hand som håller en genom allt livet har att bjuda på, en bästa vän och interna skämt som bara ni kommer förstå.
        <br></br>
        Så länge leve kärlekens glöd, snart står ni där och lovar att älska varandra i lust och nöd.
      </p>
      </div>
      <Link to="/calendar">
      <div className="heart">
        <span>Klicka på mig</span>
      </div>
      </Link>
    </div>
  )
}