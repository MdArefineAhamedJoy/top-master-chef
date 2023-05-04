import React, { useRef, useState } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Blog = () => {

  const [loader, setLoader] = useState(false);

  const downloadPDF = () =>{
    const capture = document.querySelector('.actual-receipt');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }
  return (
    <div className="actual-receipt md:px-5 bg-gradient-to-r from-cyan-500 to-blue-500   py-10">
      <div className="shadow-2xl md:p-10 rounded-md bg-base-100">
        <h1 className="text-center text-4xl uppercase font-bold mt-5 mb-10">
          This is a blog section
        </h1>
        <h3 className="text-xl">
          Tell us the differences between uncontrolled and controlled
          components. ?
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
        <h3 className="text-xl"> How to validate React props using PropTypes ?</h3>
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
        <h3 className="text-xl"> Tell us the difference between nodejs and express js ? </h3>
        <p className="p-4 font-bold">
          <small>
            NodeJS is an event-driven, non-blocking I/O model using JavaScript
            as its main language. It helps to build scalable network
            applications. Express is a minimal and flexible Node. js web
            application framework that provides a robust set of features for web
            and mobile applications.
          </small>
        </p>
        <h3 className="text-xl"> What is a custom hook, and why will you create a custom hook?</h3>
        <p className="p-4 py-2 font-bold">
          <small>
            A custom Hook is a JavaScript function whose name starts with ”use”
            and that may call other Hooks. That's it! If you have code in a
            component that you feel would make sense to extract, either for
            reuse elsewhere or to keep the component simpler, you can pull that
            out into a function. Be called at the very top level of your React
            function to ensure that hooks are called in the same order each time
            a component renders. Start with the use keyword. Never be called
            inside a nested function, a loop, or condition. Only be called from
            functional components in React.
          </small>
        </p>
      <button
       onClick={downloadPDF}
       disabled={!(loader ===false)}
       className="btn">{loader?<span>Downloading</span>:<span>Download</span>}</button>
      </div>
    </div>
  );
};

export default Blog;
