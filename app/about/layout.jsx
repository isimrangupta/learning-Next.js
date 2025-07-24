const AboutLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-red-600">
        <h3>This is About Layout :-</h3>
        {children}
      </body>
    </html>
  );
};

export default AboutLayout;