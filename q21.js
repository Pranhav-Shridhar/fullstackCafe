// What is StrictMode in React?

// React's StrictMode is sort of a helper component that will help you write better react components, you can wrap a set of components with <StrictMode /> and it'll basically:

// Verify that the components inside are following some of the recommended practices and warn you if not in the console.
// Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
// Help you prevent some side effects by identifying potential risks.

import React from 'react';

function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </div>
  );
}