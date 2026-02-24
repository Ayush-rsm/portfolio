// // import { useEffect, useState } from "react";

// // export const StarBackground = () => {
// //   const [stars, setStars] = useState([]);
// //   const [meteors, setMeteors] = useState([]);

// //   useEffect(() => {
// //     generateStars();
// //     generateMeteors();

// //     const handleResize = () => {
// //       generateStars();
// //     };

// //     window.addEventListener('resize', handleResize);

// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const generateStars = () => {
// //     const numberOfStars = Math.floor(
// //       (window.innerWidth * window.innerHeight) / 10000
// //     );

// //     const newStars = [];

// //     for (let i = 0; i < numberOfStars; i++) {
// //       newStars.push({
// //         id: i,
// //         size: Math.random() * 3 + 1,
// //         x: Math.random() * 100,
// //         y: Math.random() * 100,
// //         opacity: Math.random() * 0.5 + 0.5,
// //         animationDuration: Math.random() * 4 + 2,
// //       });
// //     }

// //     setStars(newStars);
// //   };

// //   const generateMeteors = () => {
// //     const numberOfMeteors = 4;
// //     const newMeteors = [];

// //     for (let i = 0; i < numberOfMeteors; i++) {
// //       newMeteors.push({
// //         id: i,
// //         size: Math.random() * 2 + 1,
// //         x: Math.random() * 100,
// //         y: Math.random() * 20,
// //         delay: Math.random() * 15,
// //         animationDuration: Math.random() * 3 + 3,
// //       });
// //     }

// //     setMeteors(newMeteors);
// //   };

// //   return (
// //     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
// //       {stars.map((star) => (
// //         <div
// //           key={star.id}
// //           className="star animate-pulse-subtle"
// //           style={{
// //             position: "absolute",
// //             width: star.size + "px",
// //             height: star.size + "px",
// //             left: star.x + "%",
// //             top: star.y + "%",
// //             opacity: star.opacity,
// //             animationDuration: star.animationDuration + "s",
// //           }}
// //         />
// //       ))}

// //       {meteors.map((meteor) => (
// //         <div
// //           key={meteor.id}
// //           className="meteor animate-meteor"
// //           style={{
// //             width: meteor.size * 50+ "px",
// //             height: meteor.size * 2 + "px",
// //             left: meteor.x + "%",
// //             top: meteor.y + "%",
// //             animationDelay: meteor.delay,
// //             animationDuration: meteor.animationDuration + "s",
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // };


// import { useEffect, useRef } from "react";

// export const StarBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let stars = [];
//     let animationFrameId;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const createStars = () => {
//       stars = [];
//       for (let i = 0; i < 240; i++) {
//         stars.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           radius: Math.random() * 1.5,
//           speed: Math.random() * 0.3,
//         });
//       }
//     };

//     const drawStars = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = "rgba(255,255,255,0.7)";
//       stars.forEach((star) => {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fill();

//         star.y += star.speed;

//         if (star.y > canvas.height) {
//           star.y = 0;
//           star.x = Math.random() * canvas.width;
//         }
//       });

//       animationFrameId = requestAnimationFrame(drawStars);
//     };

//     resize();
//     createStars();
//     drawStars();

//     window.addEventListener("resize", resize);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 z-10 opacity-40 pointer-events-none"
//     />
//   );
// };

import { useEffect, useRef } from "react";

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let meteors = [];
    let animationFrameId;

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    const createStars = () => {
      stars = [];
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          speed: Math.random() * 0.5,
        });
      }
    };


    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Stars
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;

        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });



      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    createStars();
   
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-40 pointer-events-none"
    />
  );
};