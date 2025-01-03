react-but-worse/
├── src/
│   ├── core/               # Core functionality
│   │   ├── state.ts        # State management (like useState)
│   │   ├── vdom.ts         # Virtual DOM implementation
│   │   ├── effects.ts      # Side-effect handling (like useEffect)
│   │   ├── render.ts       # Rendering logic
│   │   └── reconciler.ts   # Diffing and updating the virtual DOM
│   ├── components/         # Framework components (if any)
│   │   └── baseComponent.ts # Base component logic
│   ├── utils/              # Helper functions
│   │   ├── diff.ts         # Diffing utilities
│   │   └── eventHandler.ts # Event handling utilities
│   ├── index.ts            # Entry point of your framework
├── examples/               # Example applications built with your framework
│   ├── todoApp/            # Example: To-Do App
│   └── counterApp/         # Example: Counter App
├── tests/                  # Tests for your framework
│   ├── core/               # Core functionality tests
│   └── examples/           # Tests for example applications
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── README.md               # Documentation for your framework
└── LICENSE                 # License for your project
