import React from "react";

const Blog = () => {
  return (
    <div className="md:px-5 py-10">
      <h1 className="text-center text-4xl uppercase font-bold mt-5 mb-10">
        This is a blog section
      </h1>
      <h3>
        Tell us the differences between uncontrolled and controlled components.
        ?
      </h3>
      <p className="p-4 font-bold">
        <small>
          In React, controlled components refer to components that have their
          state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally
        </small>
      </p>
      <h3> How to validate React props using PropTypes ?</h3>
      <p className="p-4 font-bold">
        <small>
          PropTypes.any : The prop can be of any data type.
          <br />
          PropTypes.bool : The prop should be a Boolean.
          <br />
          PropTypes.number : The prop should be a number.
          <br />
          PropTypes.string : The prop should be a string.
          <br />
          PropTypes.func : The prop should be a function.
          <br />
          PropTypes.array : The prop should be an array.
        </small>
      </p>
      <h3> Tell us the difference between nodejs and express js ? </h3>
      <p className="p-4 font-bold">
        <small>
          NodeJS is an event-driven, non-blocking I/O model using JavaScript as
          its main language. It helps to build scalable network applications.
          Express is a minimal and flexible Node. js web application framework
          that provides a robust set of features for web and mobile
          applications.
        </small>
      </p>
      <h3> What is a custom hook, and why will you create a custom hook?</h3>
      <p className="p-4 font-bold">
        <small>
          A custom Hook is a JavaScript function whose name starts with ”use”
          and that may call other Hooks. That's it! If you have code in a
          component that you feel would make sense to extract, either for reuse
          elsewhere or to keep the component simpler, you can pull that out into
          a function. Be called at the very top level of your React function to
          ensure that hooks are called in the same order each time a component
          renders. Start with the use keyword. Never be called inside a nested
          function, a loop, or condition. Only be called from functional
          components in React.
        </small>
      </p>
    </div>
  );
};

export default Blog;
