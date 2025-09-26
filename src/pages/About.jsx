import React from "react";

function About() {
  return (
    <div className="max-w-[90%] lg:max-w-5xl mx-auto my-10 font-jost">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="">
          <img
            className="w-full h-full rounded-xl  items-start"
            src="./about.jpg"
          />
        </div>
        <div className=" line-clamp-5">
          <h1 className="text-4xl text-center font-bold mb-2">
            {" "}
            Our Story's customer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum
            porro corporis commodi, qui facere consequatur quam deserunt est
            perspiciatis ut quas distinctio atque sint mollitia autem adipisci.
            Molestiae ipsam sequi impedit. Aspernatur velit veniam culpa
            deleniti. Ducimus, asperiores pariatur. Commodi quasi tenetur
            tempore aliquam esse dolores soluta blanditiis, veritatis quibusdam
            similique dolor deserunt sint dolorum fuga debitis consequuntur
            asperiores earum quae molestias atque. Illum, numquam autem non quos
            ea, explicabo deserunt odit laudantium quibusdam tempore iste!
            Doloremque similique cupiditate deserunt, maiores aut illum enim.
            Praesentium recusandae tenetur consequuntur minima nihil aspernatur
            placeat atque neque, beatae laudantium consectetur reprehenderit
            commodi!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
