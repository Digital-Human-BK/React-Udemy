const MyParagraph = (props) => {
  console.log('From Paragraph');
  return <p>{props.children}</p>;
};

export default MyParagraph;
