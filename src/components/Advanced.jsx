import React from "react";
import advance from "../assets/Shot Distance.png";

const Advanced = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-[1240px] grid md:grid-cols-2">
        <img src={advance} alt="founder" className="w-[500px] mx-auto px-4" />
        <div className="flex flex-col justify-center bg-white px-4">
          <p className="text-[#07579f] font-bold text-4xl pb-8">
            Advanced Stats & Analytics
          </p>
          <p>
            In recent times statistics in basketball have become important in
            many aspects. For teams and coaches statistical analysis can provide
            a way to extract value and insight about what a player is doing or
            what a player might achieve in any giving amount of minutes played
            on the basketball court. Another example can be scouting the
            opposing opponents best players to find trends in their game for
            predictive outcomes. In modren times advanced stats such as per
            miniute statisitcs, +/-, offensive rating, four factors, and PER are
            ways to analyze basketball in an analytical format.{" "}
          </p>{" "}
          <br />
          <p>
            For players, statistics provide feedback from their perfomance which
            boost confidence, also it gives them data to improve their overall
            game for the next matchup. Advanced statisitcs and analytics provide
            basketball stakeholders with insight, it can be consumed by general
            managers, team owners, players, coaches and fans.
          </p>{" "}
          <br />
          <p>
            Hoopnomics will use a mixed-approach of advance statistics along
            with traditional methods of evaluation for recuriting and scouting
            talent in basketball.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
