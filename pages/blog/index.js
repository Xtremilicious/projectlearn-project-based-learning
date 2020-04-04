import matter from "gray-matter";
import BlogList from "../../src/components/Blog/BlogList";

const Index = (props) => {
  return (
      <section>
        <BlogList allBlogs={props.allBlogs} />
      </section>
  );
};

export default Index;

Index.getInitialProps = async function () {
  // get all blog data for list
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        document,
        slug,
      };
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  return {
    allBlogs: posts,
  };
};
