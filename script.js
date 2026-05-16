// SECTION: Question Pool
// Each question uses only user-provided correct answers (A–E). Text is generic so you can map to your own prompts offline.

const QUESTION_POOL = [
  // Exam 1.1B — Kinematics / Motion Basics (10)
  {
    id: "1.1B-1",
    exam: "Exam 1.1B — Kinematics / Motion Basics",
    topic: "Kinematics / Motion Basics",
    question:
      "Say a person starts at their house and travels for some time along a path of any shape. How does their displacement compare to their distance traveled along this path?",
    choices: {
      A: "The displacement is always equal to the distance traveled.",
      B: "The displacement is either greater than or equal to the distance traveled.",
      C: "The displacement can be either greater than, smaller than, or equal to the distance traveled.",
      D: "The displacement is either less than or equal to the distance traveled.",
    },
    correct: "D",
    reasoning:
      "Displacement is straight-line change in position, so it can be equal to or less than distance traveled, never greater.",
  },
  {
    id: "1.1B-2",
    exam: "Exam 1.1B — Kinematics / Motion Basics",
    topic: "Kinematics / Motion Basics",
    question: "Which of the following situations is not possible for a traveling object?",
    choices: {
      A: "An object has velocity directed east and acceleration directed east.",
      B: "An object has zero velocity but non-zero acceleration.",
      C: "An object has constant non-zero velocity and changing acceleration.",
      D: "An object has velocity directed east and acceleration directed west.",
      E: "An object has constant non-zero acceleration and changing velocity.",
    },
    correct: "C",
    reasoning:
      "Constant nonzero velocity means acceleration must be zero, so acceleration cannot be changing.",
  },
  {
    id: "1.1B-3",
    exam: "Exam 1.1B — Kinematics / Motion Basics",
    topic: "Kinematics / Motion Basics",
    question:
      "A ball is thrown straight up, reaches a maximum height, then falls to its initial height. Which of the following statements about the direction of the velocity and acceleration of the ball as it is going down is correct?",
    choices: {
      A: "Its velocity points upward and its acceleration points downward.",
      B: "Both its velocity and its acceleration point downward.",
      C: "Both its velocity and its acceleration point upward.",
      D: "Its velocity points downward and its acceleration points upward.",
    },
    correct: "B",
    reasoning:
      "On the way down, velocity is downward and gravity makes acceleration downward.",
  },
  {
    id: "1.1B-4",
    exam: "Exam 1.1B — Kinematics / Motion Basics",
    topic: "Kinematics / Motion Basics",
    question: "What is the slope of a position vs. time graph?",
    choices: {
      A: "The distance traveled",
      B: "Acceleration",
      C: "Velocity",
      D: "Displacement",
    },
    correct: "C",
    reasoning: "Slope of x vs. t is velocity: v = Δx/Δt.",
  },
  {
    id: "1.1B-5",
    exam: "Exam 1.1B — Kinematics / Motion Basics",
    topic: "Kinematics / Motion Basics",
    question:
      "The velocities of both a car and truck traveling along a straight highway are shown in the graph. The two vehicles are initially alongside each other at time t = 0. At time T, what is true of the distances traveled by the vehicles since time t = 0?",
    choices: {
      A: "The car will have travelled further than the truck.",
      B: "The truck will not have moved.",
      C: "The truck will have travelled further than the car.",
      D: "They will have travelled the same distance.",
    },
    correct: "C",
    reasoning:
      "Distance is area under the velocity-time graph; the truck has greater area.",
    image: "exam_11B_q5.png",
  },
  {
    id: "1.1B-6",
    exam: "Exam 1.1B — Kinematics / Motion Basics",
    topic: "Kinematics / Motion Basics",
    question:
      "Two vectors, of magnitudes 20 mm and 50 mm, are added together. Which one of the following is a possible value for the magnitude of the resultant?",
    choices: {
      A: "10 mm",
      B: "20 mm",
      C: "40 mm",
      D: "80 mm",
    },
    correct: "C",
    reasoning:
      "Resultant magnitude must be between 50 − 20 = 30 mm and 50 + 20 = 70 mm, so 40 mm is possible.",
  },
  {
    id: "1.1B-7",
    exam: "Exam 1.1B — Kinematics / Motion Basics",
    topic: "Kinematics / Motion Basics",
    question:
      "If vectors can be added such that A⃗ + B⃗ = C⃗, and their magnitudes can be added as A + B = C, then vectors A⃗ and B⃗ are oriented how?",
    choices: {
      A: "It is impossible to know from the given information.",
      B: "Parallel to each other, in the same direction.",
      C: "Antiparallel to each other, in opposite directions.",
      D: "Perpendicular relative to each other.",
    },
    correct: "B",
    reasoning:
      "Magnitudes add directly only when vectors point in the same direction.",
  },
  {
    id: "1.1B-8",
    exam: "Exam 1.1B — Kinematics / Motion Basics",
    topic: "Kinematics / Motion Basics",
    question:
      "What can be said about the horizontal component of the acceleration for an object undergoing projectile motion?",
    choices: {
      A: "It continuously decreases.",
      B: "It continuously increases.",
      C: "It remains a non-zero constant.",
      D: "It remains zero.",
      E: "It first decreases and then increases.",
    },
    correct: "D",
    reasoning:
      "Ideal projectile motion has no horizontal acceleration, so a_x = 0.",
  },
  {
    id: "1.1B-9",
    exam: "Exam 1.1B — Kinematics / Motion Basics",
    topic: "Kinematics / Motion Basics",
    question:
      "For an object in uniform circular motion, its velocity and acceleration vectors are always perpendicular to each other at every point in the path.",
    choices: {
      A: "True",
      B: "False",
    },
    correct: "A",
    reasoning:
      "In uniform circular motion, velocity is tangent and acceleration points toward center, so they are perpendicular.",
  },
  {
    id: "1.1B-10",
    exam: "Exam 1.1B — Kinematics / Motion Basics",
    topic: "Kinematics / Motion Basics",
    question:
      "Suppose that a car traveling to the west, the (−x) direction, begins to slow down as it approaches a traffic light. Which statement concerning its acceleration in the x-direction is correct?",
    choices: {
      A: "Its acceleration is negative but its velocity is positive.",
      B: "Both its acceleration and its velocity are positive.",
      C: "Both its acceleration and its velocity are negative.",
      D: "Its acceleration is positive but its velocity is negative.",
    },
    correct: "D",
    reasoning:
      "Velocity is west/negative, but slowing down means acceleration points opposite motion, so positive x.",
  },

  // Exam 2.2A — Newton's Laws / Forces / Circular Motion (10)
  {
    id: "2.2A-1",
    exam: "Exam 2.2A — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "When a car goes around a circular curve on a horizontal road at constant speed, what force causes it to follow the circular path?",
    choices: {
      A: "The normal force from the road",
      B: "The friction force from the road",
      C: "Gravity",
      D: "No force causes the car to do this because the car is traveling at constant speed and therefore has no acceleration.",
    },
    correct: "B",
    reasoning:
      "On a flat road, static friction provides the centripetal force toward the center of the curve.",
  },
  {
    id: "2.2A-2",
    exam: "Exam 2.2A — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "A box is placed on a table which rests on the floor. The box pushes on the table. The reaction force to the box's push on the table is the table's push on the floor.",
    choices: {
      A: "True",
      B: "False",
    },
    correct: "B",
    reasoning:
      "False. The reaction to 'box pushes table' is 'table pushes box,' not table pushing floor.",
  },
  {
    id: "2.2A-3",
    exam: "Exam 2.2A — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question: "An object undergoes uniform circular motion. Which pair of vectors is perpendicular?",
    choices: {
      A: "Centripetal acceleration and centripetal force",
      B: "Centripetal acceleration and velocity",
      C: "Centripetal force and radius",
      D: "None are perpendicular",
    },
    correct: "B",
    reasoning:
      "Centripetal acceleration points inward; velocity is tangent, so they are perpendicular.",
  },
  {
    id: "2.2A-4",
    exam: "Exam 2.2A — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "You push on box G that is next to box H, causing both boxes to slide along the floor, as shown in the figure. The reaction force to your push is:",
    choices: {
      A: "The acceleration of box G",
      B: "The push of box G on box H",
      C: "The push of box H on box G",
      D: "The upward force of the floor on box G",
      E: "The push of box G against you",
    },
    correct: "E",
    reasoning:
      "Your push on box G has a Newton's 3rd-law pair: box G pushes back on you.",
    image: "exam_22A_q4.png",
  },
  {
    id: "2.2A-5",
    exam: "Exam 2.2A — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "An object is moving with constant non-zero velocity. Which of the following statements about it must be true?",
    choices: {
      A: "Its acceleration is in the same direction as its velocity.",
      B: "A constant force is being applied to it in the direction of motion.",
      C: "The net force on the object is zero.",
      D: "A constant force is being applied to it perpendicular to the direction of motion.",
      E: "A constant force is being applied to it in the direction opposite of motion.",
    },
    correct: "C",
    reasoning: "Constant velocity means a = 0, so by F_net = ma, net force is zero.",
  },
  {
    id: "2.2A-6",
    exam: "Exam 2.2A — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "A body is observed to gradually slow down. The correct statement is that the body slows because:",
    choices: {
      A: "No force acts on the body.",
      B: "No net force acts on the body.",
      C: "It is the nature of the body itself to slow down.",
      D: "A net force acts.",
    },
    correct: "D",
    reasoning: "Objects slow down because a net force acts opposite their motion.",
  },
  {
    id: "2.2A-7",
    exam: "Exam 2.2A — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "When a person is standing on a bathroom scale, it reports a value. The value it reports is due to which force?",
    choices: {
      A: "The person's mass",
      B: "The reaction force to the person's weight acting on the scale",
      C: "The force of gravity",
      D: "The weight of the scale",
    },
    correct: "B",
    reasoning:
      "A scale reads the contact/normal force related to the person pressing on it.",
  },
  {
    id: "2.2A-8",
    exam: "Exam 2.2A — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "You're on a Ferris wheel moving in a vertical circle. When the Ferris wheel is at rest, the normal force N exerted by your seat is equal to your weight mg. How does N change at the top of the Ferris wheel when you are in motion?",
    choices: {
      A: "N < mg",
      B: "N > mg",
      C: "N = mg",
      D: "mg = 0",
    },
    correct: "A",
    reasoning:
      "At the top of a Ferris wheel, gravity helps provide centripetal acceleration, so N < mg.",
  },
  {
    id: "2.2A-9",
    exam: "Exam 2.2A — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "Which of the following is true when an object is falling with drag and reaches terminal velocity?",
    choices: {
      A: "v = 0",
      B: "mg = 0",
      C: "a = 0",
      D: "F_drag = 0",
    },
    correct: "C",
    reasoning: "Terminal velocity means constant velocity, so acceleration is zero.",
  },
  {
    id: "2.2A-10",
    exam: "Exam 2.2A — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question: "Balanced forces cause a change in momentum.",
    choices: {
      A: "True",
      B: "False",
    },
    correct: "B",
    reasoning: "Balanced forces mean F_net = 0, so momentum does not change.",
  },

  // Exam 2.2A — Second Version (10)
  {
    id: "2.2A-v2-1",
    exam: "Exam 2.2A — Second Version — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "When an object moves in uniform circular motion, the direction of its acceleration is:",
    choices: {
      A: "In the same direction as its velocity vector.",
      B: "In the opposite direction of its velocity vector.",
      C: "Directed toward the center of its circular path.",
      D: "Directed away from the center of its circular path.",
      E: "Depends on the speed of the object.",
    },
    correct: "C",
    reasoning: "Uniform circular motion acceleration is always toward the center.",
  },
  {
    id: "2.2A-v2-2",
    exam: "Exam 2.2A — Second Version — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "A car goes around a circular curve on a horizontal road at constant speed. What is the direction of the friction force on the car due to the road?",
    choices: {
      A: "Tangent to the curve in the forward direction",
      B: "Tangent to the curve opposite to the direction of the car's motion",
      C: "Perpendicular to the curve outward",
      D: "Perpendicular to the curve inward",
      E: "There is no friction on the car because its speed is constant.",
    },
    correct: "D",
    reasoning: "Friction must point inward to provide centripetal force.",
  },
  {
    id: "2.2A-v2-3",
    exam: "Exam 2.2A — Second Version — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "A box is placed on a table which rests on the floor. The box pushes on the table. The reaction force to the box's push on the table is the table's push on the floor.",
    choices: {
      A: "True",
      B: "False",
    },
    correct: "B",
    reasoning:
      "False. The reaction pair is box-on-table and table-on-box.",
  },
  {
    id: "2.2A-v2-4",
    exam: "Exam 2.2A — Second Version — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "You pull on a crate with a rope. If the crate moves, the rope's pull on the crate must have been larger than the crate's pull on the rope, but if the crate does not move, both of these pulls must have been equal.",
    choices: {
      A: "True",
      B: "False",
    },
    correct: "B",
    reasoning:
      "False. Rope pulls crate and crate pulls rope with equal/opposite forces always, moving or not.",
  },
  {
    id: "2.2A-v2-5",
    exam: "Exam 2.2A — Second Version — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "Two blocks of different mass are connected by a string. The system is accelerated across a smooth horizontal surface by a force supplied by a rubber band connected to the less massive block. The tension in the connecting string will be:",
    choices: {
      A: "Greater than the force pulling the leading block",
      B: "The same as the force pulling the leading block",
      C: "Less than the force pulling the leading block",
      D: "Zero",
    },
    correct: "C",
    reasoning:
      "The applied force accelerates the whole system, while tension only pulls the trailing block, so T < F.",
  },
  {
    id: "2.2A-v2-6",
    exam: "Exam 2.2A — Second Version — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question: "What is the net force acting on the block shown?",
    choices: {
      A: "30 N",
      B: "40 N",
      C: "20 N",
      D: "0 N",
    },
    correct: "C",
    reasoning: "Rightward forces: 25 + 5 = 30 N. Leftward force: 10 N. Net = 20 N right.",
    image: "exam_22A_v2_q67.png",
  },
  {
    id: "2.2A-v2-7",
    exam: "Exam 2.2A — Second Version — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "For the block in problem 6, if it has a mass of 5.0 kg, what is its acceleration?",
    choices: {
      A: "4 m/s^2 to the right",
      B: "4 m/s^2 to the left",
      C: "10 m/s^2 to the left",
      D: "10 m/s^2 to the right",
      E: "6 m/s^2 to the right",
    },
    correct: "A",
    reasoning: "a = F_net/m = 20/5 = 4 m/s^2 to the right.",
    image: "exam_22A_v2_q67.png",
  },
  {
    id: "2.2A-v2-8",
    exam: "Exam 2.2A — Second Version — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "If a person stands on a scale in an elevator that is accelerating upward, what will the scale read?",
    choices: {
      A: "Greater than their weight",
      B: "Less than their weight",
      C: "Exactly their weight",
      D: "Always 0",
    },
    correct: "A",
    reasoning: "Elevator accelerating upward makes the normal force greater than weight.",
  },
  {
    id: "2.2A-v2-9",
    exam: "Exam 2.2A — Second Version — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question:
      "An object of mass m is dropped from a tower. The object's drag force is given by F_d = −b v^2, where b is a positive constant. What will the object's terminal velocity be?",
    choices: {
      A: "v_t = sqrt(b/(mg))",
      B: "v_t = mg/b",
      C: "v_t = g/b",
      D: "v_t = sqrt(g/b)",
      E: "v_t = sqrt(mg/b)",
    },
    correct: "E",
    reasoning: "At terminal speed, mg = b v^2, so v_t = sqrt(mg/b).",
  },
  {
    id: "2.2A-v2-10",
    exam: "Exam 2.2A — Second Version — Newton's Laws / Forces / Circular Motion",
    topic: "Newton's Laws / Forces / Circular Motion",
    question: "Which of the following is true about a free body diagram?",
    choices: {
      A: "It indicates all the forces acting on an object.",
      B: "It indicates all the forces exerted by an object.",
      C: "It only shows the object, but not the forces.",
      D: "It indicates the velocity and acceleration of the object.",
    },
    correct: "A",
    reasoning: "A free-body diagram shows all forces acting on the object, not forces the object exerts.",
  },

  // Exam 3.2A — Work / Energy / Potential Energy (10)
  {
    id: "3.2A-1",
    exam: "Exam 3.2A — Work / Energy / Potential Energy",
    topic: "Work / Energy / Potential Energy",
    question:
      "A ball drops some distance and loses 30 J of gravitational potential energy. Do NOT ignore air resistance. How much kinetic energy did the ball gain?",
    choices: {
      A: "More than 30 J",
      B: "Exactly 30 J",
      C: "Less than 30 J",
    },
    correct: "C",
    reasoning:
      "With air resistance, some lost gravitational potential energy becomes thermal energy, so KE gain is less than 30 J.",
  },
  {
    id: "3.2A-2",
    exam: "Exam 3.2A — Work / Energy / Potential Energy",
    topic: "Work / Energy / Potential Energy",
    question:
      "The plot in the figure shows the potential energy of a particle, due to the force exerted on it by another particle, as a function of distance. At which of the three points labeled in the figure is the magnitude of the force on the particle greatest?",
    choices: {
      A: "Point X",
      B: "Point Y",
      C: "Point Z",
    },
    correct: "A",
    reasoning:
      "Force magnitude is F = |−dU/dx|; greatest force occurs where the PE graph has steepest slope.",
    image: "exam_32A_q2.png",
  },
  {
    id: "3.2A-3",
    exam: "Exam 3.2A — Work / Energy / Potential Energy",
    topic: "Work / Energy / Potential Energy",
    question:
      "Consider a plot of the displacement x as a function of the applied force F for an ideal elastic spring. The slope of the curve would be:",
    choices: {
      A: "The spring constant",
      B: "The reciprocal of the spring constant",
      C: "The acceleration due to gravity",
      D: "The reciprocal of the acceleration of gravity",
      E: "The mass of the object attached to the spring",
    },
    correct: "B",
    reasoning: "Hooke's law: F = kx, so x = F/k. Slope of x vs. F is 1/k.",
  },
  {
    id: "3.2A-4",
    exam: "Exam 3.2A — Work / Energy / Potential Energy",
    topic: "Work / Energy / Potential Energy",
    question:
      "Two objects, one of mass m and the other of mass 2m, are dropped from the top of a building. When they hit the ground:",
    choices: {
      A: "Both of them will have the same kinetic energy.",
      B: "The heavier one will have twice the kinetic energy of the lighter one.",
      C: "The heavier one will have four times the kinetic energy of the lighter one.",
      D: "The heavier one will have sqrt(2) times the kinetic energy of the lighter one.",
    },
    correct: "B",
    reasoning:
      "Dropped from same height, both have same speed at impact, but KE = 1/2 m v^2, so 2m has twice KE.",
  },
  {
    id: "3.2A-5",
    exam: "Exam 3.2A — Work / Energy / Potential Energy",
    topic: "Work / Energy / Potential Energy",
    question:
      "A 4.0-kg object is moving with speed 2.0 m/s. A 1.0-kg object is moving with speed 4.0 m/s. Both objects encounter the same constant braking force and are brought to rest. Which object travels the greater distance before stopping?",
    choices: {
      A: "The 4.0-kg object",
      B: "The 1.0-kg object",
      C: "Both objects travel the same distance.",
      D: "It is impossible to know without knowing how long each force acts.",
    },
    correct: "C",
    reasoning:
      "Both have the same KE: 1/2(4)(2^2) = 8 J and 1/2(1)(4^2) = 8 J, so same stopping distance under same force.",
  },
  {
    id: "3.2A-6",
    exam: "Exam 3.2A — Work / Energy / Potential Energy",
    topic: "Work / Energy / Potential Energy",
    question: "Can friction ever do positive work?",
    choices: {
      A: "Yes",
      B: "No",
    },
    correct: "A",
    reasoning:
      "Friction can do positive work, like static friction pushing a person forward while walking.",
  },
  {
    id: "3.2A-7",
    exam: "Exam 3.2A — Work / Energy / Potential Energy",
    topic: "Work / Energy / Potential Energy",
    question:
      "In a baseball game, the catcher stops a 90-mph pitch. What can you say about the work done by the catcher on the ball?",
    choices: {
      A: "The catcher does positive work.",
      B: "The catcher does negative work.",
      C: "The catcher does zero work.",
    },
    correct: "B",
    reasoning:
      "Catcher's force is opposite the ball's displacement while stopping it, so work is negative.",
  },
  {
    id: "3.2A-8",
    exam: "Exam 3.2A — Work / Energy / Potential Energy",
    topic: "Work / Energy / Potential Energy",
    question:
      "Two blocks of mass m1 and m2, where m1 > m2, slide on a frictionless floor and have the same kinetic energy when they hit a long rough stretch (μ > 0), which slows them down to a stop. Which one goes farther?",
    choices: {
      A: "m1",
      B: "m2",
      C: "They will go the same distance.",
    },
    correct: "B",
    reasoning:
      "Same KE, but friction force is μ m g. Larger mass has larger friction, so stops in shorter distance; lighter m2 goes farther.",
  },
  {
    id: "3.2A-9",
    exam: "Exam 3.2A — Work / Energy / Potential Energy",
    topic: "Work / Energy / Potential Energy",
    question: "Is it possible for the kinetic energy of an object to be negative?",
    choices: {
      A: "Yes",
      B: "No",
    },
    correct: "B",
    reasoning: "KE = 1/2 m v^2, so it cannot be negative.",
  },
  {
    id: "3.2A-10",
    exam: "Exam 3.2A — Work / Energy / Potential Energy",
    topic: "Work / Energy / Potential Energy",
    question:
      "Engine #1 produces twice the power of engine #2. Can we conclude that engine #1 does twice as much work as engine #2?",
    choices: {
      A: "Yes",
      B: "No",
    },
    correct: "B",
    reasoning:
      "Power is P = W/t. Twice the power does not mean twice the work unless time is the same.",
  },

  // Exam 3.1C — Work / Energy / Power (10)
  {
    id: "3.1C-1",
    exam: "Exam 3.1C — Work / Energy / Power",
    topic: "Work / Energy / Power",
    question:
      "If the force on an object is in the negative direction, the work it does on the object must be:",
    choices: {
      A: "Negative",
      B: "Positive",
      C: "The work could be either positive or negative, depending on the direction the object moves.",
    },
    correct: "C",
    reasoning:
      "Work depends on force and displacement: W = F d cos θ. A negative force can do positive or negative work depending on motion direction.",
  },
  {
    id: "3.1C-2",
    exam: "Exam 3.1C — Work / Energy / Power",
    topic: "Work / Energy / Power",
    question:
      "You throw a baseball straight up. Compare the sign of the work done by gravity while the ball goes up with the sign of the work done by gravity while it goes down.",
    choices: {
      A: "The work is negative on the way up and positive on the way down.",
      B: "The work is positive on the way up and positive on the way down.",
      C: "The work is positive on the way up and negative on the way down.",
      D: "The work is negative on the way up and on the way down because gravity is always downward.",
    },
    correct: "A",
    reasoning:
      "Gravity points down. On the way up displacement is up, so work is negative; on the way down displacement is down, so work is positive.",
  },
  {
    id: "3.1C-3",
    exam: "Exam 3.1C — Work / Energy / Power",
    topic: "Work / Energy / Power",
    question:
      "A stone is held at a height h above the ground. A second stone with four times the mass of the first one is held at the same height. The gravitational potential energy of the second stone compared to that of the first stone is:",
    choices: {
      A: "One-fourth as much",
      B: "One-half as much",
      C: "Four times as much",
      D: "Twice as much",
      E: "The same",
    },
    correct: "C",
    reasoning: "Gravitational PE is U = m g h. Four times the mass means four times the PE.",
  },
  {
    id: "3.1C-4",
    exam: "Exam 3.1C — Work / Energy / Power",
    topic: "Work / Energy / Power",
    question:
      "A stone can slide down one of four different frictionless ramps, as shown in the figure. For which ramp will the speed of the ball be the greatest at the bottom?",
    choices: {
      A: "Ramp X",
      B: "Ramp Y",
      C: "Ramp Z",
      D: "The speed of the ball will be the same for all ramps.",
    },
    correct: "D",
    reasoning:
      "With frictionless ramps and same height drop, final speed depends only on vertical height change.",
    image: "exam_31C_q4.png",
  },
  {
    id: "3.1C-5",
    exam: "Exam 3.1C — Work / Energy / Power",
    topic: "Work / Energy / Power",
    question:
      "Jill does twice as much work as Jack does and in half the time. Jill's power output is:",
    choices: {
      A: "The same as Jack's power output.",
      B: "One-fourth as much as Jack's power output.",
      C: "One-half as much as Jack's power output.",
      D: "Four times Jack's power output.",
      E: "Twice Jack's power output.",
    },
    correct: "D",
    reasoning: "P = W/t. Jill does 2W in t/2, so P = 2W/(t/2) = 4W/t.",
  },
  {
    id: "3.1C-6",
    exam: "Exam 3.1C — Work / Energy / Power",
    topic: "Work / Energy / Power",
    question:
      "Person X pushes twice as hard against a stationary object as person Y. Which one of the statements is correct?",
    choices: {
      A: "Both do positive work, but X does 4 times the work as Y.",
      B: "Both do positive work, but X does 2 times the work as Y.",
      C: "Both do the same amount of positive work.",
      D: "Both do zero work.",
      E: "Both do positive work, but X does half of the work as Y.",
    },
    correct: "D",
    reasoning: "Work is W = F d. Stationary object has d = 0, so both do zero work.",
  },
  {
    id: "3.1C-7",
    exam: "Exam 3.1C — Work / Energy / Power",
    topic: "Work / Energy / Power",
    question: "Is it possible for a system to have negative potential energy?",
    choices: {
      A: "Yes, since the choice of the zero of potential energy is arbitrary.",
      B: "Yes, as long as the kinetic energy is positive.",
      C: "Yes, as long as the total energy is positive.",
      D: "No, because the kinetic energy of a system must equal its potential energy.",
      E: "No, because this would have no physical meaning.",
    },
    correct: "A",
    reasoning: "Potential energy zero level is arbitrary, so potential energy can be negative.",
  },
  {
    id: "3.1C-8",
    exam: "Exam 3.1C — Work / Energy / Power",
    topic: "Work / Energy / Power",
    question:
      "Which, if any, of the following statements concerning the work done by a conservative force is NOT true?",
    choices: {
      A: "It can always be expressed as the difference between the initial and final values of a potential energy function.",
      B: "It is independent of the path of the body and depends only on the starting and ending points.",
      C: "When the starting and ending points are the same, the total work is zero.",
      D: "All of the above statements are true.",
      E: "None of the above statements are true.",
    },
    correct: "D",
    reasoning:
      "A, B, and C are true for conservative forces, so the best answer is 'all above statements are true.'",
  },
  {
    id: "3.1C-9",
    exam: "Exam 3.1C — Work / Energy / Power",
    topic: "Work / Energy / Power",
    question:
      "When an object is solely under the influence of conservative forces, the sum of its kinetic and potential energies does not change.",
    choices: {
      A: "True",
      B: "False",
    },
    correct: "A",
    reasoning: "With only conservative forces, mechanical energy (K + U) is conserved.",
  },
  {
    id: "3.1C-10",
    exam: "Exam 3.1C — Work / Energy / Power",
    topic: "Work / Energy / Power",
    question:
      "If a force always acts perpendicular to an object's direction of motion, that force cannot change the object's kinetic energy.",
    choices: {
      A: "True",
      B: "False",
    },
    correct: "A",
    reasoning:
      "A perpendicular force does no work because cos 90° = 0, so it cannot change kinetic energy.",
  },

  // Exam 4.1A — Momentum / Collisions / Conservation Laws + Rotation Intro (10)
  {
    id: "4.1A-1",
    exam: "Exam 4.1A — Momentum / Collisions / Conservation Laws + Rotation Intro",
    topic: "Momentum / Collisions / Conservation Laws + Rotation Intro",
    question:
      "A small car has a head-on collision with a large truck. Which of the following statements concerning the magnitude of the average force due to the collision is correct?",
    choices: {
      A: "The truck experiences the greater average force.",
      B: "The small car experiences the greater average force.",
      C: "The small car and the truck experience the same average force.",
      D: "It is impossible to tell since the masses are not given.",
      E: "It is impossible to tell since the velocities are not given.",
    },
    correct: "C",
    reasoning:
      "By Newton's 3rd law, the car and truck exert equal-magnitude forces on each other.",
  },
  {
    id: "4.1A-2",
    exam: "Exam 4.1A — Momentum / Collisions / Conservation Laws + Rotation Intro",
    topic: "Momentum / Collisions / Conservation Laws + Rotation Intro",
    question:
      "On a smooth horizontal floor, an object slides into a spring which is attached to another mass that is initially stationary. When the spring is most compressed, both objects are moving at the same speed. Ignoring friction, what is conserved during this interaction?",
    choices: {
      A: "Momentum and mechanical energy",
      B: "Momentum only",
      C: "Kinetic energy only",
      D: "Momentum and kinetic energy",
      E: "Momentum and potential energy",
    },
    correct: "A",
    reasoning:
      "With no friction, momentum and mechanical energy are conserved. KE alone is not conserved because energy is stored in the spring.",
    image: "exam_41A_q2.png",
  },
  {
    id: "4.1A-3",
    exam: "Exam 4.1A — Momentum / Collisions / Conservation Laws + Rotation Intro",
    topic: "Momentum / Collisions / Conservation Laws + Rotation Intro",
    question:
      "A baseball is thrown vertically upward and feels no air resistance. As it is rising:",
    choices: {
      A: "Both its momentum and its mechanical energy are conserved.",
      B: "Its momentum is not conserved, but its mechanical energy is conserved.",
      C: "Both its momentum and its kinetic energy are conserved.",
      D: "Its kinetic energy is conserved, but its momentum is not conserved.",
      E: "Its gravitational potential energy is not conserved, but its momentum is conserved.",
    },
    correct: "B",
    reasoning:
      "Gravity is an external force, so momentum changes, but with no air resistance mechanical energy is conserved.",
  },
  {
    id: "4.1A-4",
    exam: "Exam 4.1A — Momentum / Collisions / Conservation Laws + Rotation Intro",
    topic: "Momentum / Collisions / Conservation Laws + Rotation Intro",
    question:
      "A small glider is coasting horizontally when suddenly a very heavy piece of cargo falls out of the bottom of the plane. You can neglect air resistance. Just after the cargo has fallen out:",
    choices: {
      A: "The plane speeds up and the cargo slows down.",
      B: "The plane speeds up but the cargo does not change speed.",
      C: "Neither the cargo nor the plane change speed.",
      D: "The cargo slows down but the plane does not change speed.",
      E: "Both the cargo and the plane speed up.",
    },
    correct: "C",
    reasoning:
      "No horizontal external force acts, so just after release, both cargo and plane keep their horizontal speed.",
  },
  {
    id: "4.1A-5",
    exam: "Exam 4.1A — Momentum / Collisions / Conservation Laws + Rotation Intro",
    topic: "Momentum / Collisions / Conservation Laws + Rotation Intro",
    question:
      "In a collision between two objects having unequal masses, how does the magnitude of the impulse imparted to the lighter object by the heavier one compare with the magnitude of the impulse imparted to the heavier object by the lighter one?",
    choices: {
      A: "The lighter object receives a larger impulse.",
      B: "The heavier object receives a larger impulse.",
      C: "Both objects receive the same impulse.",
      D: "The answer depends on the ratio of the masses.",
      E: "The answer depends on the ratio of the speeds.",
    },
    correct: "C",
    reasoning:
      "Impulses are equal and opposite because interaction forces are equal and last the same time.",
  },
  {
    id: "4.1A-6",
    exam: "Exam 4.1A — Momentum / Collisions / Conservation Laws + Rotation Intro",
    topic: "Momentum / Collisions / Conservation Laws + Rotation Intro",
    question:
      "In a perfectly elastic collision between two perfectly rigid objects:",
    choices: {
      A: "The momentum of each object is conserved.",
      B: "The kinetic energy of each object is conserved.",
      C: "The momentum of the system is conserved but the kinetic energy of the system is not conserved.",
      D: "Both the momentum and the kinetic energy of the system are conserved.",
      E: "The kinetic energy of the system is conserved, but the momentum of the system is not conserved.",
    },
    correct: "D",
    reasoning:
      "In an elastic collision, system momentum and system kinetic energy are conserved.",
  },
  {
    id: "4.1A-7",
    exam: "Exam 4.1A — Momentum / Collisions / Conservation Laws + Rotation Intro",
    topic: "Momentum / Collisions / Conservation Laws + Rotation Intro",
    question:
      "In an inelastic collision between two objects:",
    choices: {
      A: "The momentum of each object is conserved.",
      B: "The kinetic energy of each object is conserved.",
      C: "The momentum of the system is conserved but the kinetic energy of the system is not conserved.",
      D: "Both the momentum and the kinetic energy of the system are conserved.",
      E: "The kinetic energy of the system is conserved, but the momentum of the system is not conserved.",
    },
    correct: "C",
    reasoning:
      "In an inelastic collision, system momentum is conserved but system kinetic energy is not.",
  },
  {
    id: "4.1A-8",
    exam: "Exam 4.1A — Momentum / Collisions / Conservation Laws + Rotation Intro",
    topic: "Momentum / Collisions / Conservation Laws + Rotation Intro",
    question: "There must be equal amounts of mass on both sides of the center of mass of an object.",
    choices: {
      A: "True",
      B: "False",
    },
    correct: "B",
    reasoning:
      "False. Center of mass is a weighted average, not necessarily equal mass on both sides.",
  },
  {
    id: "4.1A-9",
    exam: "Exam 4.1A — Momentum / Collisions / Conservation Laws + Rotation Intro",
    topic: "Momentum / Collisions / Conservation Laws + Rotation Intro",
    question:
      "When a rigid body rotates about a fixed axis, all the points in the body have the same:",
    choices: {
      A: "Tangential speed",
      B: "Angular acceleration",
      C: "Tangential acceleration",
      D: "Linear displacement",
      E: "Centripetal acceleration",
    },
    correct: "B",
    reasoning:
      "In rigid rotation, all points share the same angular velocity and angular acceleration. Since angular velocity is not listed, angular acceleration is correct.",
  },
  {
    id: "4.1A-10",
    exam: "Exam 4.1A — Momentum / Collisions / Conservation Laws + Rotation Intro",
    topic: "Momentum / Collisions / Conservation Laws + Rotation Intro",
    question:
      "As shown in the figure, a given force is applied to a rod in several different ways. In which case is the torque about the pivot P due to this force the greatest?",
    choices: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
      E: "5",
    },
    correct: "A",
    reasoning:
      "Torque is τ = r F sin θ. Case 1 has the largest lever arm and perpendicular force.",
    image: "exam_41A_q10.png",
  },

  // Exam 4.2A — Rotation / Rolling Motion / Torque / Moment of Inertia (10)
  {
    id: "4.2A-1",
    exam: "Exam 4.2A — Rotation / Rolling Motion / Torque / Moment of Inertia",
    topic: "Rotation / Rolling Motion / Torque / Moment of Inertia",
    question:
      "The figure shows scale drawings of four objects, each of the same mass and uniform thickness, with the mass distributed uniformly. Which one has the greatest moment of inertia when rotated about an axis perpendicular to the plane of the drawing at point P?",
    choices: {
      A: "Object A",
      B: "Object B",
      C: "Object C",
      D: "Object D",
    },
    correct: "B",
    reasoning:
      "Moment of inertia is greatest when mass is farthest from the rotation axis; the ring-like object has mass far out.",
    image: "exam_42A_q1.png",
  },
  {
    id: "4.2A-2",
    exam: "Exam 4.2A — Rotation / Rolling Motion / Torque / Moment of Inertia",
    topic: "Rotation / Rolling Motion / Torque / Moment of Inertia",
    question:
      "As you are leaving a building, the door opens outward. If the hinges on the door are on your right, what is the direction of the angular velocity of the door as you open it?",
    choices: {
      A: "Up",
      B: "Down",
      C: "To your left",
      D: "To your right",
      E: "Forwards",
    },
    correct: "B",
    reasoning:
      "Door opens outward with hinges on your right, giving clockwise rotation viewed from above, so angular velocity points down by the right-hand rule.",
  },
  {
    id: "4.2A-3",
    exam: "Exam 4.2A — Rotation / Rolling Motion / Torque / Moment of Inertia",
    topic: "Rotation / Rolling Motion / Torque / Moment of Inertia",
    question:
      "Consider a uniform solid sphere of radius R and mass M rolling without slipping. Which form of its kinetic energy is larger, translational or rotational?",
    choices: {
      A: "Its translational kinetic energy is larger than its rotational kinetic energy.",
      B: "Its rotational kinetic energy is larger than its translational kinetic energy.",
      C: "Both forms of energy are equal.",
      D: "You need to know the speed of the sphere to tell.",
    },
    correct: "A",
    reasoning:
      "Solid sphere: I = 2/5 M R^2. Rotational KE = 1/5 M v^2, translational KE = 1/2 M v^2, so translational is larger.",
  },
  {
    id: "4.2A-4",
    exam: "Exam 4.2A — Rotation / Rolling Motion / Torque / Moment of Inertia",
    topic: "Rotation / Rolling Motion / Torque / Moment of Inertia",
    question:
      "A solid sphere, solid cylinder, and a hollow pipe all have equal masses and radii and are of uniform density. If the three are released simultaneously at the top of an inclined plane and roll without slipping, which one will reach the bottom first?",
    choices: {
      A: "Solid sphere",
      B: "Hollow pipe",
      C: "Solid cylinder",
      D: "They all reach the bottom at the same time.",
    },
    correct: "A",
    reasoning:
      "Rolling acceleration is larger when I/(M R^2) is smaller. Solid sphere has the smallest rotational inertia factor.",
  },
  {
    id: "4.2A-5",
    exam: "Exam 4.2A — Rotation / Rolling Motion / Torque / Moment of Inertia",
    topic: "Rotation / Rolling Motion / Torque / Moment of Inertia",
    question:
      "The two rotating systems shown in the figure differ only in that the two identical movable masses are positioned at different distances from the axis of rotation. If you release the hanging blocks simultaneously from rest, and if the ropes do not slip, which block lands first?",
    choices: {
      A: "The block at the left lands first.",
      B: "The block at the right lands first.",
      C: "Both blocks land at the same time.",
    },
    correct: "B",
    reasoning:
      "The system with masses closer to the axis has smaller moment of inertia, so it accelerates faster; from the figure, that is the right block.",
    image: "exam_42A_q5.png",
  },
  {
    id: "4.2A-6",
    exam: "Exam 4.2A — Rotation / Rolling Motion / Torque / Moment of Inertia",
    topic: "Rotation / Rolling Motion / Torque / Moment of Inertia",
    question:
      "Two children, Ahmed and Jacques, ride on a merry-go-round. Ahmed is at a greater distance from the axis of rotation than Jacques. Which of the following are true statements?",
    choices: {
      A: "Jacques has a greater angular speed than Ahmed.",
      B: "Jacques has a smaller angular speed than Ahmed.",
      C: "Jacques and Ahmed have the same angular speed.",
      D: "Jacques and Ahmed have the same tangential speed.",
    },
    correct: "C",
    reasoning:
      "On the same merry-go-round, everyone has the same angular speed ω, but different tangential speeds v = r ω.",
  },
  {
    id: "4.2A-7",
    exam: "Exam 4.2A — Rotation / Rolling Motion / Torque / Moment of Inertia",
    topic: "Rotation / Rolling Motion / Torque / Moment of Inertia",
    question: "As a tile falls from the roof of a building to the ground its momentum is conserved.",
    choices: {
      A: "True",
      B: "False",
    },
    correct: "B",
    reasoning: "False. Gravity is an external force, so the tile's momentum changes as it falls.",
  },
  {
    id: "4.2A-8",
    exam: "Exam 4.2A — Rotation / Rolling Motion / Torque / Moment of Inertia",
    topic: "Rotation / Rolling Motion / Torque / Moment of Inertia",
    question:
      "Bonnie sits on the outer rim of a merry-go-round, and Jill sits midway between the center and the rim. The merry-go-round makes one complete revolution every 2 seconds. Jill's linear velocity is:",
    choices: {
      A: "The same as Bonnie's",
      B: "Four times as Bonnie's",
      C: "Twice as Bonnie's",
      D: "Half of Bonnie's",
      E: "One-quarter of Bonnie's",
    },
    correct: "D",
    reasoning:
      "Jill is at half Bonnie's radius, and v = r ω, so Jill's linear speed is half Bonnie's.",
  },
  {
    id: "4.2A-9",
    exam: "Exam 4.2A — Rotation / Rolling Motion / Torque / Moment of Inertia",
    topic: "Rotation / Rolling Motion / Torque / Moment of Inertia",
    question: "Two forces produce the same torque thus they must have the same magnitude.",
    choices: {
      A: "True",
      B: "False",
    },
    correct: "B",
    reasoning:
      "Same torque does not require same force because τ = r F sin θ; lever arm and angle also matter.",
  },
  {
    id: "4.2A-10",
    exam: "Exam 4.2A — Rotation / Rolling Motion / Torque / Moment of Inertia",
    topic: "Rotation / Rolling Motion / Torque / Moment of Inertia",
    question:
      "Compared to a gear tooth on the rear sprocket, on the left, of small radius, of a bicycle, a gear tooth on the front sprocket, on the right, of large radius, has:",
    choices: {
      A: "A faster linear speed and a faster angular speed.",
      B: "The same linear speed and a faster angular speed.",
      C: "A slower linear speed and the same angular speed.",
      D: "The same linear speed and a slower angular speed.",
      E: "None of the above.",
    },
    correct: "D",
    reasoning:
      "The chain gives both sprockets the same linear speed, but the larger front sprocket has smaller angular speed since ω = v/r.",
    image: "exam_42A_q10.png",
  },
];

const QUESTIONS_PER_TEST = 10;

function buildQuestionText(q) {
  return q.question;
}

// SECTION: State
let currentTestQuestions = [];
let previousTestQuestionIds = [];
let userAnswers = new Map(); // key: question id, value: letter A–E
let poolUsageOrder = []; // full-cycle order
let poolIndex = 0; // current index into poolUsageOrder

// Initialize a random cycle that hits all questions before repeat
function resetPoolCycle() {
  poolUsageOrder = shuffleArray([...QUESTION_POOL]);
  poolIndex = 0;
}

// Get next batch of QUESTIONS_PER_TEST questions, respecting previous test
function getNextTestQuestions() {
  if (!poolUsageOrder.length || poolIndex >= poolUsageOrder.length) {
    resetPoolCycle();
  }

  const selected = [];

  while (selected.length < QUESTIONS_PER_TEST) {
    if (poolIndex >= poolUsageOrder.length) {
      // Finished a full cycle; reshuffle for a new one
      resetPoolCycle();
    }

    const candidate = poolUsageOrder[poolIndex];
    poolIndex += 1;

    // Avoid immediate reuse of any question from the previous test
    if (previousTestQuestionIds.includes(candidate.id)) {
      continue;
    }

    // Avoid duplicate within the same test
    if (selected.some(q => q.id === candidate.id)) {
      continue;
    }

    selected.push(candidate);
  }

  return selected;
}

// SECTION: Utility
function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function updateStatusBar() {
  const answeredCountEl = document.getElementById("answeredCount");
  const scoreDisplay = document.getElementById("scoreDisplay");
  const poolProgress = document.getElementById("poolProgress");

  const answered = Array.from(userAnswers.entries()).filter(([id]) =>
    currentTestQuestions.some(q => q.id === id)
  ).length;

  answeredCountEl.textContent = `${answered} / ${QUESTIONS_PER_TEST}`;

  // Pool progress: how many unique questions have ever been served in this cycle
  const usedCount = poolIndex;
  const total = QUESTION_POOL.length;
  poolProgress.textContent = `${Math.min(usedCount, total)} / ${total} used`;

  if (scoreDisplay.dataset.lastScore == null) {
    scoreDisplay.textContent = "—";
  }
}

// SECTION: Rendering
function renderQuestions() {
  const container = document.getElementById("questionsContainer");
  container.innerHTML = "";

  currentTestQuestions.forEach((q, index) => {
    const li = document.createElement("li");
    li.className = "question-item";
    li.dataset.qid = q.id;

    const header = document.createElement("div");
    header.className = "question-header";
    header.innerHTML = `
      <span class="question-number">Q${index + 1}</span>
      <span class="question-topic">${q.exam}</span>
    `;

    const text = document.createElement("p");
    text.className = "question-text";
    text.textContent = buildQuestionText(q);

    const choicesRow = document.createElement("div");
    choicesRow.className = "choices-row";

    const choiceLetters = Object.keys(q.choices);

    choiceLetters.forEach(letter => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn";
      btn.dataset.letter = letter;
      btn.innerHTML = `<span class="choice-letter">${letter}</span><span class="choice-text">${q.choices[letter]}</span>`;

      const existingAnswer = userAnswers.get(q.id);
      if (existingAnswer === letter) {
        btn.classList.add("selected");
      }

      btn.addEventListener("click", () => {
        handleChoiceClick(q.id, letter);
      });

      choicesRow.appendChild(btn);
    });

    li.appendChild(header);
    li.appendChild(text);
    li.appendChild(choicesRow);

    if (q.image) {
      const imgWrapper = document.createElement("div");
      imgWrapper.className = "question-image-wrapper";
      const img = document.createElement("img");
      img.className = "question-image";
      img.src = q.image;
      img.alt = `${q.exam} diagram`;
      imgWrapper.appendChild(img);
      li.appendChild(imgWrapper);
    }

    container.appendChild(li);
  });
}

function handleChoiceClick(questionId, letter) {
  userAnswers.set(questionId, letter);

  // Update visual selection
  const questionLi = document.querySelector(`.question-item[data-qid="${questionId}"]`);
  if (!questionLi) return;

  questionLi.querySelectorAll(".choice-btn").forEach(btn => {
    if (btn.dataset.letter === letter) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });

  updateStatusBar();
}

// SECTION: Scoring and Feedback
function gradeCurrentTest() {
  let score = 0;
  const details = [];

  currentTestQuestions.forEach(q => {
    const given = userAnswers.get(q.id) || null;
    const correct = q.correct;
    const isCorrect = given === correct;
    if (isCorrect) score += 1;

    details.push({ id: q.id, given, correct, isCorrect });
  });

  return { score, details };
}

function showFeedback(result) {
  const { score, details } = result;
  const panel = document.getElementById("feedbackPanel");

  const scoreOutOf = `${score} / ${QUESTIONS_PER_TEST}`;

  const correctCount = details.filter(d => d.isCorrect).length;
  const incorrectCount = details.length - correctCount;

  const feedbackListItems = details
    .map((d, index) => {
      const statusClass = d.isCorrect ? "correct" : "incorrect";
      const statusLabel = d.isCorrect ? "Correct" : "Incorrect";
      const givenText = d.given ? d.given : "—";

        const correctPart = d.isCorrect
          ? ""
          : ` · Correct: <strong>${d.correct}</strong>`;

        const reasoningPart = !d.isCorrect && d.reasoning
          ? `<div class="feedback-reasoning">Reasoning: ${d.reasoning}</div>`
          : "";

      return `<li class="feedback-item ${statusClass}">
        <strong>Q${index + 1}:</strong> ${statusLabel} · Your answer: <strong>${givenText}</strong>${correctPart}
        ${reasoningPart}
      </li>`;
    })
    .join("");

  panel.innerHTML = `
    <div class="feedback-summary">
      <div class="feedback-summary__score">Score: ${scoreOutOf}</div>
      <div class="feedback-summary__detail">${correctCount} correct, ${incorrectCount} incorrect</div>
    </div>
    <ol class="feedback-list">${feedbackListItems}</ol>
  `;

  // Highlight questions inline
    currentTestQuestions.forEach(q => {
      const d = details.find(x => x.id === q.id);
      if (d) {
        d.reasoning = q.reasoning;
      }
    const li = document.querySelector(`.question-item[data-qid="${q.id}"]`);
    if (!li || !d) return;

    li.classList.remove("correct", "incorrect");
    if (d.isCorrect) {
      li.classList.add("correct");
    } else {
      li.classList.add("incorrect");

      // Mark selected and show correct
      li.querySelectorAll(".choice-btn").forEach(btn => {
        const letter = btn.dataset.letter;
        btn.classList.remove("correct-selected", "incorrect-selected");
        if (letter === d.correct) {
          btn.classList.add("correct-selected");
        }
        if (letter === d.given && !d.isCorrect) {
          btn.classList.add("incorrect-selected");
        }
      });

      let correctEl = li.querySelector(".question-correct-answer");
      if (!correctEl) {
        correctEl = document.createElement("div");
        correctEl.className = "question-correct-answer";
        li.appendChild(correctEl);
      }
      correctEl.innerHTML = `Correct answer: <span>${d.correct}</span>`;
    }
  });

  const scoreDisplay = document.getElementById("scoreDisplay");
  scoreDisplay.textContent = scoreOutOf;
  scoreDisplay.dataset.lastScore = score;
}

// SECTION: Test Lifecycle
function beginNewTest() {
  // Move current to previous before replacing
  previousTestQuestionIds = currentTestQuestions.map(q => q.id);

  currentTestQuestions = getNextTestQuestions();

  // Clear answers only for the new test questions
  userAnswers = new Map();

  // Clear feedback
  const panel = document.getElementById("feedbackPanel");
  panel.innerHTML = "";

  renderQuestions();
  updateStatusBar();
}

function submitCurrentTest() {
  const result = gradeCurrentTest();
  showFeedback(result);
}

// SECTION: Event Handlers
window.addEventListener("DOMContentLoaded", () => {
  resetPoolCycle();
  currentTestQuestions = getNextTestQuestions();
  renderQuestions();
  updateStatusBar();

  const newTestBtn = document.getElementById("newTestBtn");
  const submitBtnTop = document.getElementById("submitBtn");
  const submitBtnBottom = document.getElementById("submitBtnBottom");
 
  newTestBtn.addEventListener("click", () => {
    beginNewTest();
  });
 
  const handleSubmit = () => {
    submitCurrentTest();
  };
 
  submitBtnTop.addEventListener("click", handleSubmit);
  if (submitBtnBottom) {
    submitBtnBottom.addEventListener("click", handleSubmit);
  }
});
