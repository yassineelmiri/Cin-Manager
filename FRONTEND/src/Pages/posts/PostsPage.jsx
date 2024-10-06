import Header from "../../home/header";
import PostsList from "./PostsList";
import Footer from "../../home/footer";

const PostsPage = () => {
  return (
    <>
      <Header />
      <div className="catalog catalog--page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row row--grid">
                <PostsList />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <button className="catalog__more" type="button">
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostsPage;
