# Core React

# Parcel

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older Browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Two types of Export and Import

- Default Export/Import

export default component;
import component from "path"

- Named Export/Import

export const component = () => {}
import {component} from "path"

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our Store
- Connect our Store to our App // Make a Bridge
- Create a Slice (Cart)
- Dispatch (action)
- Selector

# Type of Testing (developer)

- Unit testing
- Intergration testing
- End to end testing

# Setting up testing in our App

- Install React testing library
- Install jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel config file to disable default babel transpilation
- Jest configuration --> npx jest --init
- install jsdom library