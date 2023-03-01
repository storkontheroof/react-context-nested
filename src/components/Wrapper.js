export const Wrapper = ({ title, children, color = "" }) => {
  // console.log(`>>> Wrapper ${title}`);
  const styles = color ? { borderColor: color } : {};
  return (
    <fieldset style={styles}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
};
