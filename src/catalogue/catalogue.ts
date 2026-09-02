import type { BodyZone } from "./types";

export const catalog: BodyZone[] = [
  {
    id: "arms",
    name: "Arms",
    implants: [
      {
        id: "titan-flex",
        name: "Titan Flex",
        description:
          "A reinforced cybernetic arm designed for industrial work, heavy lifting, and high-impact operations.",
        features: [
          {
            id: "synthetic-muscle",
            name: "Synthetic Muscle",
            description:
              "Electroactive fiber bundles amplify the user's natural movement and provide controlled superhuman strength.",
          },
          {
            id: "tactile-array",
            name: "Tactile Array",
            description:
              "A high-density sensor matrix restores pressure, temperature, and surface texture feedback.",
          },
          {
            id: "titanium-frame",
            name: "Titanium Frame",
            description:
              "A lightweight internal skeleton absorbs impact while protecting the implant's mechanical components.",
          },
        ],
      },
      {
        id: "ghost-grip",
        name: "Ghost Grip",
        description:
          "A precision hand implant built for delicate manipulation, silent operation, and enhanced dexterity.",
        features: [
          {
            id: "micro-servo-joints",
            name: "Micro-Servo Joints",
            description:
              "Independent finger actuators enable precise control of tools, weapons, and fragile objects.",
          },
          {
            id: "friction-control-pads",
            name: "Friction Control Pads",
            description:
              "Adaptive fingertip surfaces change their grip strength according to the material being handled.",
          },
          {
            id: "tremor-cancellation",
            name: "Tremor Cancellation",
            description:
              "Active stabilization removes involuntary movement during surgery, repair work, or long-range shooting.",
          },
        ],
      },
      {
        id: "mantis-array",
        name: "Mantis Array",
        description:
          "A combat-oriented forearm system containing concealed blades and predictive defensive sensors.",
        features: [
          {
            id: "retractable-blades",
            name: "Retractable Blades",
            description:
              "Monomolecular blades deploy from the forearm housing and lock into position for close combat.",
          },
          {
            id: "threat-prediction",
            name: "Threat Prediction",
            description:
              "Short-range motion sensors estimate incoming attack trajectories and assist defensive movement.",
          },
          {
            id: "impact-bracing",
            name: "Impact Bracing",
            description:
              "The wrist and elbow automatically reinforce themselves before a strike or collision.",
          },
        ],
      },
      {
        id: "forge-hand",
        name: "Forge Hand",
        description:
          "A modular engineering implant equipped for field repairs, fabrication, and machine diagnostics.",
        features: [
          {
            id: "tool-interface",
            name: "Tool Interface",
            description:
              "The palm accepts interchangeable cutting, fastening, soldering, and diagnostic modules.",
          },
          {
            id: "arc-shielding",
            name: "Arc Shielding",
            description:
              "Insulated internal layers protect the user from electrical discharge and welding arcs.",
          },
          {
            id: "material-scanner",
            name: "Material Scanner",
            description:
              "A fingertip spectrometer identifies common metals, polymers, coatings, and structural damage.",
          },
        ],
      },
    ],
  },
  {
    id: "head",
    name: "Head",
    implants: [
      {
        id: "argus-eye",
        name: "Argus Eye",
        description:
          "A multispectral ocular replacement designed for surveillance, navigation, and target analysis.",
        features: [
          {
            id: "multispectral-vision",
            name: "Multispectral Vision",
            description:
              "Switches between visible light, low-light amplification, thermal imaging, and ultraviolet detection.",
          },
          {
            id: "adaptive-focus",
            name: "Adaptive Focus",
            description:
              "Provides instant optical focus from close technical work to long-distance observation.",
          },
          {
            id: "target-overlay",
            name: "Target Overlay",
            description:
              "Projects distance, movement, and object-identification data directly into the user's vision.",
          },
        ],
      },
      {
        id: "echo-lens",
        name: "Echo Lens",
        description:
          "An auditory augmentation suite that isolates voices and maps nearby spaces through reflected sound.",
        features: [
          {
            id: "voice-isolation",
            name: "Voice Isolation",
            description:
              "Separates a selected speaker from crowds, machinery, wind, and other environmental noise.",
          },
          {
            id: "spatial-echo-mapping",
            name: "Spatial Echo Mapping",
            description:
              "Constructs a rough three-dimensional map of nearby surfaces using reflected sound.",
          },
          {
            id: "hearing-protection",
            name: "Impulse Protection",
            description:
              "Suppresses gunshots, explosions, and other dangerous sound peaks before they reach the auditory nerve.",
          },
        ],
      },
      {
        id: "mnemosyne-port",
        name: "Mnemosyne Port",
        description:
          "A neural memory interface for recording experiences, indexing knowledge, and accessing external data.",
        features: [
          {
            id: "memory-indexing",
            name: "Memory Indexing",
            description:
              "Tags important experiences and allows the user to retrieve them through associative search.",
          },
          {
            id: "sensory-recording",
            name: "Sensory Recording",
            description:
              "Records synchronized visual and auditory input for later review or secure transfer.",
          },
          {
            id: "encrypted-storage",
            name: "Encrypted Storage",
            description:
              "Stores sensitive memories and files inside an isolated, hardware-encrypted neural partition.",
          },
        ],
      },
      {
        id: "janus-mask",
        name: "Janus Mask",
        description:
          "A facial augmentation system capable of modifying voice, expression, and visible identity cues.",
        features: [
          {
            id: "voice-synthesis",
            name: "Voice Synthesis",
            description:
              "Reshapes pitch, resonance, and speech texture in real time using an implanted vocal processor.",
          },
          {
            id: "expression-control",
            name: "Expression Control",
            description:
              "Assists facial muscle movement to reproduce stored expressions with precise consistency.",
          },
          {
            id: "identity-scrambler",
            name: "Identity Scrambler",
            description:
              "Disrupts common facial-recognition systems using subtle projected patterns and dynamic surface changes.",
          },
        ],
      },
    ],
  },
  {
    id: "legs",
    name: "Legs",
    implants: [
      {
        id: "atlas-stride",
        name: "Atlas Stride",
        description:
          "Heavy-duty leg replacements optimized for carrying loads and remaining stable on difficult terrain.",
        features: [
          {
            id: "load-distribution",
            name: "Load Distribution",
            description:
              "Continuously redistributes weight between the hips, knees, and feet to reduce structural strain.",
          },
          {
            id: "terrain-lock",
            name: "Terrain Lock",
            description:
              "Adjustable foot segments grip loose ground, rubble, ice, and steep industrial surfaces.",
          },
          {
            id: "joint-dampers",
            name: "Joint Dampers",
            description:
              "Hydraulic dampers absorb vibration and protect the user during prolonged heavy transport.",
          },
        ],
      },
      {
        id: "vector-runner",
        name: "Vector Runner",
        description:
          "A lightweight mobility system designed for sprinting, rapid direction changes, and urban traversal.",
        features: [
          {
            id: "kinetic-return",
            name: "Kinetic Return",
            description:
              "Stores energy during foot contact and releases it during acceleration and jumping.",
          },
          {
            id: "traction-control",
            name: "Traction Control",
            description:
              "Modifies sole geometry and pressure distribution to maintain grip during fast turns.",
          },
          {
            id: "balance-processor",
            name: "Balance Processor",
            description:
              "Coordinates both legs with the vestibular system to stabilize high-speed movement.",
          },
        ],
      },
      {
        id: "bastion-knees",
        name: "Bastion Knees",
        description:
          "Reinforced knee assemblies that protect organic legs from impacts, falls, and extreme loads.",
        features: [
          {
            id: "impact-dissipation",
            name: "Impact Dissipation",
            description:
              "Spreads sudden force across the implant frame instead of transferring it into bone and cartilage.",
          },
          {
            id: "landing-assist",
            name: "Landing Assist",
            description:
              "Automatically adjusts joint resistance during jumps, drops, and uncontrolled falls.",
          },
          {
            id: "emergency-lock",
            name: "Emergency Lock",
            description:
              "Locks the joint in a stable position after detecting structural damage or loss of consciousness.",
          },
        ],
      },
      {
        id: "gecko-step",
        name: "Gecko Step",
        description:
          "A specialized climbing system for vertical maintenance, infiltration, and zero-gravity environments.",
        features: [
          {
            id: "adhesive-soles",
            name: "Adhesive Soles",
            description:
              "Microstructured pads produce controllable adhesion on glass, metal, and composite surfaces.",
          },
          {
            id: "ankle-rotation",
            name: "Extended Ankle Rotation",
            description:
              "Expanded joint movement keeps the foot aligned with walls, ceilings, and irregular structures.",
          },
          {
            id: "magnetic-anchors",
            name: "Magnetic Anchors",
            description:
              "Electromagnetic clamps provide additional security on ferrous industrial surfaces.",
          },
        ],
      },
    ],
  },
  {
    id: "nervous",
    name: "Nervous System",
    implants: [
      {
        id: "synapse-overdrive",
        name: "Synapse Overdrive",
        description:
          "A spinal processing module that reduces reaction delay and accelerates coordinated movement.",
        features: [
          {
            id: "reflex-acceleration",
            name: "Reflex Acceleration",
            description:
              "Shortens the delay between sensory detection and muscular response during critical situations.",
          },
          {
            id: "motor-prediction",
            name: "Motor Prediction",
            description:
              "Prepares likely movement patterns before the conscious decision to execute them is complete.",
          },
          {
            id: "thermal-regulation",
            name: "Thermal Regulation",
            description:
              "Limits processor output and redirects heat to prevent neural damage during sustained use.",
          },
        ],
      },
      {
        id: "seraph-link",
        name: "Seraph Link",
        description:
          "A neural communication implant for controlling drones, vehicles, and compatible machines.",
        features: [
          {
            id: "multi-device-control",
            name: "Multi-Device Control",
            description:
              "Maintains simultaneous low-latency links with several authorized machines.",
          },
          {
            id: "sensory-feedback",
            name: "Remote Sensory Feedback",
            description:
              "Translates camera, radar, and telemetry data into an intuitive secondary sensory stream.",
          },
          {
            id: "signal-encryption",
            name: "Signal Encryption",
            description:
              "Protects neural commands with rotating hardware keys and intrusion-detection protocols.",
          },
        ],
      },
      {
        id: "calm-core",
        name: "Calm Core",
        description:
          "An autonomic regulation implant that manages stress responses without suppressing awareness.",
        features: [
          {
            id: "adrenal-control",
            name: "Adrenal Control",
            description:
              "Regulates excessive adrenaline release while preserving the physical response needed for action.",
          },
          {
            id: "pain-gating",
            name: "Pain Gating",
            description:
              "Temporarily reduces disruptive pain signals without fully concealing serious injury.",
          },
          {
            id: "recovery-cycle",
            name: "Recovery Cycle",
            description:
              "Guides breathing, heart rate, and muscle relaxation after periods of extreme stress.",
          },
        ],
      },
      {
        id: "dreamweaver",
        name: "Dreamweaver",
        description:
          "A sleep and simulation implant used for accelerated training, controlled dreaming, and recovery.",
        features: [
          {
            id: "lucid-environment",
            name: "Lucid Environment",
            description:
              "Generates stable interactive dream spaces from stored scenarios and sensory templates.",
          },
          {
            id: "skill-rehearsal",
            name: "Skill Rehearsal",
            description:
              "Allows safe mental repetition of movement sequences, procedures, and emergency responses.",
          },
          {
            id: "sleep-optimization",
            name: "Sleep Optimization",
            description:
              "Monitors sleep phases and adjusts stimulation to improve recovery without shortening required rest.",
          },
        ],
      },
    ],
  },
];
